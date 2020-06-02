import { getConnection } from "typeorm";
import { createDb } from "../database/startup/startup.test.db";
import app from "../../src/server";
import request from "supertest";

beforeEach(async () => {
  const connection = await createDb();
  await connection.runMigrations();
});

afterEach(() => {
  return getConnection().close();
});

describe("get users", () => {
  it("should return all users", async () => {
    await request(app)
      .get("/users")
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(res.body).toHaveLength(3);
        expect(res.body[0]).not.toHaveProperty("password");
      });
  });
});

describe("get one user", () => {
  it("should return the user with the specified id", async () => {
    const id = 2;
    await request(app)
      .get(`/users/${id}`)
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual("js");
        expect(res.body).not.toHaveProperty("password")
      });
  });
});