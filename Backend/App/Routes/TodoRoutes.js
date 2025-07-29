import express from 'express';
import Todoinsert from '../Controllers/TodoController.js'
const todoRoutes = express.Router();
todoRoutes.post('/add', Todoinsert);
export default todoRoutes;