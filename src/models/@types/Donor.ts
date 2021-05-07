import {Document} from "mongoose"
export default interface IDonor extends Document{
    email: String,
    dob:Date,
    contact:String,
    name:String,
    city:String,
    state:String,
    Recovered:Number,
    blood:string,
    date:Date,
}