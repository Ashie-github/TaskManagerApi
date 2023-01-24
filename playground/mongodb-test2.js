const { MongoClient, ObjectID } = require("mongodb");
// npm i nodemon@1.18.9 --save-dev

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manger";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    //     db.collection("users")
    //       .updateOne(
    //         { _id: new ObjectID("639717ea2543896cf8f78c11") },
    //         // { $set: { name: "Mike" } }
    //         { $inc: { age: 1 } }
    //       )
    //       .then((result) => console.log(result))
    //       .catch((error) => console.log(error));
    //   }

    // db.collection("tasks")
    //   .updateMany(
    //     {},
    //     // { $set: { name: "Mike" } }
    //     { $set: { completed: true } }
    //   )
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));

    db.collection("tasks")
      .deleteOne({ description: "Do laundry" })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
);
