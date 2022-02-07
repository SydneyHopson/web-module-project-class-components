const { nanoid } = require("nanoid")
const yup = require('yup')

const schemaCreate = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('name of task is required')
    .max(100, 'name of task must be under 100 chars'),
  completed: yup
    .boolean()
    .typeError('completed must be a boolean')
})

const schemaUpdate = yup.object().shape({
  completed: yup
    .boolean()
    .typeError('completed must be a boolean')
    .required('completed is required')
})

let todos

const resetTodos = () => {
  todos = [
    { id: nanoid(5), name: 'laundry', completed: false },
    { id: nanoid(5), name: 'dishes', completed: false },
    { id: nanoid(5), name: 'groceries', completed: false },
  ]
}

resetTodos()

const getAll = () => {
  const message = 'Here are your Todos'
  const status = 200
  const data = todos
  return [status, { message, data }]
}

const getById = id => {
  let message, data, status
  try {
    const todo = todos.find(todo => todo.id === id)
    if (todo) {
      status = 200
      data = todo
      message = `Here is your Todo ${id}`
    } else {
      status = 404
      message = `Ouch: Todo ${id} not found`
    }
  } catch (err) {
    message = `Ouch: ${err.message}`
    status = 422
  }
  return [status, { message, data }]
}

const create = async todoFromClient => {
  let message, data, status
  try {
    const validated = await schemaCreate.validate(todoFromClient, { stripUnknown: true })
    const todo = { id: nanoid(5), completed: false, ...validated }
    todos.push(todo)
    data = todo
    message = `Todo ${todo.id} has been created`
    status = 201
  } catch (err) {
    message = `Ouch: ${err.message}`
    status = 422
  }
  return [status, { message, data }]
}

const toggleDone = async id => {
  try {
    const validated = await schemaCreate.validate(todoFromClient, { stripUnknown: true })
  } catch (err) {
    message = `Ouch: ${err.message}`
    status = 422
  }



  todos = todos.map(todo => {
    return todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  })
  return todos
}

const remove = id => {
  todos = todos.filter(todo => {
    return todo.id !== id
  })
  return todos
}

module.exports = {
  getAll,
  getById,
  create,
  toggleDone,
  remove,
  resetTodos, // only tests use this
}
