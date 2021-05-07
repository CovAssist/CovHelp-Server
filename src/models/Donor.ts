import {model,Schema,Model} from "mongoose";
import {IDonor} from "./@types"

const DonorSchema:Schema=new Schema({
    email: String,
    dob:Date,
    contact:String,
    name:String,
    city:String,
    state:String,
    Recovered:Number,
    blood:String,
    date:Date,
})

const Donor:Model<IDonor> = model("Donor",DonorSchema)
export default Donor