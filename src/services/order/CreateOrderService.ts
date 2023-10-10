import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
    student_id: string;
}

class CreateOrderService {
    async execute({ table, name, student_id }: OrderRequest){
        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name,
                student: { connect: { id: student_id } },
                
            },
        });

        return order; 
    }
}

export { CreateOrderService }
