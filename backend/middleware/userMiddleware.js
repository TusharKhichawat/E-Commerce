const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken");

function userMiddlewares(req, res, next) {
    const token = req.header.authorization;
    if (!token || !token.startWith("Bearer ")) {
        return res.status(403).json({ msg: "No token provided" })
    }
    try {
        const jwtToken=token.split(" ")[1];
        const decodedValue=jwt.verify(jwtToken, JWT_SECRET);

        req.username=decodedValue.username;
        req.randomData="Adsadsadsadssd";

        next();
    }catch(error){
        return res.status(403).json({msg:"Invalid or expired token"});
    }
}
module.exports=userMiddlewares;