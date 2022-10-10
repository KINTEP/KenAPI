import express from "express"
import {registerUser, loginUser} from "../controlers/auth.js"

const router = express.Router() 

router.post("/register_user", registerUser)

router.post("/login_user", loginUser)

export default router