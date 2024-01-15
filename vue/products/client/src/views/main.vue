<template>

  <div class="content section01">


        <!-- 메인 1번 -->
    <!-- 플러그인 설치 " npm install @splidejs/vue-splide " 설치해야 작동됨-->
    <!-- <div id="mainslider"> -->
      <splide :options="options">
        <splide-slide>
          <img src="@/img/main_1.png" alt="main1">
        </splide-slide>
        <splide-slide>
          <img src="@\img\main_2.png" alt="main2">
        </splide-slide>
        <!-- <splide-slide>
        <img src="@/img/main_3.jpg" alt="main3">
        </splide-slide> -->
      </splide>
  <!-- </div> -->


    <!-- 메인3-1 -- 인기검색어 부분 -->
    <div class="sec01_tag">
      <h2>이건 어때요?<strong>인기 검색어</strong></h2>
      <p>고민을 덜어주는 추천 검색어</p>
      <div class="Tag">
        <ul>
          <li><a href="/category/search.asp?s_value=카레">#카레</a></li>
          <li><a href="/category/search.asp?s_value=마요네스">#마요네스</a></li>
          <li><a href="/category/search.asp?s_value=분식">#분식</a></li>
          <li><a href="/category/search.asp?s_value=브런치">#브런치</a></li>
          <li><a href="/category/search.asp?s_value=집밥">#집밥</a></li>
          <li><a href="/category/search.asp?s_value=치즈듬뿍">#치즈듬뿍</a></li>
          <li><a href="/category/search.asp?s_value=캠핑">#캠핑</a></li>
          <li><a href="/category/search.asp?s_value=간단 꿀조합">#간단 꿀조합</a></li>
        </ul>
      </div>
    </div>   
    <!-- 메인3-1 -- 인기검색어 부분 -->


    <!-- 메인3-2 -- 사이트소개 부분 -->
    <div class="col-lg-4 col-md-4">  <!-- class="col-lg-8 col-md-7" -->
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="blog__item">
              <div class="blog__item__pic">
                  <img src="@/img/siteint_1.jpg" alt="">
              </div>
              <div class="blog__item__text">
                  <ul>
                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                      <li><i class="fa fa-comment-o"></i> 5</li>
                  </ul>
                  <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                      quaerat </p>
                  <a href="#" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
              </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="blog__item">
              <div class="blog__item__pic">
                  <img src="@/img/siteint_2.jpg" alt="">
              </div>
              <div class="blog__item__text">
                  <ul>
                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                      <li><i class="fa fa-comment-o"></i> 5</li>
                  </ul>
                  <h5><a href="#">Visit the clean farm in the US</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                      quaerat </p>
                  <a href="#" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 메인3-2 -- 사이트소개 부분 -->


    <!-- 메인3-3 -- 꿀팁 소개 부분 -->
    <div class="sec04_tip col-4">
            <a class="sec04_tip_a" href="../category/tip.asp">
               <h2>오뚜기의<br>
               쉽고 간단한<br>
               <strong>계량 꿀팁!</strong></h2>
               <p>밥숟가락, 종이컵으로 <br>
               간단하고 쉽게 알려드립니다. </p>
            </a>
         </div>
    <!-- 메인3-3 -- 꿀팁 소개 부분 -->
            
                  


  </div>
</template>


<style scoped>
/* main-1 */
/* #mainslider{
  text-align: center;
  align-items: center;
} */

/* main-3 전체적용 css */
.content {

  /* position: relative; */
  /* width: 1280px; */

  margin: 0 auto;
  /* vertical-align: top; */
  /* display: flex; */
  
  /* align-items: center; */
  /* flex-flow: row nowrap;
  justify-content: center; */

  /* clear: both; */
}

/* div {
  display: block;
  float: left;
} */



/* 꿀팁 소개 부분 css (오키친) */
.sec04_tip{
  background-color: rgb(255, 237, 147);
  /* padding: 50px 40px; */
  /* margin: auto; */
  align-items: center;
}
/* .section01 .sec04_tip a {
    padding: 40px 30px;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: padding-box;
} */

.sec04_tip_a:hover, .sec04_tip_a:active, .sec04_tip_a:focus {
    text-decoration: none;
    color: #333;
}


/* 사이트소개 부분 css (오가닉) */






/* 인기검색어 부분 css (오키친) */


.sec01_tag strong {
  display: block;
}
.section01 .sec01_tag .Tag li {
  display: block;
}

/* .section01 { 전체구조
  margin: 100px auto;
  display: table;
}  */

.sec01_tag h2 {
  font-size: 40px;
  color: #333;
  /* line-height: 1.1; */
  /* font-weight: normal; */
}
/* .Tag {
  position: relative;
  text-align: center;
  margin-bottom: 20px;
} */
.Tag a {
  font-size: 20px;
  /* line-height: 25px; */
  color: #777777;
  padding: 5px 20px 7px;
  border: 1px solid #c1c1c1;
  background: #fff;
  border-radius: 50px;
}
.Tag li {
  display: inline-block;
  margin: 5px 2px;
  min-height: 40px;
}
a {
  text-decoration: none;
  color: #777;
}
.Tag {
  text-align: left;
  margin-top: 30px;
}



</style>



<script>
// main 1번(배너슬라이더 부분)
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name:"MainSlider",
  components: {
  Splide,
  SplideSlide,
},
  data() {
    return {
      options: {
      type : 'loop',
      rewind      : true,
      perPage     : 1,
      autoplay    : true,
      pauseOnHover: false,
      arrows      : false,
      dots: true,
      animatedDots: true,
      },
    };
  },
}

</script>