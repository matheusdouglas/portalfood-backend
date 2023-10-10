import { Request, Response } from 'express'
import { ListOrderOpenSerivce } from '../../services/order/ListOrdersOpenService'

class ListOrderOpenController{
    async handle(req: Request, res: Response) {         

        const listOrderSerivce = await new ListOrderOpenSerivce()

        const order = await listOrderSerivce.execute()

        return res.json(order)

    }

}


export { ListOrderOpenController }