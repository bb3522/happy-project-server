const app = require("../app");
const request = require("supertest");
const { Customer } = require("../models");
jest.setTimeout(20000);

const userTest = {
  email: "aku@rajin.menabung",
  password: "12345",
};

afterAll(async () => {
  await Customer.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});

describe("acceptance test for login feature", () => {
  test("should success login and return access_token", (done) => {
    request(app)
      .post("/customers/login")
      .send(userTest)
      .then(function (res) {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("access_token", expect.any(String));
        expect(res.body.data).toHaveProperty("email", userTest.email);
        done();
      });
  });

  test("should fail login because input invalid password", (done) => {
    request(app)
      .post("/customers/login")
      .send({
        email: "aku@rajin.menabung",
        password: "passwordsalah",
      })
      .then(function (res) {
        expect(res.status).toBe(401);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain("Invalid email or password");
        done();
      });
  });

  test("should fail login because user not found", (done) => {
    request(app)
      .post("/customers/login")
      .send({
        email: "email@ini.bohongan",
        password: "12345",
      })
      .then(function (res) {
        expect(res.status).toBe(401);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain("Invalid email or password");
        done();
      });
  });
});
