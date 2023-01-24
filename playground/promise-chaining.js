require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("63a1773622a0c84df423ddfe", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(`Count of documents where age is "1": ${result}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async function (id, age) {
  try {
    const user = await User.findByIdAndUpdate(id, { age });
    console.log(user);
    const count = await User.countDocuments({ age });
    console.log(`Count of documents where age is "${age}": ${count}`);
  } catch (err) {
    console.log(err);
  }
};

updateAgeAndCount("63a4633cfc3fc70d9812f39c", 1);
