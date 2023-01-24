// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manger";

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
console.log(id.id.length);
console.log(id.toHexString().length);

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database");
//     }
//     const db = client.db(databaseName);
//     db.collection("users").insertOne({
//       name: "Joanna",
//       age: 26,
//       _id: id,
//     });
//     db.collection("users").insertMany(
//       [
//         { name: "Jen", age: 28 },
//         { name: "John", age: 32 },
//       ],
//       (error, result) => {
//         if (error) {
//           return console.log("Unable to insert documents");
//         }
//         console.log(result.ops);
//       }
//     );
//   }
// );

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database");
//     }
//     const db = client.db(databaseName);
//     db.collection("tasks").insertMany(
//       [
//         { description: "Buy groceries", completed: true },
//         { description: "Do laundry", completed: true },
//         { description: "Wash the dishes", completed: false },
//       ],
//       (error, result) => {
//         if (error) {
//           return console.log("Unable to insert documents");
//         }
//         console.log(result.ops);
//       }
//     );
//   }
// );

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("6397087c9eaecd294855fae6") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 32 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 32 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // task
    // db.collection("tasks").findOne(
    //   {
    //     _id: new ObjectID("63971db90360148c746bfee6"),
    //   },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("There was an error!");
    //     }
    //     return console.log(task);
    //   }
    // );

    // task
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("There was an error");
    //     }
    //     return console.log(tasks);
    //   });
  }
);
