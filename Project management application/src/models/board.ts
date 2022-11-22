import mongoose from 'mongoose';

const { Schema } = mongoose;
const boardScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  users: {
    type: [String],
    required: true,
  }
}, { versionKey: false });

export default mongoose.model('Board', boardScheme);