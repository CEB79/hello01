import express from "express";

//EB
import {checkLogin, checkUserById, createUser, deleteUser, showUser} from "./controllers/User.js";
import {showRecipe} from "./controllers/RBoard.js";

//JY
import { showMypage,} from "./controllers/Product_JY.js";

const router = express.Router();

//EB
router.get('/user', showUser);
 
// Get Single User
router.post('/user/:id', checkUserById);
 
// // Create New Product

// router.post('/user', createUser);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.post('/login', checkLogin);

router.get('/recipe', showRecipe);


//JY
router.post('/showmypage', showMypage);
// router.post('/mypage_fcount', showMypage_fboard_count);

export default router;