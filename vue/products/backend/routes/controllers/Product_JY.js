import { mypageInfo, myrecipe , myboard, deleteboardNo, main2_1, main5_like, main5_view, main5_new } from "../Models/ProductModel_JY.js"


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

//main5부분 인기레시피 1~6개 출력
export const showmain5_like = (req, res) => {
    // let UserNo = req.body.UserNo;
    main5_like((err, results) => {             
        if(err) {
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });
}

//main5부분 조회많은레시피 1~6개 출력
export const showmain5_view = (req, res) => {
    // let UserNo = req.body.UserNo;
    main5_view((err, results) => {     
        if(err) {
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });
}

//main5부분 최신레시피 1~6개 출력
export const showmain5_new = (req, res) => {
    // let UserNo = req.body.UserNo;
    main5_new((err, results) => {             
        if(err) {
            res.send(err);
        } else {
            console.log(results);
            res.json(results);
        }
    });
}