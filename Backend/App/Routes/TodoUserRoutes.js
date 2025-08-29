import express from 'express'
import {totoresgister,todologin,todouser} from '../Controllers/TodoUserController.js'
import auth from '../Middleware/Auth.js'
const todouserRoute =  express.Router()
todouserRoute.post('/register', totoresgister)
todouserRoute.post('/login',todologin)
todouserRoute.get('/getuser',auth,todouser)
export default todouserRoute