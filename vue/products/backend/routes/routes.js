import express from "express";
import {checkLogin, checkUserById, createUser, deleteUser, showUser} from "./controllers/User.js";
import {showRecipe} from "./controllers/RBoard.js";

const router = express.Router();

router.get('/user', showUser);
 
// Get Single User
router.post('/user/:id', checkUserById);
 
// // Create New Product

// router.post('/user', createUser);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.post('/login', checkLogin);

router.get('/recipe', showRecipe);

export default router;