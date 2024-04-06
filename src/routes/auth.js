/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API operations related to auth
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: "String"
 *             password: "String"
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             account: "String"
 *             password: "String"
 *             fullName: "String"
 *             email: "String"
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

import { Router } from "express";
import authController from "../controllers/authController.js";

const routerAuth = Router();
routerAuth.post("/register", authController.signUp);
routerAuth.post("/login", authController.signIn);
export default routerAuth;
