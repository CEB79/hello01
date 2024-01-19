import db from "../../config/database.js";

//mypage 회원번호, 이름, 전화번호 부분//
export const mypageInfo = (UserNo, result) => {
    // console.log(UserNo);
    db.query("SELECT user.UserNo, user.UserNa, user.UserPhon, COUNT(MYPAGE.FK__rboard), COUNT(MYPAGE.FK__fboard) FROM mypage LEFT JOIN user ON user.UserNo = MYPAGE.FK__user WHERE user.UserNo=?", [UserNo], (err, results) => {
        if (err) {
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