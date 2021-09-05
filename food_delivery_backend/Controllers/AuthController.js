const DataService = require('../data.module');
const Data = new DataService();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

const JWTForUser = (data) => {
    let Token = jwt.sign({email : data.email}, process.env.SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: 60 * 60 * 5,
        issuer : process.env.ISSUER,
        audience : process.env.AUDIENCE,
    });
    return Token;
}

const Signup = async (req,res) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, hash){
        if(err){
            console.log('error while generating salt for hashing')
        }
        else{
            bcrypt.hash(req.body.password, hash , async (err, hash) => {
                const data = {
                    _id : req.body.email,
                    name : req.body.name,
                    email : req.body.email,
                    password : hash
                }
                if(err){
                    console.log('error while hashing', err)
                }
                else{
                    await Data.addUser(data).then(res => {
                        console.log(res.json());
                    })
                    .catch(err => {
                        console.log(err)
                        res.send(false)
                    })
                }
            })
        }
        
    })
};


const Login = async (req,res) => { 
    const data = {
        username : req.body.username,
        password : req.body.password
    };
    console.log(data)
    await Data.getUser(data).then(result => {
        bcrypt.compare(data.password, result[0].password, (err, resolve) => {
            if(resolve){
            const user = {
                username : result[0].username,
                status : resolve,
                token : JWTForUser(data)
            }
            res.send(user)
            }
            else{
                console.log('password incorrect')
                console.log(err)
                res.send(false)
            }
        });
    })
    .catch(err => {
        console.log(err)
    })
};


module.exports = {
    login : Login,
    Signup : Signup
}