import { Request, Response } from "express"

export class CustomerController {

    create(req:Request,res:Response){
        return res.status(200).send("Ok")
    }
}