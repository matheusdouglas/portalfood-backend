import crypto from 'crypto'
import multer from 'multer'


import {extname, resolve } from 'path'

export default { // receber onde eu quero salvar as imagens 
    upload(folder: string){
        return{
            storage: multer.diskStorage({
                 // destino para aonde eu quero salvar essa imagem
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request , file, callback) => {
                   const fileHash = crypto.randomBytes(16).toString("hex");

                   // vai trazer o hash gerado e o nome da foto 
                   const fileName = `${fileHash}-${file.originalname}`

                   return callback(null, fileName)
                }
            })
        }
    }
}