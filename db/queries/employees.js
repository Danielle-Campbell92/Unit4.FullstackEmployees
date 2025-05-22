/** @returns the employee created according to the provided details */
import client from "../client.js"

export async function createEmployee({ name, birthday, salary }) {
  const result = await client.query(
    'INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3) RETURNING *;', [name, birthday, salary]
  )
  return result.rows[0]
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const result = await client.query('SELECT * FROM employees;')
  return result.rows
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const result = await client.query('SELECT * FROM employees WHERE id = $1;', [id])
  return result.rows[0] || undefined;
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const result = await client.query('UPDATE employees (name, birthday, salary) VALUES ($1, $2, $3) WHERE id VALUES ($4) RETURNING *', [name, birthday, salary, id])
  return result.rows[0] || undefined;
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const result = await client.query('DELETE FROM employees (id) VALUES ($1) RETURNING *', [id])
  return result.rows[0] || undefined;
}
