const Task = require("../models/TaskModel");

const getAllTask = (req, res) => {
  res.send("getting all items");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update single items");
};

const deleteTask = (req, res) => {
  res.send("delete all items");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
