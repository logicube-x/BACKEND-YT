const mongoose=require("mongoose")

async function connectDB(){

    await mongoose.connect(
      "mongodb+srv://arshaminmay2006_db_user:Or8mwbRywQ2nEPDO@cohort-cluster.fwykjhh.mongodb.net/arshu");

      console.log('Connected to database');
} 