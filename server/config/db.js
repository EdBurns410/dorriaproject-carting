const mongoose = require('mongoose')

const connectDb = async() =>{
    if (mongoose.connections[0].readyState) {
        console.log("Using existing connection.")
        return
    }
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        })
        console.log("Database connected.")

    }catch(error){
        console.log(error)
    }
}

module.exports = connectDb