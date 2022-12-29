const bcrypt = require('bcrypt');

const hidePassword = (password) => {
    const salt = bcrypt.genSaltSync(13);
    const hash = bcrypt.hashSync( password, salt);
    return hash
}

const checkPassword = async ( hash, password ) => {
    const match = await bcrypt.compare(password, hash);
    return match
}  

module.exports = { hidePassword, checkPassword }
