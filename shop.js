const express =require("express")
const router = express.Router()

router.get("/",(req,res,next)=>{
    console.log("i am landing page")
    res.send("<h1>Welcome page</h1>")
})

module.exports =router