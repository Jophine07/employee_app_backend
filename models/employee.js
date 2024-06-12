const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "employeeId":{type:String,required:true},
            "employeeName":{type:String,required:true},
            "Address":{type:String,required:true},
            "DateOfBirth":{type:String,required:true},
            "password":String,
            "confirm":String
    }
)

let employeeModel=mongoose.model("employes",schema)
module.exports={employeeModel}