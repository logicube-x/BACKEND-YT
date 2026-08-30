const app=require("./src/app");
const connectDB=require("./src/db/db")

connectDB()

app.listen(1000,()=>{
    console.log('The server is running on port 1000..');
})