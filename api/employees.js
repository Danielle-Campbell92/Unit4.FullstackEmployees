import express from "express";
const router = express.Router();
import employees from '#db/employeees.js'
import { createEmployee, deleteEmployee, getEmployee, updateEmployee } from "#db/queries/employees";

// TODO: this file!

router.route("/").get(async (req, res) => {
    const employees = await getEmployee();
    res.send(employees);
})

router.route("/").post(async (req, res) => {
    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
    }
    const {name, birthday, salary} = req.body
    if(!name || !birthday || !salry){
        return res.status (400).send({error: "Missing require params"})
    }
    const employee = await createEmployee({name, birthday, salary})
    res.status(201).send(employee)
})

router.route("/:id").get(async (req, res) => {
    const id = req.params.id
    if(Number.isInteger(id) && id != 0){
        return res.status(400).send({error: "Please send a valid number"})
    }
    const employee= await getEmployee(id)
    if(!employee){
        return res.status(404).send({error: "ID not found"})
    }
    res.send(employee)
})

router.route("/:id").delete(async (req, res) => {
    const id = req.params.id
    if(Number.isInteger(id) && id != 0){
        return res.status(400).sendDate({error: "Please send a valid number"})
    }
    const deletes = await deleteEmployee(id)
    if(!deletes){
        res.status(404).send ({error: "Emplyee not found"})
    }
    res.sendStatus(204)
})

router.route("/:id").put(async (req, res) => {
    const id = req.params.id
    if(!req.body){
        return res.status(400).send({error: "Please send details"})
    }
    const {name, birthday, salary} = req.body

    if(!name || !birthday || !salary){
        return res.status(400).send({error: "Missing required fields"})
    }
    if(!Number.isInteger(id) && id < 0){
        return res.status(400).send({error: "Fix your id"})
    }
    const employee = await getEmployee(id)
    if(!employee){
        return res.status(404).send({error: "Employee not found"})
    }

    const updated = await updateEmployee({id, name, birthday, salary})
    res.send(updated)
})

export default router
