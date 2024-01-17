// import express
import express from "express";
 
// import function from controller
import {createUser, showUser } from "./controllers/Product.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/user', showUser);
 
// // Get Single Product
// router.get('/products/:id', showProductById);
 
// // Create New Product
// router.post('/products', createProduct);
router.post('/user', createUser);
// // Update Product
// router.put('/products/:id', updateProduct);
 
// // Delete Product
// router.delete('/products/:id', deleteProduct);
 
// export default router
export default router;