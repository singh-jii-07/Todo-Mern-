import express from 'express';
import {Todoinsert,Todoget, TodoDelet} from '../Controllers/TodoController.js'
const todoRoutes = express.Router();
todoRoutes.post('/add', Todoinsert);
todoRoutes.get('/get', Todoget);
todoRoutes.delete('/delete', TodoDelet);
export default todoRoutes;