import {Request} from "express";
import {AppResponse} from '../../@types';
export default async(req:Request,res:AppResponse)=>{return res.status(200).json({data:{}})}