const momgoose= require("mongoose")
const connectDB=async() =>{
    try {
        const conn= await momgoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline)
    }catch (error){
        console.error(error)
        process.exit(1)
    
}
}

module.exports=connectDB 