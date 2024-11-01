const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    university: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },
  }
);

const universitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    faculties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }],
  },
);

const UniversityModel = mongoose.model("University", universitySchema, "universities");
const FacultyModel = mongoose.model("Faculty", facultySchema, "faculties");

module.exports = {
  UniversityModel,
  FacultyModel,
};