import prismaClient from "../../prisma";
import { compare }  from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface AuthRequest {
    email :string;
    password: string;
}

class AuthUserService {
    async execute({email, password} : AuthRequest) {
      
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user){
            throw new Error ("Usuario ou senha Incorreto")
        }
     
        // preciso verificar  se a senha que ele mandou esta correta
           
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error ("Usuario ou senha Incorreto")
        }

        // se deu tudo certo vamos gerar um token para o usuario 

        const token = sign({
            name: user.name,
            email: user.email,
            is_admin: user.is_admin, // Inclua o campo is_admin no payload
        },
          process.env.JWT_SECRET,
          {
            subject: user.id,
            expiresIn: '30d'
          }
        )
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            is_admin: user.is_admin,
            token: token
        }
    }
}


export { AuthUserService }