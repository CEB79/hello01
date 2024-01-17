import {getUser, insertUser} from "../Models/productModel.js"
// Show User
export const showUser = (req, res) => {
    getUser((err, results) => {             
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });   
}

export const createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete User
// export const deleteUser = (req, res) => {
//     db.query("DELETE FROM user WHERE UserNo = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             res.send(err);
//         } else {
//             console.log(results);
//             res.json(results);
//         }
//     });   
// }

// Create New User

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