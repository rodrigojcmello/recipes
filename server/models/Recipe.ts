import { Document, Model, model, Schema } from 'mongoose';

export interface RecipeType extends Document {
  name: string;
  category: string;
  description: string;
  instructions: string;
  createdDate: string;
  likes: number;
  username: string;
}

const RecipeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  username: {
    type: String
  }
});

const UserModel: Model<RecipeType> = model<RecipeType>('Recipe', RecipeSchema);

export default UserModel;
