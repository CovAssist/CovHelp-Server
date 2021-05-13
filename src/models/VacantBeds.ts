
import {model,Schema,Model} from "mongoose";
import {IVacantBeds} from "./@types"

const VacantBedsSchema:Schema=new Schema({
    NumOfVacantBeds:Number,
    HosContact:String,
    HosName:String,
    Hoscity:String,
    State:String,
    Verified:Boolean,
    HosFees:Number,
    VerificationTime:String,
    VerifiedBy:String,
})

const VacantBeds:Model<IVacantBeds> = model("VacantBeds",VacantBedsSchema)
export default VacantBeds