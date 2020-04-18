
const todos = require('../data/todos')

const index = (req, res) => {
  res.render('index', {
    todos: todos.todos
  });
}
const create = (req, res) => {
  const newTodo = {todo: req.body.todo, done: false};
  todos.create(newTodo);
  res.redirect('/');
}


module.exports = {
    index,
    create,
    
}