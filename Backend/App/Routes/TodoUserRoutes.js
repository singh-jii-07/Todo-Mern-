import express from 'express'
import {totoresgister} from '../Controllers/TodoUserController.js'
const todouserRoute =  express.Router()
todouserRoute.post('/register', totoresgister)
export default todouserRoute