const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const SECRET_KEY = "notesapi"

exports.getAllUsers = async(req,res,next)=>{
    const user = await User.find();
    res.status(200).json({
        user
    })
}
exports.signup = async (req, res, next) => {

    const { name, email, password } = req.body;

    try {
        let existingUser;

        existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({
                message: "user already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!existingUser) {
            let newUser = await User.create({
                name: name,
                email: email,
                password: hashedPassword
            })
            const token = jwt.sign({ email: newUser.email, id: newUser._id }, SECRET_KEY)
            res.status(200).json({
                message: "New User Created",
                newUser,
                token
            })
        }


    }
    catch (err) {
        console.log(err);
    }
}

exports.login = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        let existingUser = await User.findOne({ email });
        if (!existingUser) {
            res.status.json({
                message: "No user exists"
            })
        }
        if (existingUser) {
            const isPassword = await bcrypt.compare(password, existingUser.password);


            if (!isPassword) {
                res.status(400).json({
                    mesasge: "incorrect password"
                })
            }
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
            res.status(200).json({
                message: "loged in",
                token
            })

        }
    }
    catch (err) {
        res.status(400).send('Internal Error');
        console.log(err)
    }

}








