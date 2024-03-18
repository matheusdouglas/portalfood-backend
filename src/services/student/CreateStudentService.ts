import prismaClient from "../../prisma";

interface CreateStudentRequest {
  name: string;
  plate: string
  responsible_id: string;
}

class CreateStudentService {
  async execute({ name, plate, responsible_id }: CreateStudentRequest) {


    const studentAlreadyExists = await prismaClient.student.findFirst({
      where: {
          plate : plate
      }
  })

  if (studentAlreadyExists) {
      throw new Error("Matricula ja cadastrada")
  }


    const student = await prismaClient.student.create({
      data: {
        name,
        plate,
        responsible: {
          connect: { id: responsible_id },
        },
      },
      select: {
        id: true,
        name: true,
      }
    });
    return student;
  }
}

export { CreateStudentService };
