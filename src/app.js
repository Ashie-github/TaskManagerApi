const express = require("express");
require("./db/mongoose"); // only run this file, don't import anything
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json()); // automatically pass json as an object
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
