import { Router } from "express";
import { CustomerController } from "../controller/customer-controller";

const route = Router()
const controller = new CustomerController()

route.post("/", controller.create)

export default route