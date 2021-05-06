import {Response} from "express"
interface ResponseFormat{
    success?:boolean;
    error?:boolean;
    message?:string;
    data:unknown;
}
type TypedResponse<T>=Omit<Response,'json'|'status'>&{
    json(data:T):TypedResponse<T>;
} & {status(code:number):TypedResponse<T>};
export type AppResponse=TypedResponse<ResponseFormat>;