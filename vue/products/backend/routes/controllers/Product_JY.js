import { mypageInfo} from "../Models/ProductModel_JY.js"


//mypage 회원번호, 이름, 전화번호 부분//
export const showMypage = (req, res) => {
    let UserNo = req.body.UserNo;
    mypageInfo(UserNo,(err, results) => {
        if(err) {
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });
}

//mypage fboard 자유게시판 글 쓴 개수//
// export const showMypage_fboard_count = (req, res) => {
//     let UserNo = req.body.UserNo;
//     mypageInfo_fboard_count(UserNo,(err, results) => {             
//         if(err) {
//             res.send(err);
//         } else {
//             console.log(results);
//             res.json(results);
//         }
//     });
// }