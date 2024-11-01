const express = require("express");

const {
  getAllUniversities,
  createUniversity,
  updateUniversity,
  removeUniversity,
  getAllFaculties,
  createFaculty,
  updateFaculty,
  removeFaculty,
} = require("../handlers/universityFacultyHandlers");

const app = express();
app.set("view engine", "ejs");

app.get("/universities", getAllUniversities);
app.post("/universities", createUniversity);
app.put("/universities/:universityId", updateUniversity);
app.delete("/universities/:universityId", removeUniversity);

app.get("/faculties", getAllFaculties);
app.post("/faculties", createFaculty);
app.put("/faculties/:facultyId", updateFaculty);
app.delete("/faculties/:facultyId", removeFaculty);

app.listen(3000, () => console.log("Server started at port 3000"));