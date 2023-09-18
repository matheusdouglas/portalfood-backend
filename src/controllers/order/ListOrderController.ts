import { Request, Response } from 'express'
import { ListOrderSerivce } from '../../services/order/ListOrderSerivce'

class ListOrderController{
    async handle(req: Request, res: Response) {         

        const listOrderSerivce = await new ListOrderSerivce()

        const order = await listOrderSerivce.execute()

        return res.json(order)

    }

}


export { ListOrderController }