import Joi from "joi";

export const userValid = Joi.object({
  account: Joi.string().required().min(6).max(25).messages({
    "string.empty": "Tài khoản không để trống!",
    "any.required": "Tài khoản là bắt buộc!",
    "string.min": "Tài khoản phải có ít nhất 6 ký tự!",
    "string.max": "Tài khoản tối đa 25 ký tự!",
  }),
  password: Joi.string().required().min(6).max(25).messages({
    "string.empty": "Mật khẩu không để trống!",
    "any.required": "Mật khẩu là bắt buộc!",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự!",
    "string.max": "Mật khẩu tối đa 25 ký tự!",
  }),
  fullName: Joi.string().required().max(50).messages({
    "string.empty": "Họ tên không để trống!",
    "any.required": "Họ tên là bắt buộc!",
    "string.max": "Họ tên tối đa 50 ký tự!",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "Email không để trống",
    "any.required": "Email là bắt buộc",
    "string.email": "Email không đúng định dạng",
  }),
  role: Joi.string().required().messages({
    "string.empty": "Role không để trống!",
    "any.required": "Role là bắt buộc!",
  }),
}).options({ abortEarly: false });

export const userValidSignUp = Joi.object({
  account: Joi.string().required().min(6).max(25).messages({
    "string.empty": "Tài khoản không để trống!",
    "any.required": "Tài khoản là bắt buộc!",
    "string.min": "Tài khoản phải có ít nhất 6 ký tự!",
    "string.max": "Tài khoản tối đa 25 ký tự!",
  }),
  password: Joi.string().required().min(6).max(25).messages({
    "string.empty": "Mật khẩu không để trống!",
    "any.required": "Mật khẩu là bắt buộc!",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự!",
    "string.max": "Mật khẩu tối đa 25 ký tự!",
  }),
  fullName: Joi.string().required().max(50).messages({
    "string.empty": "Họ tên không để trống!",
    "any.required": "Họ tên là bắt buộc!",
    "string.max": "Họ tên tối đa 50 ký tự!",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "Email không để trống",
    "any.required": "Email là bắt buộc",
    "string.email": "Email không đúng định dạng",
  }),
}).options({ abortEarly: false });

export const userUpdateValid = Joi.object({
  account: Joi.string().required().min(6).max(25).messages({
    "string.empty": "Tài khoản không để trống!",
    "any.required": "Tài khoản là bắt buộc!",
    "string.min": "Tài khoản phải có ít nhất 6 ký tự!",
    "string.max": "Tài khoản tối đa 25 ký tự!",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "Mật khẩu không để trống!",
    "any.required": "Mật khẩu là bắt buộc!",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự!",
  }),
  fullName: Joi.string().required().max(50).messages({
    "string.empty": "Họ tên không để trống!",
    "any.required": "Họ tên là bắt buộc!",
    "string.max": "Họ tên tối đa 50 ký tự!",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "Email không để trống",
    "any.required": "Email là bắt buộc",
    "string.email": "Email không đúng định dạng",
  }),
  role: Joi.string(),
}).options({ abortEarly: false });

export const signInValid = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": "Email không để trống",
    "any.required": "Email là bắt buộc",
    "string.email": "Email không đúng định dạng",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Mật khẩu không để trống!",
    "any.required": "Mật khẩu là bắt buộc!",
  }),
}).options({ abortEarly: false });
