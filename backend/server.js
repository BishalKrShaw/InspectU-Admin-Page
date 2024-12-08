import express from "express"
import cors from "cors"
import employeeRouter from "./routes/employeeRouter.js"
import {connectMongoDB} from "./db.js"

const app = express();
app.use(cors());

// Database Connection
connectMongoDB().then(() => console.log("MongoDB connected"));

// Middlewares
app.use(express.urlencoded({ extended: false })) // Get data from request body

const PORT = 3000;

app.use("/admin", employeeRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
})