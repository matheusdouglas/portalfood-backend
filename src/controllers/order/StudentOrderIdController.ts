import { Request, Response } from "express";
import { DetailStudentService } from "../../services/order/StudentOrderIdService"; // Importe o serviço correto

class DetailStudentController {
  async handle(req: Request, res: Response) {
    const student_id = req.query.student_id as string;

    const detailStudentService = new DetailStudentService(); // Crie uma instância do serviço
    const orders = await detailStudentService.execute({ student_id });

    return res.json(orders);
  }
}

export { DetailStudentController };
