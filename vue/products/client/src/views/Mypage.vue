<template>
  <div>
    <h2>마이페이지</h2>
    <div class="mypageinfo">
      <table>
        <thead>
          <tr>
            <th>회원번호</th>
            <th>이름</th>
            <th>전화번호</th>
            <th class="actcss">레시피 작성글</th>
            <th class="actcss">게시판 작성글</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.UserId">
          <!-- <tr v-if="item in items" :key="item.UserId"> -->
            <!-- <td>1001</td>
            <td>김00</td>
            <td>010-1234-1234</td>
            <td class="actcss">10건</td>
            <td class="actcss">1건</td> -->
            <td>{{ item.UserNo }}</td>
            <td>{{ item.UserNa }}</td>
            <td>{{ item.UserPhon }}</td>
            <!-- <td class="actcss">{{ COUNT(mypage.FK__fboard) }}건</td>
            <td class="actcss">{{ COUNT(board.User_userId) }}건</td> -->
          </tr>
        </tbody>
      </table>
    </div>

    <hr>

    <div class="mypageinfo solidout">
        <strong>내가쓴 레시피</strong>
        <button>더보기</button>
      <table>
        <thead>
          <tr>
            <th>일자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
             <!-- 3개까지 데이터 불러오기 v-for문 사용 -->
            <td>2024-01-17</td>
            <td>안녕하세요</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>


    <div class="mypageinfo solidout">
        <strong>내가쓴 게시판</strong>
        <button>더보기</button>
      <table>
        <thead>
          <tr>
           
            <th>일자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
             <!-- 3개까지 데이터 불러오기 v-for문 사용 -->
            <td>2024-01-17</td>
            <td>안녕하세요</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>




  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Mypage",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.showMypage();
  },

  methods: {
    // mypage 회원번호, 이름, 전화번호
    async showMypage() {
      // console.log(items="")
      try {
          const response = await axios.post("http://localhost:5000/showmypage",{UserNo:2}); //나중에 로컬스토리지 에서 받은 것으로 변경하기
          this.items = response.data;
      } catch (err) {
        console.log(err);
      }
      },
  //   async showMypage_fboard_count() {
  //     try {
  //         const response1 = await axios.post("http://localhost:5000/mypage_fcount",{UserNo:2}); //나중에 로컬스토리지 에서 받은 것으로 변경하기
  //         this.items = response1.data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  }}

</script>

<style scoped>
.mypageinfo table,th,td {
  border: 1px solid black;
  border-collapse: collapse;
  border-width: 1px;
  /* margin-top: 20px; */
  color: black;
}
.mypageinfo th,td {
  padding: 0.5rem;
  border: 1px solid black;
  text-align: center;
}
.solidout{
    padding: 10px;
    margin: 10px;
    width: auto;
    border: 1px solid greenyellow;
}
</style>