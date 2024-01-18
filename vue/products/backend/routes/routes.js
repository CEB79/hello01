// import express
import express from "express";
 
// import function from controller
import {checkLogin, checkUserById, createUser, deleteUser, showUser} from "./controllers/User.js";
 
// init express router
const router = express.Router();
 
// Get All User
router.get('/user', showUser);
 
// Get Single User
router.get('/user/:id', checkUserById);
 
// // Create New Product

// router.post('/user', createUser);
router.post('/user', createUser);

// // Update Product
 
// Delete Product
router.delete('/user/:id', deleteUser);
 

router.post('/login', checkLogin);


// export default router
export default router;