import {Document} from "mongoose"

export default interface IMedicines extends Document{
    Name:String,
    SupplierContact:String,
    city:String,
    State:String,
    Verified:Boolean,
    Price:Number,
    VerificationTime:String,
    VerifiedBy:String,
    Delivery:Boolean,
}