import express from "express"
import { getUsersForSidebar } from "../Controller/userController.js"

const router = express.Router()

router.get("/", getUsersForSidebar)

export default router