import User from "../models/User.js";


export const create = async (req,res) =>{
    try {

        const UserData = new User(req.body);
        const {email} = UserData;

        const userExits = await User.findOne({email});
        if(userExits){
            return res.status(200).json({message:"User alerady exits"});
        }

        const savedUser = await UserData.save();
        return res.status(200).json(savedUser);

        
    } catch (error) {
        res.status(500).json({error: "Internal Error"});
    }
}


export const fetch = async (req, res) =>{
    try {

        const users = await User.find();
        if(users.length === 0){
            return res.status(404).json({message:"User not found"});
        }

        return res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({error: "Internal Error"});
    }
};