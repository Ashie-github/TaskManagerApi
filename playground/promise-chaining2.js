require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("639b0ee9d402451a802a2578")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(`Count of documents where task is incomplete: ${result}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async function (id) {
  try {
    const task = await Task.findByIdAndDelete(id);
    console.log(task);
    const count = await Task.countDocuments({ completed: false });
    console.log(`Count of documents where task is incomplete: ${count}`);
  } catch (error) {
    console.log(error);
  }
};

deleteTaskAndCount("639b1996091b04396cc04b3c");
