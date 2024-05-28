import supertest from "supertest";
import UserTest from "./test-utils";
import { web } from "../src/application/web";

describe("POST /api/users/register", () => {
  afterEach(async () => {
    await UserTest.delete();
  });
  it("should return 200 if register success", async () => {
    const response = await supertest(web).post("/api/users/register").send({
      nama: "test",
      jabatan: "test",
      username: "test",
      password: "test",
    });

    console.log(response);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.nama).toBe("test");
  });

  it("should reject if request invalid", async () => {
    const response = await supertest(web).post("/api/users/register").send({
      nama: "",
      jabatan: "",
      username: "",
      password: "",
    });

    console.log(response);
    expect(response.status).toBe(400);
    expect(response.body.message).toEqual([
      "nama minimal harus ada 1 karakter",
      "jabatan minimal harus ada 1 karakter",
      "username minimal harus ada 1 karakter",
      "password minimal harus ada 1 karakter",
    ]);
  });
});

describe("POST /api/users/login", () => {
  beforeEach(async () => {
    await UserTest.create();
  });
  afterEach(async () => {
    await UserTest.delete();
  });

  it("should return 200 if login success", async () => {
    const response = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "test",
    });

    console.log(response);
    expect(response.status).toBe(200);
    expect(response.body.data.akses_token).toBeDefined();
  });

  it("should reject if username invalid", async () => {
    const response = await supertest(web).post("/api/users/login").send({
      username: "salah",
      password: "test",
    });

    console.log(response);
    expect(response.status).toBe(401);
    expect(response.body.message).toEqual("Username not found");
  });

  it("should reject if password invalid", async () => {
    const response = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "salah",
    });

    console.log(response);
    expect(response.status).toBe(401);
    expect(response.body.message).toEqual("Wrong password");
  });
});

describe("should be able to get user", () => {
  let jwtToken: string;
  beforeEach(async () => {
    await UserTest.create();
    jwtToken = await UserTest.login();
  });
  afterEach(async () => {
    await UserTest.delete();
  });

  it("should return 200 if get user success", async () => {
    const response = await supertest(web)
      .get("/api/users/current")
      .set("Cookie", [`token=${jwtToken}`]);

    console.log(response);

    expect(response.status).toBe(200);
  });

  it("should reject if token invalid", async () => {
    const response = await supertest(web)
      .get("/api/users/current")
      .set("Cookie", [`token=${jwtToken + 1}`]);

    console.log(response);

    expect(response.status).toBe(401);
  });
});


