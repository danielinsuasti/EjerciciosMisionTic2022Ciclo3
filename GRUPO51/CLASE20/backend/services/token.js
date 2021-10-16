var jwt = require("jsonwebtoken")



module.exports = {
    encode : async(user) =>{
        const token = jwt.sign({
            _id : user._id,
            nombre : user.nombre,
            correo : user.correo,
            rol : user.rol
        }, "UnafraseSecretaQueCodificalosdatosdelUsuario", {expiresIn : '24h' });
        return token;
    }
}