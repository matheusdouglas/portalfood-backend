import prismaClient from "../../prisma";

class ListByStudentResponsibleId {
  async execute(responsible_id) {
    const students = await prismaClient.student.findMany({
      where: {
        responsible_id: responsible_id,
      },
    });
     
    return students;
  }
}

export { ListByStudentResponsibleId };

