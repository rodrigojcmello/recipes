import { Schema, Document, model } from 'mongoose';

interface User extends Document {
  username: string;
  password: string;
  joinDate: string;
  favorites: string;
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [Schema.Types.ObjectId],
    ref: 'Recipe'
  }
});

export default model<User>('User', UserSchema);
