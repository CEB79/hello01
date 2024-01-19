<template>
  <div class="content section01">

<!-----------------------------------------
            메인-1 슬라이드 사진부분
  -------------------------------------------->
    <!-- 플러그인 설치 " npm install @splidejs/vue-splide " 설치해야 작동됨-->
    <!-- <div id="mainslider"> -->

    <div class="main1">
      <splide :options="options">
        <splide-slide>
          <img src="../../public/common/img/img_JY/main_1.png" alt="main1" />
        </splide-slide>
        <splide-slide>
          <img src="../../public/common/img/img_JY/main_2.png" alt="main2" />
        </splide-slide>
        <!-- <splide-slide>
        <img src="@/img/main_3.jpg" alt="main3">
        </splide-slide>-->
      </splide>
    </div>


<!-----------------------------------------
                 메인-2 부분
  -------------------------------------------->

    <!-- 메인2-1 -- 인기검색어 부분 -->
    <div class="main2 row justify-content-md-center">
      <!-- row해서 하나로 만든다(메인2번) -->
      <div class="sec01_tag col-lg-3 col-md-3 col-sm-3">
        <h2>
          이건 어때요?
          <strong>인기 검색어</strong>
        </h2>
        <p>고민을 덜어주는 추천 검색어</p>
        <div class="Tag">
          <ul>
            <li>
              <a href="/category/search.asp?s_value=카레">#카레</a>
            </li>
            <li>
              <a href="/category/search.asp?s_value=마요네스">#마요네스</a>
            </li>
            <li>
              <a href="/category/search.asp?s_value=분식">#분식</a>
            </li>
            <li>
              <a href="/category/search.asp?s_value=브런치">#브런치</a>
            </li>
            <li>
              <a href="/category/search.asp?s_value=집밥">#집밥</a>
            </li>
            <li>
              <a href="/category/search.asp?s_value=치즈듬뿍">#치즈듬뿍</a>
            </li>
            <li>
              <a href="/category/search.asp?s_value=캠핑">#캠핑</a>
            </li>
            <li>
              <a href="/category/search.asp?s_value=간단 꿀조합">#간단 꿀조합</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 메인2-1 -- 인기검색어 부분 -->

      <!-- 메인2-2 -- 사이트소개 부분 -->
      <div class="col-lg-3 col-md-3 col-sm-3">
        <div class="blog__item">
          <div class="blog__item__pic">
            <img src="../../public/common/img/img_JY/siteint_1.jpg" alt />
          </div>
          <div class="blog__item__text">
            <ul>
              <li>
                <i class="fa fa-calendar-o"></i> May 4,2019
              </li>
              <li>
                <i class="fa fa-comment-o"></i> 5
              </li>
            </ul>
            <h5>
              <a href="#">6 ways to prepare breakfast for 30</a>
            </h5>
            <p>
              Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
              quaerat
            </p>
            <a href="#" class="blog__btn">
              READ MORE
              <span class="arrow_right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3">
        <div class="blog__item">
          <div class="blog__item__pic">
            <img src="../../public/common/img/img_JY/siteint_2.jpg" alt />
          </div>
          <div class="blog__item__text">
            <ul>
              <li>
                <i class="fa fa-calendar-o"></i> May 4,2019
              </li>
              <li>
                <i class="fa fa-comment-o"></i> 5
              </li>
            </ul>
            <h5>
              <a href="#">Visit the clean farm in the US</a>
            </h5>
            <p>
              Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
              quaerat
            </p>
            <a href="#" class="blog__btn">
              READ MORE
              <span class="arrow_right"></span>
            </a>
          </div>
        </div>
      </div>
      <!-- 메인2-2 -- 사이트소개 부분 -->

      <!-- 메인2-3 -- 꿀팁 소개 부분 -->
      <div class="sec04_tip col-lg-3 col-md-3 col-sm-3">
        <a class="sec04_tip_a" href="../category/tip.asp">
            <img class="sec04_tip_image" src="../../public/common/img/img_JY/mainTip.png" alt />
        </a>
      </div>
      <!-- 메인2-3 -- 꿀팁 소개 부분 -->
    </div>
    <!-- 메인2부분 끝 -->


    <!-----------------------------------------
                 메인-3 광고부분
  -------------------------------------------->
    <!-- Banner Begin -->
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src="../../public/common/img/img_oga/banner/banner-1.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src="../../public/common/img/img_oga/banner/banner-2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 메인3 광고 부분 끝 -->




    <!-----------------------------------------
                 메인-4 분류 부분
  -------------------------------------------->




    <!-----------------------------------------
                 메인-5 조회수별 나열 부분
  -------------------------------------------->

<section class="latest-product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Latest Products</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-1.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-2.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-3.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-1.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-2.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-3.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Top Rated Products</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-1.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-2.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-3.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-1.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-2.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-3.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Review Products</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-1.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-2.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-3.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-1.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-2.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        <img src="../../public/common/img/img_oga/latest-product/lp-3.jpg" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!------------------ 메인5번 끝 ------------------->





  </div>
</template>


<style scoped>

/* #mainslider{
  text-align: center;
  align-items: center;
} */

.content {
  /* position: relative; */
  /* width: 1280px; */

  margin: 10px auto;
  /* text-align: center; */
  /* content에서 글씨 센터를 하게 되면 인기검색어도 센터가 되어 깨지게 된다 각 부분 클래스로 적용하기 */
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

/********************** 
       main-1번
***********************/
.splide__slide {
  backface-visibility: hidden;
  box-sizing: border-box;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  list-style-type: none !important;
  margin: 0;
  position: relative;
  text-align: center;
}

/********************** 
       main-2번
***********************/
.main2 {
  text-align: center;
  margin: 3em auto;
  width: 1600px;
  /* margin-left: 50px; */
  /* margin-right: 50px; */
}
/* 꿀팁 소개 부분 css (오키친) */
.sec04_tip {
  background-color: rgb(255, 237, 147);
  padding: 50px 40px;
  /* margin: auto; */
  /* align-items: center; */
}
/* .section01 .sec04_tip a {
    padding: 40px 30px;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: padding-box;
} */

.sec04_tip_a:hover,
.sec04_tip_a:active,
.sec04_tip_a:focus {
  text-decoration: none;
  color: #333;
}
.sec04_tip_image{
  flex: 0 0 auto;
  width: 25%;
}


/* 사이트소개 부분 css (오가닉) */

.blog__item__pic img {
  /* img사이즈를 전체 크기에 맞추기 */
  inline-size: -webkit-fill-available;
}

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
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "main1",
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      options: {
        type: "loop",
        rewind: true,
        perPage: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        dots: true,
        animatedDots: true
      }
    };
  }
};
</script>