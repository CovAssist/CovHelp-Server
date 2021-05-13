import {model,Schema,Model} from "mongoose";
import {IMedicines} from "./@types"

const MedicinesSchema:Schema=new Schema({
    name: String,
    supplierContact:String,
    city:String,
    state:String,
    verified:Boolean,
    price:Number,
    verificationTime:String,
    verifiedBy:String,
    delivery:Boolean,
})

const Medicines:Model<IMedicines> = model("Medicines",MedicinesSchema)
export default Medicines