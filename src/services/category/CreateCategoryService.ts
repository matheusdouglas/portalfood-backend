import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {

    if (name === '') {
      throw new Error('Nome invalido')
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {  // e o que vai devolver quando alguem cadastrar uma categoria 
        id: true,
        name: true,
      }
    })

    return category;
  }
}


export { CreateCategoryService }