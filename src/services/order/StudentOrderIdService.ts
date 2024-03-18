import prismaClient from "../../prisma";

interface DetailRequest {
    student_id: string;
}

class DetailStudentService {
  async execute({ student_id }: DetailRequest) {
    const orders = await prismaClient.order.findMany({
      where: {
        student_id: student_id,
      },
      include: {
        
        items: {
            include: {
                product: true,
            }
        },
      },
    });
    return orders;
  }
}

export { DetailStudentService };
