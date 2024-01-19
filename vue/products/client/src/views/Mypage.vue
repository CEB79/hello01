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
          <tr>
            <td>{{ itemss.UserNo }}</td>
            <td>{{ itemss.UserNa }}</td>
            <td>{{ itemss.UserPhon }}</td>
            <td class="actcss">{{ itemss.rboard }}건</td>
            <td class="actcss">{{ itemss.fboard }}건</td>
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
      itemss : {},
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
          console.log(response);
          this.items = response.data;
          // this.itemss = Object.values(this.items[0]);
          console.log(Object.keys(this.items[0]));
          console.log(Object.values(this.items[0]));
          this.itemss.UserNo = Object.values(this.items[0])[0];
          this.itemss.UserNa = Object.values(this.items[0])[1];
          this.itemss.UserPhon = Object.values(this.items[0])[2];
          this.itemss.rboard = Object.values(this.items[0])[3];
          this.itemss.fboard = Object.values(this.items[0])[4];
          console.log(this.itemss)
          
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