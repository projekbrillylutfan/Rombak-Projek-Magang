import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";
import request from "supertest";
import { web } from "../src/application/web";
import { Bupati } from "@prisma/client";

class UserTest {
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async deleteUpdate() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test update",
      },
    });
  }

  static async deleteAdmin() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test admin",
      },
    })
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

  static async createAdmin() {
    await prismaClient.user.create({
      data: {
        nama: "test admin",
        jabatan: "admin",
        username: "test admin",
        password: await bcrypt.hash("test admin", 10),
        role: "admin",
      }
    })
  }

  static async login(): Promise<string> {
    const response = await request(web)
      .post("/api/users/login") // Sesuaikan endpoint ini dengan endpoint login Anda
      .send({
        username: "test",
        password: "test",
      });

    // login user
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

  static async loginAdmin(): Promise<string> {
    const response = await request(web)
      .post("/api/users/login") // Sesuaikan endpoint ini dengan endpoint login Anda
      .send({
        username: "test admin",
        password: "test admin",
      });

    // login admin
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

export class BupatiTest {
  static async delete() {
    await prismaClient.bupati.deleteMany({
      where: {
        nama: "bupati test",
      },
    });
  }

  static async create() {
    await prismaClient.bupati.create({
      data: {
        nama: "bupati test",
        periode: "2022-2023",
      },
    });
  }

  static async get(): Promise<Bupati> {
    const bupatiGet = await prismaClient.bupati.findFirst({
        where: {
            nama: "bupati test"
        }
    })

    if (!bupatiGet!.bupati_id) {
        throw new Error("User is not found");
    }

    return bupatiGet!;
}
}

export default UserTest;
