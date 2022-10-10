import express from "express"
import {verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js"
import {getAllUsers, getUserById, updateUser, deleteUser} from "../controlers/users.js"

const router = express.Router()


router.get("/get_all_users", verifyAdmin, getAllUsers)

router.get("/get_user_by_id/:id", getUserById)

router.put("/update_user/:id", verifyUser, updateUser)

router.delete("/delete_user/:id", verifyUser, deleteUser)

export default router