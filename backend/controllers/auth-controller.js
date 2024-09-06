import { User } from "../models/user-model.js";
import  bcrypt  from 'bcryptjs';
import jwt from "jsonwebtoken"

const signup = async (req, res) => {
    try {
        const { fullName, studentId, email, password } = req.body;
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (!fullName || !password || !email) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(password, saltRound);
        const userCreated = await User.create({ fullName, email, studentId, password: hash_password });
        res.status(200).json({
            message: "Signup Successful",
            token: await userCreated.generateAuthToken(),
            userId: userCreated._id.toString(),
        })
    } catch (error) {
        console.log("Sign up controller Error", error);
    }
}

const authControllers = { signup }

export { authControllers }