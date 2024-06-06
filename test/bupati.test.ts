import supertest from "supertest";
import UserTest, { BupatiTest } from "./test-utils";
import { web } from "../src/application/web";

describe("POST /api/bupati/create", () => {
  let jwtToken: string;
  let jwtTokenUser: string;
  beforeEach(async () => {
    await UserTest.createAdmin();
    await UserTest.create();
    jwtToken = await UserTest.loginAdmin();
    jwtTokenUser = await UserTest.login();
  });

  afterEach(async () => {
    await UserTest.deleteAdmin();
    await UserTest.delete();
    await BupatiTest.delete();
  });
  it("should return 200 if create bupati success", async () => {
    const response = await supertest(web)
      .post("/api/admin/bupati/create")
      .set("Cookie", [`token=${jwtToken}`])
      .send({
        nama: "bupati test",
        periode: "2022-2023",
      });

    console.log(response);
    expect(response.status).toBe(200);
    expect(response.body.data.periode).toBe("2022-2023");
    expect(response.body.data.nama).toBe("bupati test");
  });

  it("should reject if token invalid", async () => {
    const response = await supertest(web)
      .post("/api/admin/bupati/create")
      .set("Cookie", [`token=${jwtToken + 1}`])
      .send({
        nama: "bupati test",
        periode: "2022-2023",
      });

    console.log(response);
    expect(response.status).toBe(401);
  });

  it("should reject if token not admin", async () => {
    const response = await supertest(web)
      .post("/api/admin/bupati/create")
      .set("Cookie", [`token=${jwtTokenUser}`])
      .send({
        nama: "bupati test",
        periode: "2022-2023",
      });

    console.log(response);
    expect(response.status).toBe(403);
    expect(response.body.errors).toBe("Access denied");
  });

  it("should reject if request is invalid", async () => {
    const response = await supertest(web)
      .post("/api/admin/bupati/create")
      .set("Cookie", [`token=${jwtToken}`])
      .send({
        nama: "",
        periode: "",
      });

    console.log(response);
    expect(response.status).toBe(400);
    expect(response.body.message).toEqual([
      "nama minimal harus ada 1 karakter",
      "periode minimal harus ada 1 karakter",
    ]);
  });
});

describe("PUT /api/admin/bupati/update/:id", () => {
  let jwtToken: string;
  beforeEach(async () => {
    await UserTest.createAdmin();
    jwtToken = await UserTest.loginAdmin();
    await BupatiTest.create();
  });

  afterEach(async () => {
    await UserTest.deleteAdmin();
    await BupatiTest.delete();
  });
  it("should return 200 if update bupati success", async () => {
    const bupati = await BupatiTest.get();
    const response = await supertest(web)
      .put(`/api/admin/bupati/update/${bupati.bupati_id}`)
      .set("Content-Type", "application/json")
      .set("Cookie", [`token=${jwtToken}`])
      .send({
        nama: "bupati test update",
        periode: "2023-2024",
      });
    console.log(response.error);
    expect(response.status).toBe(200);
    expect(response.body.data.periode).toBe("2023-2024");
    expect(response.body.data.nama).toBe("bupati test update");
  });
});

describe("DELETE /api/admin/bupati/delete/:id", () => {
  let jwtToken: string;
  beforeEach(async () => {
    await UserTest.createAdmin();
    jwtToken = await UserTest.loginAdmin();
    await BupatiTest.create();
  });

  afterEach(async () => {
    await UserTest.deleteAdmin();
  });

  it("should return 200 if delete bupati success", async () => {
    const bupati = await BupatiTest.get();
    const response = await supertest(web)
      .delete(`/api/admin/bupati/delete/${bupati.bupati_id}`)
      .set("Cookie", [`token=${jwtToken}`]);

    expect(response.status).toBe(200);
    expect(response.body.data.periode).toBe("2022-2023");
    expect(response.body.data.nama).toBe("bupati test");
  });

  it("should return 404 if bupati not found", async () => {
    const response = await supertest(web)
      .delete(`/api/admin/bupati/delete/0`)
      .set("Cookie", [`token=${jwtToken}`]);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Bupati not found");
  });
});


