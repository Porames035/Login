const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { hidePassword } = require('../../passwordFunction')

const editData = async (req,res) => {

    const { username, password } = req.body
    const id = req.query.id
    const sendEditData = await prisma.user.update({
        where: {id: Number(id) },
        data: {
            username: username,
            // password: hidePassword(password)
        }
    })
    res.json(sendEditData)
}


export default editData