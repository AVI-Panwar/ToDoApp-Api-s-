const express = require("express");
const router = express.Router();

// import controller 
 const {createTodo} = require("../controllers/createToDo");
 const {getTodo,getToDoById} = require("../controllers/getToDo");
 const {updateTodo} = require("../controllers/updateTodo");
 const {deleteTodo} = require("../controllers/deleteTodo")

 //define Api routes
 router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getToDoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

 module.exports = router;
 