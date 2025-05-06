const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort('-createdAt');
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a todo
exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo({ title: req.body.title });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a todo (toggle complete)
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};