const app = require("../app");
const request = require("supertest");
const { Post, Category, Customer, CustomerPost } = require("../models");

const { createTokenFromPayload } = require("../helpers/hashPassword");

let validToken;
const invalidToken = "123456789eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

const userTest = {
  username: "xxxyyy",
  email: "aku@keren.com",
  password: "12345",
};

beforeAll((done) => {
  Customer.create(userTest).then((result) => {
    validToken = createTokenFromPayload({
      id: result.id,
    });
    return Category.create({
      name: "Life",
    })
      .then(() => {
        return Post.bulkCreate([
          {
            title: "Calculus1",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus2",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus3",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus4",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus5",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus6",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus7",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus8",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus9",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus10",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus11",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus12",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus13",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus14",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus16",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus17",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Calculus",
            content:
              "Calculus, originally called infinitesimal calculus or 'the calculus of infinitesimals.",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_Math_and_Inf.svg/242px-Nuvola_Math_and_Inf.svg.png",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
      .then(() => {
        return CustomerPost.create({
          customerId: 1,
          postId: 3,
        });
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

afterAll(async () => {
  await Post.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await Category.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await Customer.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await CustomerPost.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});

describe("acceptance test for Customer Favorites List", () => {
  test("should success get data all post favorites from user", (done) => {
    request(app)
      .get("/customers/favorites")
      .set("access_token", validToken)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toEqual(expect.any(Object));
        expect(body.data.postData.length).toBeGreaterThan(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should success add data certain post to user favorites", (done) => {
    const postId = 10;
    request(app)
      .post(`/customers/posts/${postId}`)
      .set("access_token", validToken)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(201);
        expect(body).toEqual(expect.any(Object));
        expect(body).toHaveProperty("postId", `${postId}`);
        expect(body).toHaveProperty("customerId", 1);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should fail add post to favorites because post not found", (done) => {
    const postId = 20000;
    request(app)
      .post(`/customers/posts/${postId}`)
      .set("access_token", validToken)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toEqual(expect.any(Object));
        expect(body.error).toHaveProperty("message", "Post not found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should fail add post to favorites because user not yet login", (done) => {
    const postId = 20000;
    request(app)
      .post(`/customers/posts/${postId}`)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toEqual(expect.any(Object));
        expect(body).toHaveProperty(
          "message",
          "Invalid Token, please login first"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should fail add post to favorites because user is not customer", (done) => {
    const postId = 20000;
    request(app)
      .post(`/customers/posts/${postId}`)
      .set("access_token", invalidToken)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(401);
        expect(body).toEqual(expect.any(Object));
        expect(body).toHaveProperty(
          "message",
          "Invalid Token, please login first"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
