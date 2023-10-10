import prismaClient from "../../prisma";

interface CreateStudentRequest {
  name: string;
  responsible_id: string;
}

class CreateStudentService {
  async execute({ name, responsible_id }: CreateStudentRequest) {
    const student = await prismaClient.student.create({
      data: {
        name,
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
