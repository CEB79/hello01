<template>
  <!-- <Subpage :pagetit="'자유 소통 게시판'"> -->
  <section class="fboardWrite">
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <div id="fboardName">
      <span><h1>자유 게시판</h1></span>
      <span><h4>회원끼리 자유롭게 소통하는 게시판입니다.</h4></span>
      <br /><br />
    </div>

    <div class="freeboard">
      <div class="fbTitle">
        <b-input-group prepend="제목  " class="mb-2">
          <b-form-input aria-label="title" width="800px"></b-form-input>
        </b-input-group>
      </div>

      <div class="fbWrite">
        <b-form-textarea
          id="textarea-rows"
          placeholder="내용을 입력하세요."
          rows="8"
        ></b-form-textarea>
      </div>
      <div class="fbBtn">
        <b-button class="btn" variant="info" type="submit" >등록</b-button>
        <b-button class="btn" variant="outline-secondary">취소</b-button>
      </div>
    </div>

    <!-- <div class="freeboard">
      <div class="fbTitle">
        <div style="color: black">제목</div>
        <input type="text" />
      </div>
      <div class="fbWrite">
        <div style="color: black">내용</div>
        <textarea
          id="fboardWrite"
          placeholder="내용을 입력하세요."
          cols="50"
          align="center"
        ></textarea>
        <div class="fbBtn">
          <input type="button" value="등록하기" />
          <input type="button" value="취소" />
        </div> -->
      <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

<style>
h1,
h4 {
  margin-left: 80px;
  min-width: 350px;
}

#fbWrite {
  vertical-align: top;
}

.fboardName,
.fbWrite,
.fbTitle {
  margin: 0 auto; /* 수평 가운데 정렬 */
  width: 80%;
}

.fbTitle input,
.fbWrite textarea {
  width: 100%; /* input과 textarea의 너비를 100%로 설정 */
  max-width: 1024px;
  min-width: 350px;
}

.fbWrite {
  display: table;
}

.fbWrite textarea {
  height: 500px;
}
#btn{
  margin: 10px;
}

.fbBtn {
  text-align: right;
  margin-right: 10  0px;
  margin: 10px 100px;
}
</style>
