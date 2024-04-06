import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";
dotenv.config();
const { SECRET_CODE } = process.env;

export const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(403).json({
        message: "Bạn chưa đăng nhập!",
      });
    }

    const decoded = jwt.verify(token, SECRET_CODE);
    const user = await Users.findById(decoded.id);
    if (!user) {
      return res.status(403).json({
        message: "Token lỗi hoặc hết hạn!",
      });
    }

    if (user.role !== "admin") {
      return res.status(400).json({
        message: "Bạn không có quyền làm thao tác này!",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
