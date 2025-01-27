import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const loginController = async (req,res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password."
            })
        }
    
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password."
            })   
        }
        
        const token = jwt.sign({_id: user._id}, process.env.SECRET, {expiresIn:'90d'})

        return res.status(200).json({
            status: true,
            message: "user login successfully.",
            token
        })    

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in login",
            error: err.message
        })
    }
}
export default loginController;