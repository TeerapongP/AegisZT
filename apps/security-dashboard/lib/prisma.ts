import prismaClientPackage from "@prisma/client";

const PrismaClient = (prismaClientPackage as { PrismaClient: new () => any }).PrismaClient;

const globalForPrisma = globalThis as unknown as {
  prisma?: any;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;