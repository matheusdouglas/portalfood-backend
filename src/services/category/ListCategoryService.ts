import prismaClient from "../../prisma";

class ListCategoryService {
      
    async execute() {


         // aki ele vai devolver um arrai com as categorias e os ID.
        const category = await prismaClient.category.findMany({
          
          // e o que vou devolver

            select: {
                id: true,
                name: true,
            }
        })
         
        return category
    }


}


export { ListCategoryService }