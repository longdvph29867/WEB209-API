import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    account: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      unique: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "member",
    },
  },
  {
    timestamps: false,
    versionKey: false,
    collection: "Users",
  }
);

const Users = mongoose.model("Users", usersSchema);
export default Users;
