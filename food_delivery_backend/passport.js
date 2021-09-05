const passport = require('passport')
var JWTStrategy = require('passport-jwt').Strategy;
var ExtractJWT = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('local-stategy')
const userSchema = require('./DB/Schema/userSchema')
require('dotenv').config();

var options = {
    jwtFromRequest : ExtractJWT.fromHeader('authorization'),
    secretOrKey : process.env.SECRET_KEY,
    issuer : process.env.ISSUER_NAME,
    audience : process.env.AUDIENCE
}

//Default JWT Strategy
const jwtLogin = new JWTStrategy(options, function(payload, done){
    userSchema.findOne({username : payload.email}, (err, user) => {
        if(err){
            return done(err, false);
        }
        if(user){
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    })
})

passport.use(jwtLogin)



