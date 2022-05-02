const app = require("../app");
const request = require("supertest");
const { Customer } = require("../models");
jest.setTimeout(20000);

beforeAll(async () => {
  await Customer.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});

describe("acceptance test for register feature", () => {
  test("should add new user with all request data", (done) => {
    const newUser = {
      email: "aku@rajin.menabung",
      password: "12345",
      username: "akucustomer",
    };
    request(app)
      .post("/customers/register")
      .send(newUser)
      .then(function (res) {
        expect(res.status).toBe(201);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.data).toHaveProperty("email", newUser.email);
        done();
      });
  });

  test("should fail add new user because not input email", (done) => {
    const newUser = { password: "12345", username: "akucustomer" };
    request(app)
      .post("/customers/register")
      .send(newUser)
      .then(function (res) {
        expect(res.status).toBe(400);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain(
          "Customer.email cannot be null"
        );
        done();
      });
  });

  test("should fail add new user because email format is invalid", (done) => {
    const newUser = {
      email: "aku",
      password: "12345",
      username: "akucustomer",
    };
    request(app)
      .post("/customers/register")
      .send(newUser)
      .then(function (res) {
        expect(res.status).toBe(400);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain("Email format is invalid");
        done();
      });
  });

  test("should fail add new user because email is empty string", (done) => {
    const newUser = { email: "", password: "12345", username: "akucustomer" };
    request(app)
      .post("/customers/register")
      .send(newUser)
      .then(function (res) {
        expect(res.status).toBe(400);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain("Email is required");
        done();
      });
  });

  test("should fail add new user because email is already registered", (done) => {
    const newUser = {
      email: "aku@rajin.menabung",
      password: "12345",
      username: "akucustomer",
    };
    request(app)
      .post("/customers/register")
      .send(newUser)
      .then(function (res) {
        expect(res.status).toBe(400);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain("Email has been registered");
        done();
      });
  });

  test("should fail add new user because not input password", (done) => {
    const newUser = { email: "aku@rajin.menabung", username: "akucustomer" };
    request(app)
      .post("/customers/register")
      .send(newUser)
      .then(function (res) {
        expect(res.status).toBe(400);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain(
          "Customer.password cannot be null"
        );
        done();
      });
  });

  test("should fail add new user because email is empty string", (done) => {
    const newUser = {
      email: "aku@rajin.menabung",
      password: "",
      username: "akucustomer",
    };
    request(app)
      .post("/customers/register")
      .send(newUser)
      .then(function (res) {
        expect(res.status).toBe(400);
        expect(res.headers["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.body.error.message).toContain("Password is required");
        done();
      });
  });
});
