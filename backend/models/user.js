import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  profile_picture: {
    type: String,
    default: "",
  },
  email_id: {
    type: String,
  },
  password: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
    default: "",
  },
  libary: [
    {
      book: Schema.Types.ObjectId,
      ref: "Book",
      default: "",
    },
  ],
});
const User = mongoose.model("User", userSchema);
export default User;
