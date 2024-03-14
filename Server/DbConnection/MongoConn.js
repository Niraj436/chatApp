import moongose from "mongoose"



const connectToMoongose = async() =>{
    try {
        await moongose.connect(process.env.MONGO_URL)
        console.log("connected to databse")
    } catch (error) {
        console.log("error connecting to database", error.message);
    }
}

export default connectToMoongose