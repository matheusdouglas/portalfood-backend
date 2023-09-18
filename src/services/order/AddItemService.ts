import prismaClient from "../../prisma";  // acesso ao banco de dados 



// quem usar essa funcao precisa fornecer esses dados 

interface  ItemRequest {

    order_id: string;
    product_id: string;
    amount: number;
}

          //necessita receber esses 3 parametros para conseguir executar o servico 

class AddItemService {
    async execute({ order_id, product_id, amount } : ItemRequest){

          const order = await prismaClient.item.create({   // inserir dados na tabela item do banco de dados postgres
            data: { // recebe os dados 
                order_id: order_id,         // recebe os dados da funcao execute que recebe os dados da interface
                product_id: product_id,
                amount
            }
          })
          
          return order;  // depois do metodo ser executado retorna ele para podermos usar no controoler 
    }



}


    export { AddItemService }