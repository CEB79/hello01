import db from "../../config/database.js";

//mypage 회원번호, 이름, 전화번호 부분//
export const mypageInfo = (UserNo, result) => {
    // console.log(UserNo);
    db.query("SELECT User.UserNo, user.UserNa, user.UserPhon FROM mypage INNER JOIN user ON mypage.FK__user=user.UserNo WHERE mypage.FK__user=?", [UserNo], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

//mypage fboard 자유게시판 글 쓴 개수//
// export const mypageInfo_fboard_count = (UserNo, result) => {
//     // console.log(UserNo);
//     db.query("SELECT COUNT(mypage.FK__fboard) FROM mypage WHERE mypage.FK__user=?", [UserNo], (err, results) => {
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });
// }