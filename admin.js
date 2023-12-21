const express =require("express")
const router  =express.Router()
const bodyParser =require("body-parser")

router.use(bodyParser.urlencoded())




router.get("/addProduct",(req,res,next)=>{
    console.log("i am add product page")
    res.send("<h1>Add products</h1><form action=http://localhost:4001/admin/storeProduct method=POST><input type=text name=product><input type=submit value=Add></form>"
    )})
router.post("/storeProduct",(req,res,next)=>{
    console.log("i am status page")
    console.log("form data:",req.body);
    res.send("<h3>Your product added sucessfully.</h3>")
})

module.exports =router

