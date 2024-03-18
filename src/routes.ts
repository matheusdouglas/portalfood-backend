import { Router, Request, Response } from "express"
import multer from 'multer'

import { CreateUserController } from "./controllers/user/CreateUserController"; 
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from './controllers/user/DetailUserController'

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/Product/CreateProductController";


import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoverOrderController } from "./controllers/order/OrderController";
import { AddItemController } from "./controllers/order/AddItemController"
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListOrderOpenController } from "./controllers/order/ListOrderOpenController";

import { StudentController } from "./controllers/student/CreateStudentController";
import { ListByStudentController } from "./controllers/student/ListByStudentController";

import { isAthenticated } from "./middlewares/isAuthenticated"

import uploadConfig from './config/multer'
import { ListByUserController } from "./controllers/user/ListByUserController";
import { DetailStudentController } from "./controllers/order/StudentOrderIdController";
import { ListByStudentResposibleController } from "./controllers/student/ListByStudentResposibleController";
import { ListBycategoryProductController } from "./controllers/Product/ListByCategoryController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//Rotas Student

router.post('/student', new StudentController().handle)
router.get('/student', new ListByStudentController().handle)
router.get('/student/resposible/:id', new ListByStudentResposibleController().handle)

// Rotas User
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAthenticated, new DetailUserController().handle)
router.get('/users', new ListByUserController().handle)

// Rotas Category 

router.post('/category', isAthenticated, new CreateCategoryController().handle)
router.get('/category', isAthenticated, new ListCategoryController().handle)

// Rotas Product 

router.post('/product',isAthenticated, upload.single('file'),  new CreateProductController().handle)
router.get('/category/product', isAthenticated, new ListBycategoryProductController().handle)

// Rotas Order 

router.post('/order', isAthenticated, new CreateOrderController().handle)
router.delete('/order', isAthenticated, new RemoverOrderController().handle)
router.post('/order/add', isAthenticated, new AddItemController().handle)
router.delete('/order/remove', isAthenticated, new RemoveItemController().handle)
router.put('/order/send', isAthenticated, new SendOrderController().handle)
router.get('/orders', isAthenticated, new ListOrderController().handle)
router.get('/order/detail', isAthenticated, new DetailOrderController().handle)
router.get('/order/open', isAthenticated, new ListOrderOpenController().handle)
router.get('/order/detail/student', isAthenticated, new DetailStudentController().handle)

// enviar pedido 
router.put('/order/finish', isAthenticated, new FinishOrderController().handle)


export { router };