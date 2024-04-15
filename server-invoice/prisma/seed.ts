import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.createMany({
      data: [
        {
          id: '1',
          email: 'admin@leo-project.com',
          password: 'password1',
          name: 'leoAdmin',
        },
        {
          email: 'user@leo-project.com',
          password: 'password2',
          name: 'leoUser',
        },
      ],
    });
    await prisma.invoice.createMany({
      data: [
        {
          vendorName: 'Amazon',
          description: 'Rental',
          dueDate: '10/31/2023',
          amount: '100$',
          paid: true,
          userId: '1',
        },
        {
          vendorName: 'Sysco',
          description: 'Rental',
          dueDate: '10/31/2023',
          amount: '228.75$',
          paid: false,
          userId: '1',
        },
      ],
    }),
      console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
