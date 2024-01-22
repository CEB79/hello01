import db from "../../config/database.js";

// mypage 회원번호, 이름, 전화번호 부분//
export const mypageInfo = (UserNo, result) => {
    // console.log(UserNo);
    db.query("SELECT user.UserNo, user.UserNa, user.UserPhon FROM user WHERE user.UserNo=?", [UserNo], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// 마이페이지 레시피 글 쓴 개수//
export const myrecipe = (UserNo, result) => {
    // console.log(UserNo);
    db.query("SELECT RecipDate, RecipeName, RecipeView FROM recipeboard where recipeboard.FKuserID=?", [UserNo], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// 마이페이지 자유게시판 내가 글 쓴//
export const myboard = (UserNo, result) => {
    // console.log(UserNo);
    db.query("SELECT User_userID, BorderDate, BorderNa, BordeView FROM board where board.User_userID=?", [UserNo], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

//마이페이지 자유게시판 글 삭제
export const deleteboardNo = (name, result) => {
    db.query("DELETE  FROM board WHERE User_userID = ?", [name], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
            // db.query( "DELETE  FROM mypage WHERE User_userID = ?", [id], (err, results) =>{
                //  result(null, results);
                // return deleteUserById;
            // })
        } else {
            result(null, results);
        }
    });   
}