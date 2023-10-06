import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const user = await prisma.user.findUnique({ where: { id: 'someId' } });
const employees = await prisma.employee.findMany({ where: { userId: 'someUserId' } });

export { prisma, user, employees };
