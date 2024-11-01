const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  });

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  academy: { type: mongoose.Schema.Types.ObjectId, ref: 'Academy', required: true },
});

const Academy = mongoose.model('Academy', academySchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { 
    Academy, 
    Course 
};