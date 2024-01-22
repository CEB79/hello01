import express from 'express';
import { insertBoard } from '../Models/boardModel.js';

const router = express.Router();

router.post('/save', (req, res) => {
  const { BorderNo, BorderNa, User_userID, BorderDt, BorderDate, BorderLike, BordeView } = req.body;

  const boardData = {
    BorderNo: BorderNo,
    BorderNa: BorderNa,
    User_userID: User_userID,
    BorderDt: BorderDt,
    BorderDate: BorderDate,
    BorderLike: BorderLike,
    BordeView: BordeView
  };

  insertBoard(boardData, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, error: "데이터베이스에 삽입 중 오류 발생" });
    }

    console.log("데이터베이스에 성공적으로 삽입되었습니다.");
    return res.status(200).json({ success: true, message: "데이터베이스에 성공적으로 삽입되었습니다." });
  });
});

export default router;