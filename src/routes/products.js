/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API operations related to products
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: The list of the products
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /products/{slug}:
 *   get:
 *     summary: Get details of a specific products
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         description: The slug of the products
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new products
 *     tags: [Products]
 *     security:
 *       - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "String"
 *             desc: "String"
 *             images: [String]
 *             gender: "String"
 *             price: 0
 *             id_category: "String"
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /products/{slug}:
 *   put:
 *     summary: Update a products
 *     tags: [Products]
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         description: The slug of the category to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "String"
 *             desc: "String"
 *             images: [String]
 *             gender: "String"
 *             price: "Number"
 *             id_category: "String"
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {}
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a products
 *     tags: [Products]
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the products to be deleted
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Products deleted successfully
 *               data: {}
 */

import { Router } from "express";
import productsController from "../controllers/productsController.js";
import { checkPermission } from "../middlewares/middlewares.js";

const routerProduct = Router();
routerProduct.get("/", productsController.getAll);
routerProduct.get("/:id", productsController.getDetail);
routerProduct.post("/", checkPermission, productsController.create);
routerProduct.put("/:id", checkPermission, productsController.update);
routerProduct.delete("/:id", checkPermission, productsController.delete);
export default routerProduct;
