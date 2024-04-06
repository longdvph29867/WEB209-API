import { Router } from "express";
import routerCategory from "./categories.js";
import routerProduct from "./products.js";
import routerUser from "./users.js";
import routerAuth from "./auth.js";
import routerImages from "./images.js";

const router = Router();
router.use("/categories", routerCategory);
router.use("/products", routerProduct);
router.use("/users", routerUser);
router.use("/auth", routerAuth);
router.use("/images", routerImages);

export default router;
