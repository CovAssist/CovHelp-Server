import {model,Schema,Model} from "mongoose";
import {IPatient} from "./@types"

const PatientSchema:Schema=new Schema({
    email: String,
    dob:Date,
    contact:String,
    name:String,
    Hospitalcity:String,
    Hospital:String,
    Verified:Boolean,
    Report:String
})

const Patient:Model<IPatient> = model("Patient",PatientSchema)
export default Patient