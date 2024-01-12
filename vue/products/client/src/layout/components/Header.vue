<template>
    <header class="Topclass">
        <div class="topmenu">
            <div class="contentbox">
                <div class="logo">
                    <button v-on:click="goToPage('/main')">
                        Recipan
                    </button>
                </div>

                <nav class="humberger__menu__nav mobile-menu">
                    <ul>
                        <li class="active" v-on:click="goToPage('/main')">홈</li>
                        <li class="active" v-on:click="goToPage('/recipe')">레시피</li>
                        <!-- <li><a href="#">Pages</a>
                            <ul class="header__menu__dropdown">
                                <li><a href="./shop-details.html">홈</a></li>
                                <li><a href="./shoping-cart.html">레시피</a></li>
                                <li><a href="./checkout.html">게시판</a></li>
                                <li><a href="./blog-details.html">팁</a></li>
                            </ul>
                        </li> -->
                        <li class="active" v-on:click="goToPage('/board')">게시판</li>
                        <li class="active" v-on:click="goToPage('/tip')">TIP</li>
                    </ul>
                </nav>
        <div id="mobile-menu-wrap"></div>
                <div class="system">
                    <button class="login" v-on:click="goToPage('/login')">로그인</button>
                    <button class="member" v-on:click="goToPage('/SingUp')">회원가입</button>
                </div>
            </div>
        </div>


        <div >
            <div class="hero__search">
                <div class="hero__search__form">
                    <form action="#" class="searchform">
                        <div class="hero__search__categories">
                            All Categories
                            <span class="arrow_carrot-down"></span>
                        </div>
                        <input type="text" placeholder="What do yo u need?">
                        <button type="submit" class="site-btn">SEARCH</button>
                    </form>
                </div>
            </div>
        </div>
    </header>
</template>
<script></script>

<style scoped>

/* 로고, 메뉴 */
.contentbox {
    /* text-align: center; */
    /* width: 100%; */
    /* max-width: 1200px; */
    margin: 0 auto;
    padding: 80px 20px;
}

.topmenu .contentbox {
    display: flex;
    justify-content: space-between;
    /* justify-content : center; */
    align-items: center;
    padding: 5px;
}


/* 메뉴바 */
.active{
    /* background-color: rgb(134, 245, 100); */
    padding: 30px;
    margin: 30px;
    border-radius: 80px;
    border-style: none;
    font-weight: bold;
    font-size: 20px;
}

/* 메뉴바 마우스오버 */
.active:hover{
    border-style: groove;
    border-color: rgb(134, 245, 100);
    background-color: rgb(152, 226, 129);
}

/* 로그인글씨부분 */
.system > button::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    margin: 0 4px;
    background-color: #ddd;
    vertical-align: middle;
}

nav ul { 
    /* 가로설정 */
    display: flex; 
    /* ul부분 공간 잡혀있는 것 0으로 없애줌 */
    margin-bottom: 0rem;
    padding-left: 0rem;
}

/* 검색창 */
.hero__search__form {
    width: 60%;
    height: 50px;
    margin: 0 auto;
    border: 1px solid #ebebeb;
    position: relative;
    /* float: left; */
}

/* 검색바 */
.hero__search__form form .hero__search__categories {
	width: 30%;
	float: left;
	font-size: 16px;
	color: #1c1c1c;
	font-weight: 700;
	/* padding-left: 18px; */
	text-align: center;
	padding-top: 11px;
	position: relative;
	/* font-weight: bold; */
}

.hero__search__form form .hero__search__categories:after {
	position: absolute;
	right: 0;
	top: 14px;
	height: 20px;
	width: 1px;
	background: #000000;
	opacity: 0.1;
	content: "";
}

</style>