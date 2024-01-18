import express from "express";
import {checkLogin, checkUserById, createUser, deleteUser, showUser} from "./controllers/User.js";
import {showRecipe} from "./controllers/RBoard.js";

const router = express.Router();

router.get('/user', showUser);
router.get('/user/:id', checkUserById);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.post('/login', checkLogin);

router.get('/recipe', showRecipe);

export default router;