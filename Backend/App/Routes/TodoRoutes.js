import express from 'express';
import {Todoinsert,Todoget, TodoDelet,TodoUpadate,TodogetByUser} from '../Controllers/TodoController.js'
import auth from '../Middleware/Auth.js';
const todoRoutes = express.Router();
todoRoutes.post('/add',auth, Todoinsert);
todoRoutes.get('/get', Todoget);
todoRoutes.delete('/delete', TodoDelet);
todoRoutes.put('/update', TodoUpadate);
todoRoutes.get('/getbyuser',auth,TodogetByUser)
export default todoRoutes;