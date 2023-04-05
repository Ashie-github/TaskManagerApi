const request = require("supertest");
const app = require("../src/app");

test("Should signup a new user", async () => {
  await request(app)
    .post("./users")
    .send({
      name: "Joanna",
      email: "asia@test.com",
      password: "MidnightBlue123!!!",
    })
    .expect(201);
});
