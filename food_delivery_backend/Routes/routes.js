const passport = require("passport")
const passportService = require('../passport')

//Controllers
const authController = require("../Controllers/AuthController")


const requireAuth = passport.authenticate('jwt', {session : false})


//Routes
module.exports = function(app) {
    app.post('/login' ,cors(), authController.login)
    app.post('/signup' ,cors(), authController.Signup)
} 