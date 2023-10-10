import prismaClient from "../../prisma";



class ListOrderOpenSerivce {
    async execute() {
        

        const orders = await prismaClient.order.findMany({
            where: {
                draft: true,
            },
            orderBy: {
                create_at: 'desc'
            }
        })

        return orders;
    }

}

export { ListOrderOpenSerivce }