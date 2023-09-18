import { Request, Response } from 'express'
import { SendOrderService } from '../../services/order/SendOrderService'

class SendOrderController {
    async handle(req: Request, res: Response) {
         const { order_id } = req.body;  // Receber o id da order atraves do body 

         const sendOrder = new SendOrderService() // instacia o servico 

         const order = sendOrder.execute({ order_id }) // chama o servico para ser executado  e passa o id para ela 
         // recebe nessa variavel o servico f


         return res.json(order); // e retorna para podemos manipular. 
    }
}

export { SendOrderController }