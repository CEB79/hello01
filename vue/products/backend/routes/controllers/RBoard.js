
import {getRecipe, getRecipeDetails, getRecipeIMG} from "../Models/RecipeModel.js";

export const showRecipe = (req, res) => {
    getRecipe((err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            // console.log(results);
            res.json(results);
        }
    });
}

export const showRecipeDetails = (req, res) => {
    getRecipeDetails((err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const showRecipeIMG = (req, res) => {
    getRecipeIMG((err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(results);
        }
    });
}