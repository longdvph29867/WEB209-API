import { connect } from "mongoose";
// const URI_DB =
//   "mongodb+srv://longdvph29867:longlong@cluster0.8rgprch.mongodb.net/nodejs";
// const URI_DB = "mongodb://localhost:27017/nodejs";
export async function connectDB(URI_DB) {
  try {
    await connect(URI_DB);
    console.log("Connect successfully!");
  } catch (err) {
    console.log("Connection failed!!!!");
  }
}
