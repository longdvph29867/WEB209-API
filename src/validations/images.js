export const validateFiles = (files) => {
  if (!files || files.length === 0) {
    return "Tối thiểu 1 ảnh!";
  }

  if (files.length > 5) {
    return "Tối đa 5 ảnh!";
  }

  for (const file of files) {
    if (file.size > 1 * 1024 * 1024) {
      return "Ảnh không quá 1MB!";
    }

    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedFileTypes.includes(file.mimetype)) {
      return "Ảnh phải có định dạng .jpg, .jpeg, .png";
    }
  }

  return null;
};
