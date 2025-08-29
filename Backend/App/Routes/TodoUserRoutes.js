import express from 'express'
import {totoresgister,todologin} from '../Controllers/TodoUserController.js'
const todouserRoute =  express.Router()
todouserRoute.post('/register', totoresgister)
todouserRoute.post('/login',todologin)
export default todouserRoute