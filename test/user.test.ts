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
