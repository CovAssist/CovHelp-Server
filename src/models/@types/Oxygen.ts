import {Document} from "mongoose"

export default interface IOxygen extends Document{
    
    SupplierContact:String,
    city:String,
    State:String,
    Verified:Boolean,
    Price:Number,
    VerificationTime:String,
    VerifiedBy:String,
    Delivery:Boolean,

}