const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { hidePassword } = require('../passwordFunction')


async function main() {
  const alice = await prisma.user.upsert({
    where: { username: 'Alice' },
    update: {},
    create: {
      username: 'Alice',
      password: hidePassword('123456')
    },
  })

  console.log({ alice })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })