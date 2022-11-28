import mongoose from 'mongoose';

const { Schema } = mongoose;
const userScheme = new Schema({
  name: {
    type: String,
    required: true,
  }, login: {
    type: String,
    required: true,
  }, password: {
    type: String,
    required: true,
  }, avatar: {
    type: String,
    required: false,
  }
}, { versionKey: false });

export default mongoose.model('User', userScheme);