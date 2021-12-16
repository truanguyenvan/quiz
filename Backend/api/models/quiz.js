const mongoose = require('mongoose');
// const Admin = require("./admin");
// const Questions = require("./question");
// const User = require("./user");

const QuizSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quizName: { type: String, required: true },
  quizCode: { type: String },
  adminId: { type: String, required: true },
  quizType: { type: String },
  usersParticipated: [
    {
      userId: { type: String },
      marks: { type: Number },
      responses: [],
      timeEnded: { type: Number },
      timeStarted: { type: Number },
    },
  ],
  usersEnrolled: [
    {
      userId: { type: String },
    },
  ],
  scheduledFor: { type: String },
  scheduledForString: { type: String },
  quizDuration: {
    type: String,
  },
  quizStatus: {
    type: Number,
    default: 0,
  },
  quizRestart: {
    type: Number,
    default: 0,
  },
  reminderSent: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Quiz', QuizSchema);
