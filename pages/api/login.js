const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { checkPassword } = require('../../passwordFunction')
const jwt = require('jsonwebtoken');
const cookies = require('cookies-next');


const key  = 'keyPassword'


const login = async ( req,res ) => {

    const { username, password } = req.body
    const data = await prisma.user.findFirstOrThrow({
        where: { username }
    })
    if ( await checkPassword( data.password, password  ) ) {
         const payload = {
            Username: username,
            exp: Date.now() + 3600
        }   
        const token = jwt.sign( payload , key);
        const cookie = cookies.setCookie( 'token', token, { req, res, maxAge: 60 * 6 * 24 } )
        res.redirect(301, '/test')

    } else {
        return res.status(200).json({ message: 'Username or Password incorrect!' });

    }

    res.end()
}
 
export default login