import prismaClient from "../../prisma";

class ListByStudentService {
  async execute() {
    const student = await prismaClient.student.findMany({
      select: {
        id: true,
        name: true,
        plate: true,
      },
    });

    return student;
  }
}

export { ListByStudentService };
