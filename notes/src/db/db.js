const mongoose=require("mongoose")

async function connectDB(){

    await mongoose.connect(
      "mongodb+srv://arshaminmay2006_db_user:srfMw1XcOJ2fcMbq@yt-a-cluster.aegzwcg.mongodb.net/arsh",
    );

      console.log('Connected to database');
} 

module.exports=connectDB;