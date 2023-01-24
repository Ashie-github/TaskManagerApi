const User = require("../src/models/user");
const Task = require("../src/models/task");

// create user
const user = new User({
  name: "   Amy   ",
  age: "   32   ",
  email: "   amy@test.com   ",
  password: "   pass   ",
});
user
  .save()
  .then(() => {
    console.log(user);
  })
  .catch((err) => console.log("Error!", err));

// create task
const task = new Task({
  description: "   Clean windows   ",
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((err) => console.log(err));
