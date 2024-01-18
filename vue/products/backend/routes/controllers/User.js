import {deleteUserById, getLogin, getUser, getUserById, insertUser} from "../Models/UserModel.js"
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
// Get Single Product 
export const checkUserById = (req, res) => {
    const data =req.body
    getUserById(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
            // console.log(results);
            //  if(results == []){
            //     alert("사용 가능한 ID 입니다.");
            // }else{
            //     alert("사용 불가능한 ID 입니다.");
            // }e
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

// Delete Product
export const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const checkLogin = (req, res) =>{
    const data = req.body;
    // console.log(data.UserId);
    getLogin(data, (err, results) => {
        if (err){
            console.log(err)
            res.send(err);
        }else{
            console.log("통과");
            res.json(results);
            console.log(results[0])
        }
        // console.log(req)
        // console.log(results[0].UserNo);
    });
}

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