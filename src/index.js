// httpstatuses.com

const express = require("express");
require("./db/mongoose"); // only run this file, don't import anything
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// // Setting up middleware
// // disabling GET requests
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// maintanance function
// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintanance. Please try back soon.");
// });

app.use(express.json()); // automatically pass json as an object
app.use(userRouter);
app.use(taskRouter);

// run on port 4000
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// TEST
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./models/task");
const User = require("./models/user");

const myHashingFunction = async () => {
  const password = "Red1234!";
  const hashedPassword = await bcrypt.hash(password, 8);
  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("Red1234!", hashedPassword);
  console.log(isMatch);
};
// myHashingFunction();

const myFunctionToken = async () => {
  const token = jwt.sign({ _id: "abc123" }, process.env.JWT_SECRET, {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, process.env.JWT_SECRET);
  console.log(data);
};

// myFunctionToken();

const mainPopulateTask = async () => {
  const task = await Task.findById("63bc2d0be9dd4f393086ba16");
  await task.populate("owner").execPopulate();
  console.log(task.owner);
};

// mainPopulateTask();

// "tasks" field is defined in "user" model
const mainPopulateUser = async () => {
  const user = await User.findById("63bc2d05e9dd4f393086ba14");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

// mainPopulateUser();

// // Multer
// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a Word document"));
//     }
//     cb(undefined, true);

//     // cb(new Error("File must be a PDF"));
//     // cb(undefined, true);
//     // cb(undefined, false);
//   },
// });
// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );
