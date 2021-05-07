
import {model,Schema,Model} from "mongoose";
import {IVacantBeds} from "./@types"

const VacantBedsSchema:Schema=new Schema({
    NumOfVacantBeds:Number,
    HospitalContact:String,
    HospitalName:String,
    Hospitalcity:String,
    State:String,
    Verified:Boolean,
    HospitalFees:Number,
    VerificationTime:String,
    VerifiedBy:String,
})

const VacantBeds:Model<IVacantBeds> = model("VacantBeds",VacantBedsSchema)
export default VacantBeds