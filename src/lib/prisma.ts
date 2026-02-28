import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"; // Você precisará instalar: npm install @prisma/adapter-pg pg
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter }); // Passe o adapter aqui

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;
