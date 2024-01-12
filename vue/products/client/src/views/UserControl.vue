<template>
  <div>
    <div class="conteinal">
      <div class="body">
        <h2>회원 관리 페이지</h2>

        <div class="userSerch_form">
          <strong>회원 리스트 </strong>
          <input
            type="text"
            class="userSerch"
            name="userSerch"
            placeholder="아이디"
          />
          <button class="userSerch_btn">검색</button>
        </div>
        <hr>
        <div>
          <table >
            <thead>
              <tr>
                <th>회원번호</th>
                <th>아이디</th>
                <th>이름</th>
                <th>등급</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>admin</td>
                <td>admin</td>
                <td>관리자</td>
                <td><button class="secession_btn">탈퇴</button></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


</script>

<style scoped>
.userSerch_form {
  font-size: 20px;
}
.userSerch {
  height: 25px;
  margin: 5px 5px;
  margin-bottom: 8px;
  border: solid 1px black;
  padding: 5px;
  font-size: 15px;
}
.userSerch_btn {
  height: 26px;
  padding: 0 5px;
  border: solid 1px;
  border-radius: 5px;
  color: black;
  margin-bottom: 4px;
  font-size: 15px;
}

table, th, td{
  border: 1px solid black;
  border-collapse: collapse;
  border-width: 1px;
  margin-top: 20px;

}
th,
td {
  padding: 0.5rem;
  border: 1px solid black;
  text-align: center;
}

.secession_btn{
  height: 26px;
  padding: 0 5px;
  border: solid 1px;
  border-radius: 5px;
}
</style>