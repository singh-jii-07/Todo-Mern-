import express from 'express'
import {totoresgister,todologin} from '../Controllers/TodoUserController.js'
import auth  from '../Middleware/Auth.js'
const todouserRoute =  express.Router()
todouserRoute.post('/register', totoresgister)
todouserRoute.post('/login',auth, todologin)
export default todouserRoute