import express from "express";
//EB
<<<<<<< HEAD
import {checkLogin, checkUserById, checkUserById2, createUser, deleteUser, getIdtoUser, getPwtoUser, showUser} from "./controllers/User.js";
=======
import {
    checkLogin,
    checkUserById,
    createUser,
    deleteUser,
    getIdtoUser,
    getPwtoUser,
    showUser
} from "./controllers/User.js";
>>>>>>> 5a03fdf485484f1fad86483928a17adac9351c78
//SUN
import {
    showRecipe,
    showRecipeDetails,
    showRecipeIMG,
    showIngredient,
    showCategory, showTitle, showDetail, showIngd
} from "./controllers/RBoard.js";
//JY
import {
    showMypage,
    showmyrecipe,
    showmyboard,
    deleteboard,
    showmain2_1,
    showmain5_like,
    showmain5_view,
    showmain5_new
} from "./controllers/Product_JY.js";



const router = express.Router();

//EB
router.get('/user', showUser);
router.post('/userId', getIdtoUser);
router.post('/userPw', getPwtoUser);
router.post('/user/:id', checkUserById);
router.post('/user2/:id', checkUserById2);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.post('/login', checkLogin);


//JY
router.post('/showmypage', showMypage);
router.post('/showmyrecipe', showmyrecipe);
router.post('/showmyboard', showmyboard);
router.delete('/board/:id', deleteboard);
router.get('/showmain2_1', showmain2_1);
router.get('/showmain5_like', showmain5_like);
router.get('/showmain5_view', showmain5_view);
router.get('/showmain5_new', showmain5_new);


//SUN
router.get('/recipe', showRecipe);
router.get('/recipedetails', showRecipeDetails);
router.get('/recipeimg', showRecipeIMG);
router.get('/ingredient', showIngredient);
router.get('/category', showCategory);

router.get('/title', showTitle);
router.get('/ingd', showIngd);
router.get('/detail', showDetail);


export default router;