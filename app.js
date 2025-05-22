import express from "express";
import employeeRouter from "#api/employees.js"
import { deleteEmployee } from "#db/queries/employees";
const app = express();

app.use(express.json())

app.use((req,res, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.route("/").get((req, res) => {
  console.log("Dani")
  res.send("Hello employees!");
  
});

app.use("/employees", employeeRouter)

app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).send("An Error Occurred" + error)
})


export default app