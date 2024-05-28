import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";
import request from "supertest";
import { web } from "../src/application/web";

class UserTest {
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async create() {
    await prismaClient.user.create({
      data: {
        nama: "test",
        jabatan: "test",
        username: "test",
        password: await bcrypt.hash("test", 10),
      },
    });
  }

  static async login(): Promise<string> {
    const response = await request(web)
      .post("/api/users/login") // Sesuaikan endpoint ini dengan endpoint login Anda
      .send({
        username: "test",
        password: "test",
      });

    // Pastikan responsnya sesuai dengan yang diharapkan
    if (response.status !== 200) {
      throw new Error("Login failed");
    }
    // Ambil token dari cookie
    const cookies = response.headers["set-cookie"];
    console.log(cookies);
    if (!cookies || !Array.isArray(cookies)) {
      throw new Error("Cookies not found or malformed");
    }

    const tokenCookie = cookies.find((cookie: string) =>
      cookie.startsWith("token=")
    );
    if (!tokenCookie) {
      throw new Error("Token cookie not found");
    }

    // Ekstrak token dari cookie
    const token = tokenCookie.split(";")[0].split("=")[1];
    return token;
  }
}

export default UserTest;
