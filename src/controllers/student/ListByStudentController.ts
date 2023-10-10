import { Request, Response } from "express";
import { ListByStudentService } from "../../services/student/ListByStudentService";

class ListByStudentController {
  async handle(req: Request, res: Response) {
    const listByStudentService = new ListByStudentService();
    const studentList = await listByStudentService.execute();
    res.json(studentList);
  }
}

export { ListByStudentController };
