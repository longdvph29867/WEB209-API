import { Router } from "express";
import imagesController from "../controllers/imagesController.js";
import cloudinary from "../utils/cloudinaryConfig.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import path from "path";

const routerImages = Router();
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   allowedFormats: ["jpg", "png", "jpeg"],
//   params: {
//     folder: "test-up-image",
//   },
// });
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(
      null,
      path.basename(file.originalname, path.extname(file.originalname)) +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  // limits: { fileSize: 1024 * 1024, files: 5 },
  // fileFilter: (req, file, cb) => {
  //   const filetypes = /jpeg|jpg|png/;
  //   // Check ext
  //   const extname = filetypes.test(
  //     path.extname(file.originalname).toLowerCase()
  //   );
  //   // Check mime
  //   const mimetype = filetypes.test(file.mimetype);

  //   if (mimetype && extname) {
  //     return cb(null, true);
  //   } else {
  //     return cb(null, false);
  //   }
  // },
});

routerImages.post("/", upload.array("images"), imagesController.uploadImages);
routerImages.delete(
  "/:publicId",
  upload.array("images"),
  imagesController.delete
);

export default routerImages;
