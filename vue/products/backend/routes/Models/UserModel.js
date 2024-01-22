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
    db.query("SELECT * FROM user WHERE UserId like ?", [id+"%"], (err, results) => {             
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

export const getId = (data, result) => {
    // console.log(data)
    db.query("SELECT UserId FROM user WHERE UserNa = ? and UserPhon = ?", [data.UserNa, data.UserPhon], (err, results) =>{
        if(err) {
            console.log(err);
            result(err, null);
        }else{
            console.log(results)
            result(null, results);
    }
    });
}

export const getPw = (data, result) => {
    // console.log(data)
    db.query("SELECT UserPassword FROM user WHERE UserId = ? and UserPhon = ?", [data.UserId, data.UserPhon], (err, results) =>{
        if(err) {
            console.log(err);
            result(err, null);
        }else{
            console.log(results)
            result(null, results);
    }
    });
}
