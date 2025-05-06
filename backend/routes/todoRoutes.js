const express = require('express');
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management endpoints
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todo items
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: Successfully retrieved all todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Server error
 */
router.get('/', getTodos);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo item
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoInput'
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Invalid input
 */
router.post('/', createTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo item
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: MongoDB ID of the todo to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoUpdate'
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 *       400:
 *         description: Invalid input
 */
router.put('/:id', updateTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo item
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: MongoDB ID of the todo to delete
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Todo deleted"
 *       404:
 *         description: Todo not found
 */
router.delete('/:id', deleteTodo);

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 65a1b2c3d4e5f6g7h8i9j0
 *         title:
 *           type: string
 *           example: "Complete assignment"
 *         completed:
 *           type: boolean
 *           default: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00.000Z"
 *     TodoInput:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           example: "New todo item"
 *     TodoUpdate:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Updated title"
 *         completed:
 *           type: boolean
 *           example: true
 */

module.exports = router;