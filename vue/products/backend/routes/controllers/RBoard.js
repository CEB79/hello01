import {getRecipe} from "../Models/UserModel.js";

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