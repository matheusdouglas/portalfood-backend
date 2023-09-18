import { Request, Response } from "express";
import { ListBycategoryService } from '../../services/Product/ListByCategoryService'

class ListBycategoryController {
    async handle( req: Request, res: Response ){
       const  category_id  = req.query.category_id as string;

       const listByCateogyr = new ListBycategoryService()

       const product = await listByCateogyr.execute({
        category_id
    })
      
    return res.json(product);

    }
}

export { ListBycategoryController}