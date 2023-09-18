import prismaClient from "../../prisma";
// eu vou esperar um id e quero que ele me mande esse id 

// atualizando um item em especifico 

interface OrderRequest {
    order_id: string;
}


// quando a gente chama o servico  a gente vai la e atualiza o draf para false e retorna para  o controller 

class SendOrderService {
    async execute({ order_id }: OrderRequest) {
    const order = await prismaClient.order.update({
        where: {
            id: order_id
        },
        data: {
            draft: false
        }
    })
         
    return order;

    }
}


export { SendOrderService }