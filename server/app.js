const express = require("express");
const app = express();
const cors = require("cors");
const dotenv=require("dotenv");
dotenv.config()
const connectDb=require("./Database/database")
connectDb()
const router=require("./routes/router")
app.use(express.json());
app.use(cors());



//checkout api....
app.use(router)



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
  })


