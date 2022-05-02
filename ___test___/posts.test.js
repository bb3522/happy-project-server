const app = require("../app");
const request = require("supertest");
const { Post, Category } = require("../models");

beforeAll((done) => {
  Category.create({
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
      done();
    })
    .catch((err) => {
      done(err);
    });
});

afterAll(async () => {
  await Post.destroy({ truncate: true, cascade: true, restartIdentity: true });
  await Category.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});

describe("acceptance test for Customer Posts List", () => {
  test("should success get data all posts without any query filter", async () => {
    const res = await request(app).get("/customers/posts");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.postData)).toBeTruthy();
    expect(res.body.data.postData.length).toBeGreaterThan(0);
  });

  test("should success get data posts with one query (seach) ", async () => {
    const keyword = "Calculus17";
    const res = await request(app).get(`/customers/posts?search=${keyword}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.postData)).toBeTruthy();
    expect(res.body.data.postData.length).toBeGreaterThan(0);
  });

  test("should success get data posts with two query (seach and filter by category) ", async () => {
    const keyword = "Calculus";
    const category = 1;
    const res = await request(app).get(
      `/customers/posts?search=${keyword}&category=${category}`
    );
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.postData)).toBeTruthy();
    expect(res.body.data.postData.length).toBeGreaterThan(0);
  });

  test("should success get data all posts on certain page", async () => {
    const page = 1;
    const res = await request(app).get(`/customers/posts?page=${page}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.postData)).toBeTruthy();
    expect(res.body.data.postData.length).toBeGreaterThan(0);
    expect(res.body.data.currentPage).toBe(page);
  });

  test("should success get one post data with given params id", async () => {
    const postId = 1;
    const res = await request(app).get(`/customers/posts/${postId}`);
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(expect.any(Object));
    expect(res.body.data).toHaveProperty("id", postId);
  });

  test("should fail get one post data with given invalid params id", async () => {
    const postId = 5000;
    const res = await request(app).get(`/customers/posts/${postId}`);
    expect(res.status).toBe(404);
    expect(res.body).toEqual(expect.any(Object));
    expect(res.body.error).toHaveProperty("message", "Post not found");
  });
});
