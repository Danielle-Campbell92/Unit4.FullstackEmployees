import express from "express";
const router = express.Router();
import employees from '#db/employeees.js'


// TODO: this file!

router.route("/")
.get((req, res) => {
    res.send(employees)
})
.post((req, res) => {
    if(!req.body){
        return res.status(400).send("Request is not found. Please send over an employee")
    }

const { employee } = req.body

if(!employee){
    return res.status(400).send("Please send a valid employee")
}

employees.push(employee)
res.status(201).send(`Added the employee ${employee}`)
})

  
router.route("/:id").get((req, res) => {
    const { id } = req.params;
 
    const employee = employees.find((e) => e.id === +id);
  
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
  
    res.send(employee);
  });

export default router
