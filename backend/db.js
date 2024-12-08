import mongoose from "mongoose"

async function connectMongoDB() {
  return mongoose.connect("mongodb://localhost:27017/employees");
}

export {connectMongoDB}