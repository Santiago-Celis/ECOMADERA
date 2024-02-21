const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')

exports.register = async (req,res)=>{
    
    try {
        const name = req.body.name;
        const email =  req.body.email;
        const password = req.body.password;
        const phone = req.body.phone;
        let passHash = await bcryptjs.hash(password,8)

        conexion.query('INSERT INTO user SET ?', {name:name, email:email, password:passHash, phone:phone}, (error, results)=>{
            if(error){console.log(error)}
        })
    } catch (error) {
        console.log(error);
    }

}