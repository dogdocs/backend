import mongoose, { Document, Model } from "mongoose"
import { v4 as uuidv4 } from 'uuid'


const Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: { type: String, default: () => {
    return uuidv4()
  } },
  email: { type: String },
  password: { type: String}
})

interface IUsers extends Document {
  email: string
  password: string
}

const UserModel = (mongoose.models.UserModel as Model<IUsers>) || mongoose.model<IUsers>('UserModel', UserSchema)

export default UserModel