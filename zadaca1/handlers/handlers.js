const { UniversityModel, FacultyModel } = require("../models/models");

const getAllUniversities = async (req, res) => {
  try {
    const universities = await UniversityModel.find().populate("faculties");
    res.status(200).json(universities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUniversity = async (req, res) => {
  try {
    const newUniversity = new UniversityModel(req.body);
    const savedUniversity = await newUniversity.save();
    res.status(201).json(savedUniversity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUniversity = async (req, res) => {
  const { universityId } = req.params;
  try {
    const updatedUniversity = await UniversityModel.updateOne({ _id: universityId }, req.body);
    res.status(200).json(updatedUniversity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removeUniversity = async (req, res) => {
  const { universityId } = req.params;
  try {
    await UniversityModel.deleteOne({ _id: universityId });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFaculties = async (req, res) => {
  try {
    const faculties = await FacultyModel.find().populate("university");
    res.status(200).json(faculties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFaculty = async (req, res) => {
  try {
    const newFaculty = new FacultyModel(req.body);
    const savedFaculty = await newFaculty.save();
    res.status(201).json(savedFaculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateFaculty = async (req, res) => {
  const { facultyId } = req.params;
  try {
    const updatedFaculty = await FacultyModel.updateOne({ _id: facultyId }, req.body);
    res.status(200).json(updatedFaculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removeFaculty = async (req, res) => {
  const { facultyId } = req.params;
  try {
    await FacultyModel.deleteOne({ _id: facultyId });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUniversities,
  createUniversity,
  updateUniversity,
  removeUniversity,
  getAllFaculties,
  createFaculty,
  updateFaculty,
  removeFaculty,
};