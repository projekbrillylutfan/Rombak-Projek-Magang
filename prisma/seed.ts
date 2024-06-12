import bcrypt from "bcrypt";
import { prismaClient } from "../src/application/database";

async function main() {
    const adminPassword = await bcrypt.hash("admin", 10);

    const adminUser = await prismaClient.user.upsert({
        where: {
            username: "admin"
        },
        update: {},
        create: {
            nama: "admin",
            jabatan: "admin",
            username: "admin",
            password: adminPassword,
            role: "admin"
        }
    })

    console.log('Admin user created:', adminUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });