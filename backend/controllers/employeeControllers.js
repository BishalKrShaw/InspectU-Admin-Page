import { Employee } from "../models/employee.model.js";

const adminGet = async (req, res) => {
  const allEmployees = await Employee.find({});
  return res.json(allEmployees);
}

const adminPost = async (req, res) => {
  const {fullname, employeeID, role, alertStatus} = req.body;

  if(!fullname || !employeeID || !role || !alertStatus) {
    return res.status(400).json({error: "Missing required fields"});
  }

  try {
  const newEmployee = new Employee({
    fullname,
    employeeID,
    role,
    alertStatus
  })

  await newEmployee.save();

  return res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
} catch(error) {
  return res.status(500).json({ error: error })
}
}

export default {adminGet, adminPost}