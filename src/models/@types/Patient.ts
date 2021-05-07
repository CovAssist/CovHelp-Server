import {Document} from "mongoose"

export default interface IPatient extends Document{
    email: String,
    dob:Date,
    contact:String,
    name:String,
    Hospitalcity:String,
    Hospital:String,
    Verified:Boolean,
    Report:String
}