import db from "../../config/database.js";


//board 테이블에 아래 데이터 추가

export const insertBoard = (data, result) => {
  const query = "INSERT INTO board (BorderNo, BorderNa, User_userID, BorderDt, BorderDate, BorderLike, BordeView) VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(query, [data.BorderNo, data.BorderNa, data.User_userID, data.BorderDt, data.BorderDate, data.BorderLike, data.BordeView], (err, results) => {
    if (err) {
      console.error(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};


//board 테이블에서 글 목록을 조회?? 미완성
// export const getBoardList = (result) => {
//   const query = "SELECT BorderNo, BorderNa FROM board";

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error(err);
//       result(err, null);
//     } else {
//       result(null, results);
//     }
//   });
// };



// Delete Product to Database
// export const deleteUserById = (id, result) => {
//     db.query("DELETE  FROM user WHERE UserNo = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//             db.query( "DELETE  FROM mypage WHERE FK__user = ?", [id], (err, results) =>{
//                  result(null, results);
//                 // return deleteUserById;
//             }) 
//         } else {
//             result(null, results);
//         }
//     });   
// }