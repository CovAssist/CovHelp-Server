import {model,Schema,Model} from "mongoose";
import {IPatient} from "./@types"

const PatientSchema:Schema=new Schema({
    email: String,
    dob:Date,
    contact:String,
    name:String,
    hospitalcity:String,
    hospital:String,
    verified:Boolean,
    report:String
})

const Patient:Model<IPatient> = model("Patient",PatientSchema)
export default Patient