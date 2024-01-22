import { mypageInfo, myrecipe , myboard, deleteboardNo, main2_1 } from "../Models/ProductModel_JY.js"


// mypage 회원번호, 이름, 전화번호 부분//
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

// 마이페이지 레시피 글 쓴 개수//
export const showmyrecipe = (req, res) => {
    let UserNo = req.body.UserNo;
    myrecipe(UserNo,(err, results) => {             
        if(err) {
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });
}

// 마이페이지 레시피 글 쓴 개수//
export const showmyboard = (req, res) => {
    let UserNo = req.body.UserNo;
    myboard(UserNo,(err, results) => {             
        if(err) {
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });
}

//마이페이지 자유게시판 글 삭제
export const deleteboard = (req, res) => {
    const name = req.param.name;
    deleteboardNo(name, (err, results) => {
        if (err){
            res.send(err);
        }else{
            console.log(results);
            res.json(results);
        }
    });
}


// 마이페이지 레시피 글 쓴 개수
export const showmain2_1 = (req, res) => {
    // let UserNo = req.body.UserNo;
    main2_1((err, results) => {             
        if(err) {
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });
}