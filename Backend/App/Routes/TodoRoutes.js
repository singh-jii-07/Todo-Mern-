import express from 'express';
import {Todoinsert,Todoget, TodoDelet,TodoUpadate} from '../Controllers/TodoController.js'
const todoRoutes = express.Router();
todoRoutes.post('/add', Todoinsert);
todoRoutes.get('/get', Todoget);
todoRoutes.delete('/delete', TodoDelet);
todoRoutes.put('/update', TodoUpadate);
export default todoRoutes;