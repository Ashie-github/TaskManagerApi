// https://mongoosejs.com/
// https://www.npmjs.com/package/validator

const mongoose = require("mongoose");

mongoose.connect(`${process.env.CONNECTION_URL}/${process.env.DATABASE_NAME}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
