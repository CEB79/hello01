<template>
  <!-- <Subpage :pagetit="'자유 소통 게시판'"> -->
  <section class="fboardWrite">
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <div id="fboardName">
      <span><h1>자유 게시판</h1></span>
      <span><h4>회원끼리 자유롭게 소통하는 게시판입니다.</h4></span>
    </div>

    <div id="fbTitle">
      <span style="color: black">제목 </span>
      <input type="text" />
    </div>
    <div id="fbWrite">
      <span style="color: black">내용</span>
      <textarea
        id="fboardWrite"
        placeholder="내용을 입력하세요."
        cols="50"
        align="center"
      ></textarea>

      <div class="fbBtn"  style="align:right; margin-top: 10px;" >
        <input type="button" value="등록하기" />
        <input type="button" value="취소" />
      </div>
    </div>
  </section>
</template>

<style>
h1,
h4 {
  margin-left: 80px;
}

#fbWrite {
  vertical-align: top;
}

#fboardName,
#fbWrite, #fbTitle {
  margin: 0 auto; /* 수평 가운데 정렬 */
  width: 80%;
}

#fbTitle input,
#fbWrite textarea {
  width: 100%; /* input과 textarea의 너비를 100%로 설정 */
}

#fbWrite textarea {
  height: 500px;  
}

.fbBtn{
  align-content: right;
}
</style>
