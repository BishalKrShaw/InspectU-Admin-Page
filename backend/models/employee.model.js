import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  employeeID: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  alertStatus: {
    type: String,
    enum: ["Good", "Bad"],
    required: true,
  }
}, {timestamps: true})

export const Employee = mongoose.model("Employee", employeeSchema);