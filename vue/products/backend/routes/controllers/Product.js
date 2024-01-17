import db from "../../config/database.js";

// Show User
export const showUser = (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {             
        if(err) {
            console.log(err);
            res.send(err);
           // result(err, null);
        } else {
            console.log(results);
            res.json(results);

            //result(null, results);
        }
    });   
}

// Delete User
export const deleteUser = (req, res) => {
    db.query("DELETE FROM user WHERE UserNo = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });   
}

// Create New User
export const createUser = (req, res) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {             
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
} 
// // Get Single Product 
// export const showProductById = (req, res) => {
//     getProductById(req.params.id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
 
// // Create New Product
// export const createProduct = (req, res) => {
//     const data = req.body;
//     insertProduct(data, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
 
// // Update Product
// export const updateProduct = (req, res) => {
//     const data  = req.body;
//     const id    = req.params.id;
//     updateProductById(data, id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
 
// // Delete Product
// export const deleteProduct = (req, res) => {
//     const id = req.params.id;
//     deleteProductById(id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }