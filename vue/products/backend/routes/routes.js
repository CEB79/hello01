import express from "express";
//EB
import {checkLogin, checkUserById, createUser, deleteUser, getIdtoUser, getPwtoUser, showUser} from "./controllers/User.js";
//SUN
import {showRecipe, showRecipeDetails, showRecipeIMG} from "./controllers/RBoard.js";
//JY
import { showMypage, showmyrecipe, showmyboard, deleteboard, showmain2_1 } from "./controllers/Product_JY.js";


const router = express.Router();

//EB
router.get('/user', showUser);
router.post('/userId', getIdtoUser);
router.post('/userPw', getPwtoUser);
router.post('/user/:id', checkUserById);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.post('/login', checkLogin);


//JY
router.post('/showmypage', showMypage);
router.post('/showmyrecipe', showmyrecipe);
router.post('/showmyboard', showmyboard);
router.delete('/board/:name', deleteboard);
router.get('/showmain2_1', showmain2_1);


//SUN
router.get('/recipe', showRecipe);
router.get('/recipedetails', showRecipeDetails);
router.get('/recipeimg', showRecipeIMG);

//EJ 컨트롤러 안에 있는 js파일의 이름을 가져와야함.



export default router;