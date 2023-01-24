const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./task");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw Error("Age must be a positive number");
        }
      },
    },
    email: {
      type: String,
      unique: true,
      require: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      require: true,
      trim: true,
      minlength: 7,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain the word "password"');
        }
      },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    avatar: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
);

// Accessing middleware ////////////////////////////////////////////////////
// virtual field for the user: "tasks"
userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id", // field from "User"
  foreignField: "owner", // field from "Task"
});

// method of an instance of a User for sending back relevant info on the user
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;

  return userObject;
};

// method of instance of a User for generating a token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// creating function for checking credentials
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login"); // Unable to login. Email was not found.
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login"); // Unable to login. Password incorrect.
  }
  return user;
};

// hashing the password before saving
userSchema.pre("save", async function (next) {
  const user = this; // we cannot use an arrow function because it doesn't bind "this"
  // password
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// delete user tasks when user is removed
userSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});

// Creating model and exporting it /////////////////////////////////////////
const User = mongoose.model("User", userSchema);
module.exports = User;
