const { JWT_SECRET } = require("../config/config");

const jwt=require("jsonwebtoken");

function authMiddleware(req, res, next){

    const token=req.header.authorization;

    if(!token || !token.startsWith("Bearer ")){
        return res.status(401).json({ msg: "Access denied. No token provided" })
    }
    try {
        const jwtToken = token.split(" ")[1];
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        
        req.user = decoded; // Attaching user data to request object
        next();
    } catch (error) {
        return res.status(403).json({ msg: "Invalid or expired token" });
    }
}
module.exports = authMiddleware;
