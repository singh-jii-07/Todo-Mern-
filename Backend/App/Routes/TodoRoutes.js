import express from 'express';
import {Todoinsert,Todoget} from '../Controllers/TodoController.js'
const todoRoutes = express.Router();
todoRoutes.post('/add', Todoinsert);
todoRoutes.get('/get', Todoget);
export default todoRoutes;