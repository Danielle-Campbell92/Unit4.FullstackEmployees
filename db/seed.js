
import {createEmployee} from "./queries/employees.js";
import client from "./client.js";


console.log("🌱 Database seeded.");

async function seedEmployees() {
  await client.connect()

  const employees = [
    { name: 'Michael Jackson', birthday: '1958-11-19', salary: 150000 },
    { name: 'Doja Cat', birthday: '1992-09-29', salary: 170000 },
    { name: 'Johnny Depp', birthday: '1960-10-31', salary: 190000 },
    { name: 'Jennifer Lopez', birthday: '1974-08-17', salary: 100000 },
    { name: 'Britney Spears', birthday: '1970-04-13', salary: 2000 },
    { name: 'Andrew Garfield', birthday: '1990-02-22', salary: 30000 },
    { name: 'Anne Hathaway', birthday: '1984-03-15', salary: 200000 },
    { name: 'Ryan Reynolds', birthday: '1981-06-09', salary: 500000 },
    { name: 'Jack Nicholson', birthday: '1943-07-10', salary: 250000 },
    { name: 'Audrey Hepburn', birthday: '1932-01-20', salary: 170000 },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
  await client.end()
}
seedEmployees()