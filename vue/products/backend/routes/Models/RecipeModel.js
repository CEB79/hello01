import db from "../../config/database.js";

export const getRecipe = (result) => {
    db.query("SELECT UserNo, userNa, RecipeName, TitleImg\n" +
        "FROM recipeboard r inner JOIN user u\n" +
        "WHERE u.UserNo = r.FKuserID;\n", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getRecipeDetails = (result) => {
    db.query("SELECT \n" +
        "r.TitleImg, r.RecipeName, \n" +
        "u.UserNa, r.RecipDate, r.RecipeLike, r.RecipeView, \n" +
        "r.RecipTime, r.RecipeServings, i.ingdName, i.ingdAm  \n" +
        "FROM recipeboard r, ingredient i, recipedetails d, user u \n" +
        "WHERE r.RecipeID = i.FK_Recipe_ID and u.UserNo = r.FKuserID;", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getRecipeIMG = (result) => {
    db.query("SELECT\n" +
        "r.RecipeID, d.FK_recipedetails_recipeboard, \n" +
        "r.RecipeName, d.recipedetails, d.RecipeComImg \n" +
        "FROM recipedetails d JOIN recipeboard r \n" +
        "WHERE d.FK_recipedetails_recipeboard = r.RecipeID;", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
