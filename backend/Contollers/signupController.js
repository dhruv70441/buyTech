import User from "../models/user.model.js";
import bcrypt from "bcrypt"

const signupController = async (req, res) => {
    
    const { firstName, lastName, email, password } = req.body;
    try {
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(409).json({
                success: false,
                message: 'User already exist. Please login!'
            })
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const user = new User({firstName,lastName,email,password: hashedPassword})
        await user.save()
        
        return res.status(201).json({
            success:true,
            message:'User created successfully',
            user
        })
        
    } catch (err) {
        return res.status(500).json({
            success:false,
            message:'Error in signup',
            error: err.message
        })        
    }
    
}

export default signupController;