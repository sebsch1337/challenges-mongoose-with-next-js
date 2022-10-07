import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: { type: Array, required: true },
});

// If model "Question" already exists, use existing one. Otherwise create a new model "Question" of collection "questions".
const Question =
  mongoose.models.Question ||
  mongoose.model("Question", questionSchema, "questions");

export default Question;
