const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const deleteData = async (req,res) => {

    const { username } = req.body
    const deleteData = await prisma.user.update({
        where: { 
            id
        },
    })
    res.send(deleteData)
}
export default deleteData