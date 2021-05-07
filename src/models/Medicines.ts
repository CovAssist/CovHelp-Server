import {model,Schema,Model} from "mongoose";
import {IMedicines} from "./@types"

const MedicinesSchema:Schema=new Schema({
    
    SupplierContact:String,
    city:String,
    State:String,
    Verified:Boolean,
    Price:Number,
    VerificationTime:String,
    VerifiedBy:String,
    Delivery:Boolean,
})

const Medicines:Model<IMedicines> = model("Medicines",MedicinesSchema)
export default Medicines