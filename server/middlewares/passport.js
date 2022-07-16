var JWTStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../configs/db')

//middileware
module.exports = function(passport){
    let params ={}
    params.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();
    params.secretOrKey= process.env.JWT_TOKEN

    passport.use(
        new JWTStrategy(params, function(jwt_payload, next){
            let userID = jwt_payload._id;
            db.query(`SELECT * FROM users WHERE _id ='${userID}'`, function(err, result){
                if(err){
                    return next(err, false)
                }
                if(result[0]){
                    return next(null, result[0])
                }else{
                    return next(null, false)
                }
            })
        })
    )
}