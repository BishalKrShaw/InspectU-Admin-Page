import express from "express"
import controllers from "../controllers/employeeControllers.js"

const router = express.Router();

router.get("/", controllers.adminGet);

router.post("/", controllers.adminPost)

export default router;