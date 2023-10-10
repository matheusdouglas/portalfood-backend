import { Request, Response } from "express";
import { CreateStudentService } from "../../services/student/CreateStudentService";

class StudentController {
    async handle(req: Request, res: Response) {
        const { name, responsible_id } = req.body;
        
        const createStudent = new CreateStudentService();

        const student = createStudent.execute({ name, responsible_id });

        return res.json(student);
    }

}

export { StudentController };
