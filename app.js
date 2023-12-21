const express= require("express")
const app =express()


const adminRoutes=require("./routes/admin")
const shopRoutes=require("./routes/shop")

app.use("/admin",adminRoutes)
app.use("/shop",shopRoutes)
app.use("/",(req,res,next)=>{
    res.status(404).send("<h1>404 error found<h1>")
})



app.listen(4001)