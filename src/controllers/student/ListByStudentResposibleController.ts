import { Request, Response } from "express";
import { ListByStudentResponsibleId } from "../../services/student/ListByStudentResposible";

class ListByStudentResposibleController {
  async handle(req: Request, res: Response) {
    const { id } = req.params; 
    const list = new ListByStudentResponsibleId();
    const studentList = await list.execute(id);
    res.json(studentList);
}
}

export { ListByStudentResposibleController };
