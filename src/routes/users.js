/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations related to user
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: The list of the user
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get details of a specific users
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the users
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new users
 *     tags: [Users]
 *     security:
 *       - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             account: "String"
 *             password: "String"
 *             fullName: "String"
 *             email: "String"
 *             role: "String"
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a users
 *     tags: [Users]
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The slug of the users to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             account: "String"
 *             password: "String"
 *             fullName: "String"
 *             email: "String"
 *             role: "String"
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a users
 *     tags: [Users]
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the users to be deleted
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

import { Router } from "express";
import usersController from "../controllers/usersController.js";
import { checkPermission } from "../middlewares/middlewares.js";

const routerUser = Router();
routerUser.get("/", usersController.getAll);
routerUser.get("/:id", usersController.getDetail);
routerUser.post("/", checkPermission, usersController.create);
routerUser.put("/:id", checkPermission, usersController.update);
routerUser.delete("/:id", checkPermission, usersController.delete);
export default routerUser;
