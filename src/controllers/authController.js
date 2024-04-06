import Users from "../models/Users.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { signInValid, userValidSignUp } from "../validations/users.js";
import dotenv from "dotenv";
dotenv.config();
const { SECRET_CODE } = process.env;
class AuthCotroller {
  async signUp(req, res) {
    try {
      // validation
      const { error } = userValidSignUp.validate(req.body);
      if (error) {
        res.status(400).json({
          message: error.details.map((item) => item.message),
        });
        return;
      }

      const data = { ...req.body };

      const userExists = await Users.findOne({ account: data.account });
      if (userExists) {
        res.status(404).json({
          message: "Tài khoản đã tồn tại!",
        });
        return;
      }

      const userExistsEmail = await Users.findOne({
        email: data.email,
      });
      if (userExistsEmail) {
        res.status(404).json({
          message: "Email đã được đăng ký!",
        });
        return;
      }

      const hashedPassword = await bcryptjs.hash(data.password, 10);

      const user = await Users.create({ ...data, password: hashedPassword });
      if (!user) {
        res.status(404).json({
          message: "Tạo tài khoản thất bại!",
        });
        return;
      }

      res.status(200).json({
        message: "Tạo tài khoản thành công!",
        data: {
          id: user._id,
          account: user.account,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      res.status(500).json({
        name: err.name,
        message: err.message,
      });
    }
  }

  async signIn(req, res) {
    try {
      // validation
      const { error } = signInValid.validate(req.body);
      if (error) {
        res.status(400).json({
          message: error.details.map((item) => item.message),
        });
        return;
      }
      const data = { ...req.body };

      const user = await Users.findOne({ email: data.email });

      if (!user) {
        res.status(404).json({
          message: "Email hoặc mật khẩu không đúng!",
        });
        return;
      }

      const isMath = await bcryptjs.compare(data.password, user.password);
      if (!isMath) {
        res.status(404).json({
          message: "Email hoặc mật khẩu không đúng!",
        });
        return;
      }

      const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        SECRET_CODE,
        {
          expiresIn: "30d",
        }
      );

      if (!accessToken) {
        res.status(404).json({
          message: "Token sign fail!",
        });
        return;
      }
      res.status(200).json({
        message: "Đăng nhập thành công!",
        data: {
          id: user._id,
          account: user.account,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          accessToken: accessToken,
        },
      });
      return;
    } catch (err) {
      res.status(500).json({
        name: err.name,
        message: err.message,
      });
    }
  }
}

export default new AuthCotroller();
