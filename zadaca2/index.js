const express = require("express");
const Course = require("./models/academyCourseSchema");
const authenticateToken = require("./account/auth");

const app = express.app();

app.get("/", async (req, res) => {
  const courses = await Course.find().populate("academy");
  res.json(courses);
});

app.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id).populate("academy");
  if (!course) return res.status(404).send("Course not found");
  res.json(course);
});

app.post("/", authenticateToken, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
});

app.put("/:id", authenticateToken, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!course) return res.status(404).send("Course not found");
  res.json(course);
});

app.delete("/:id", authenticateToken, async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).send("Course not found");
  res.sendStatus(204);
});

module.exports = app;