
import {createEmployee} from "./queries/employees.js";
import client from "./client.js";

await seedEmployees();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await client.connect()

  await createEmployee('Michael Jackson', '1958-11-19', 150000)
  await createEmployee('Doja Cat', '1992-9-29', 170000)
  await createEmployee('Johnny Depp', '1960-10-31', 190000)
  await createEmployee('Jennifer Lopez', '1974-08-17', 100000)
  await createEmployee('Britney Spears', '1970-04-13', 2000)
  await createEmployee('Andrew Garfield', '1990-02-22', 30000)
  await createEmployee('Anne Hathaway', '1984-03-15', 200000)
  await createEmployee('Ryan Reynolds', '1981-06-09', 500000)
  await createEmployee('Jack Nicholson', '1943-07-10', 250000)
  await createEmployee('Audrey Hepburn', '1932-01-20', 170000)
  
  await client.end()
}
seedEmployees()