import { Request, Response } from "express";
import { CreateOrderService  } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handle(req: Request, res: Response){
       const { table, name, student_id } = req.body;
      const createOrderController = new CreateOrderService();

      const order = await createOrderController.execute({table, name, student_id});

      return res.json(order);
    }
}

export { CreateOrderController }