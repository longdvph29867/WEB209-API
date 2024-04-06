import Joi from "joi";

export const categoryValid = Joi.object({
  categoryName: Joi.string().required().min(3).max(255).messages({
    "string.empty": "Tên danh mục không để trống!",
    "any.required": "Tên danh mục là bắt buộc!",
    "string.min": "Tên danh mục phải có ít nhất 3 ký tự!",
    "string.max": "Tên danh mục phải có ít hơn 255 ký tự!",
  }),
}).options({ abortEarly: false });
