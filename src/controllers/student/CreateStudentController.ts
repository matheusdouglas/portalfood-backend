import { Request, Response } from 'express';
import { CreateStudentService } from '../../services/student/CreateStudentService';
import prismaClient from '../../prisma';

class StudentController {
  async handle(request: Request, response: Response) {
    const { name, plate, responsible_id } = request.body;

   
    const studentAlreadyExists = await prismaClient.student.findFirst({
      where: {
        plate: plate,
      },
    });

    if (studentAlreadyExists) {
        throw new Error("Matricula ja cadastrada")
    }

    
    const createStudentService = new CreateStudentService();
    const student = await createStudentService.execute({ name, plate, responsible_id });

    return response.json(student);
  }
}

export { StudentController };
