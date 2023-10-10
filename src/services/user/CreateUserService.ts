import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'


interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreaterUserService {
    async execute({ name, email, password } : UserRequest) {

        //verificar o email

        if (!email) {
            throw new Error("Email incorreto")
        }



        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Usuario ja Existe")
        }

        const passwordHash = await hash(password, 8)


        // Cria o usuario dentro da tablea user do banco de dados.

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select: {  // vai devolver somente esses valores quando fizer a requisicao 
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreaterUserService }