<template>
  <body>
    <div>
      <h1>주방 꿀팁 게시판</h1>
      <h4>주방에서 유용한 꿀팁 공유 게시판입니다.</h4>
    </div>

    <div class="tipDT">
      <div class="tipPic">
        <div>
          <h4><b>버터 쉽게 소분 보관법</b></h4>
        </div>
        <div>
          <b-img
            :src="require('../../public/common/img/Tips/butter/1.jpg')"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
          ></b-img>
          <b-img
            :src="require('../../public/common/img/Tips/butter/2.jpg')"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
          ></b-img>
          <b-img
            :src="require('../../public/common/img/Tips/butter/3.jpg')"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
          ></b-img>
          <b-img
            :src="require('../../public/common/img/Tips/butter/4.jpg')"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
          ></b-img>
          <div class="tipDesc">
            <div>
              ① 종이호일을 버터 크기에 맞게 잘라 주세요. (tip. 실제 버터
              크기보다 1~2cm 여유 있게 잘라 주세요)
            </div>
            <div>
              ② 칼 끝에 종이호일을 감싼 후 버터를 잘라 주세요. (tip. 끝까지 칼을
              밀어 넣어 종이호일까지 같이 잘라 주세요)"
            </div>
            <div>③ 소분한 버터를 간편하게 사용하세요.</div>
          </div>
        </div>

        <!-- <img src="../../public/common/img/Tips/butter/1.jpg" alt="이미지 설명"> -->
        <div>
          <!-- 이미지 파일을 public 폴더에 넣고 상대 경로를 사용하는 예제 -->
          <!-- <img :src="require('../../public/common/img/Tips/butter/1.jpg')" alt="이미지 설명" />    -->

          <!-- 또는 이미지 파일의 상대 경로를 직접 사용하는 예제 -->
          <!-- <img src="@/assets/image.jpg" alt="이미지 설명" /> -->
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.tipDT {
  display: flex;
}
.tipPic {
  size: 20em;
}
.tipDesc {
  font: 15px;
}
</style>
