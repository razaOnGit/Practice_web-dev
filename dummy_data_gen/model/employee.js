const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema( {
  name: String,
    age: Number,
    city: String,
    position: String,
    department: String,
    address: String,
    phone: String,
    position: String,
    salary: Number,
    isManager: Boolean
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
