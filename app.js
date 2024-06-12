const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const product = require("./models/employee.js")

const{employeeModel}=require("./models/employee.js")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jophine:jophinepaul@cluster0.oyyvgui.mongodb.net/EmpDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add", (req, res) => {
    let input=req.body
    let employee=new employeeModel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"test"})
})

app.get("/SearchEmp", (req, res) => {
    res.send("Testedd")
})

app.get("/DeleteEmp", (req, res) => {
    res.send("tested")
})

app.get("/ViewAll", (req, res) => {
    employeeModel.find().then(
        (data)=>{
            res.json(data)
        }
    )
})


app.listen(8080, () => {
    console.log("Server Started")
})