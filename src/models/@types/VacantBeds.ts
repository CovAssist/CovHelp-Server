import {Document} from "mongoose"

export default interface IVacantBeds extends Document{
    VacantBeds:Number,
    HospitalContact:String,
    HospitalName:String,
    Hospitalcity:String,
    State:String,
    Verified:Boolean,
    HospitalFees:Number,
    VerificationTime:String,
    VerifiedBy:String,
}