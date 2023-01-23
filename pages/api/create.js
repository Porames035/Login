const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { hidePassword } = require('../../passwordFunction')

const createData = async (req,res) => {

    const { username, password } = req.body
    const sendData = await prisma.user.create({
        data: {
            username: username,
            password: hidePassword(password)
        }
    })
    res.send(sendData)
}

export default createData