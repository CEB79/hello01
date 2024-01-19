// // import connection
import db from "../../config/database.js";
 
// Get All user
export const getUser = (result) => {
    db.query("SELECT * FROM user", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
            // console.log(results);
        }
    });   
}

// Get Single User
export const getUserById = (id, result) => {
    db.query("SELECT UserId FROM user WHERE UserId = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        }else {
            // console.log(results)
            result(null, results);

        }
    });   
}

// Insert user to Database
export const insertUser = (data, result) => {
    db.query("INSERT INTO user SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
};

// Delete Product to Database
export const deleteUserById = (id, result) => {
    db.query("DELETE  FROM user WHERE UserNo = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
            db.query( "DELETE  FROM mypage WHERE FK__user = ?", [id], (err, results) =>{
                 result(null, results);
                // return deleteUserById;
            }) 
        } else {
            result(null, results);
        }
    });   
}
 
export const getLogin = (data, result) => {
    db.query("SELECT * FROM user WHERE UserId = ? and UserPassword = ?", [data.UserId, data.UserPassword], (err, results) =>{
        if(err) {
            console.log(err);
            result(err, null);
        }else{
            // console.log(results)
            result(null, results);
    }
    });
}
// // // Get Single Product
// // export const getProductById = (id, result) => {
// //     db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, results) => {             
// //         if(err) {
// //             console.log(err);
// //             result(err, null);
// //         } else {
// //             result(null, results[0]);
// //         }
// //     });   
// // }
 

 
// // // Update Product to Database
// // export const updateProductById = (data, id, result) => {
// //     db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {             
// //         if(err) {
// //             console.log(err);
// //             result(err, null);
// //         } else {
// //             result(null, results);
// //         }
// //     });   
// // }
 
