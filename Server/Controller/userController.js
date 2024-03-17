import User from "../Model/userModel.js"

export const getUsersForSidebar = async (req,res) => {
    try {
        

        const allUsers = await User.find().select("-password")

        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({error:"Something went wrong"})
    }
}