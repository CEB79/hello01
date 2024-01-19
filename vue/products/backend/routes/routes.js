import express from "express";
//EB
import {checkLogin, checkUserById, createUser, deleteUser, showUser} from "./controllers/User.js";
//SUN
import {showRecipe, showRecipeDetails, showRecipeIMG} from "./controllers/RBoard.js";

//JY
import { showMypage,} from "./controllers/Product_JY.js";

const router = express.Router();

//EB
router.get('/user', showUser);

// Get Single User
router.post('/user/:id', checkUserById);

// router.post('/user', createUser);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.post('/login', checkLogin);


//JY
router.post('/showmypage', showMypage);
// router.post('/mypage_fcount', showMypage_fboard_count);

//SUN
router.get('/recipe', showRecipe);
router.get('/recipedetails', showRecipeDetails);
router.get('/recipeimg', showRecipeIMG);

export default router;