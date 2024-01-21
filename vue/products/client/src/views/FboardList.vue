<template>
  <container>
    <div id="column2">
      <div class="bbs_list_header">
        <div class="fboardName">
          <h1><b>자유 게시판</b></h1>
          <br /><br />
          <h4>회원끼리 자유롭게 소통하는 게시판입니다.</h4>
          <br />
          <hr
            style="
              margin-bottom: 30px;
              border: 0px;
              height: 20px;
              background: linear-gradient(
                to left,
                transparent,
                #7fad39,
                transparent
              );
            "
          />
        </div>
      </div>

      <div id="list_table" class="skin1">
        <br />
        <div id="fboardTable">
          <div class="tblx"></div>
          <table>
            <thead>
              <tr>
                <th scope="col" class="first num">번호</th>
                <th scope="col" class="title">제목</th>
                <th scope="col" class="author">작성자</th>
                <th scope="col" class="date">날짜</th>
                <th scope="col" class="a_count">조회</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765950&amp;page=3"
                    class="photolink"
                    >45</a
                  >
                </td>
                <td class="title">
  <router-link to="/FboardDetail">
    <a> 후라이팬 추천요 </a>
  </router-link>
  <em>4</em>
</td>
                <td class="user_function">..</td>
                <td class="regdate numbers" title="2024-01-16 15:39:43">
                  15:39:43
                </td>
                <td class="numbers">494</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765949&amp;page=3"
                    class="photolink"
                    >44</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765949&amp;page=3"
                    >양식조리사 과정 준비</a
                  >
                  <em class="best">31</em>
                </td>
                <td class="user_function">..</td>
                <td class="regdate numbers" title="2024-01-16 15:38:10">
                  15:38:10
                </td>
                <td class="numbers">1,977</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765948&amp;page=3"
                    class="photolink"
                    >43</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765948&amp;page=3"
                    >신박한 살림 아이템 하나</a
                  >
                  <em>2</em>
                </td>
                <td class="user_function">살림</td>
                <td class="regdate numbers" title="2024-01-16 15:38:05">
                  15:38:05
                </td>
                <td class="numbers">1,830</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765947&amp;page=3"
                    class="photolink"
                    >42</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765947&amp;page=3"
                    >동네 정신의학과 갑니다.</a
                  >
                  <em>10</em>
                </td>
                <td class="user_function">ㅇㅇ</td>
                <td class="regdate numbers" title="2024-01-16 15:37:32">
                  15:37:32
                </td>
                <td class="numbers">1,379</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765946&amp;page=3"
                    class="photolink"
                    >41</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765946&amp;page=3"
                    >제사상 다들 차리시나요?
                  </a>
                  <em class="best">11</em>
                </td>
                <td class="user_function">산소</td>
                <td class="regdate numbers" title="2024-01-16 15:35:06">
                  15:35:06
                </td>
                <td class="numbers">1,036</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765945&amp;page=3"
                    class="photolink"
                    >40</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765945&amp;page=3"
                    >엄마가 전화를 절대로 안걸어요
                  </a>
                  <em>10</em>
                </td>
                <td class="user_function">00</td>
                <td class="regdate numbers" title="2024-01-16 15:33:11">
                  15:33:11
                </td>
                <td class="numbers">1,470</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765944&amp;page=3"
                    class="photolink"
                    >39</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765944&amp;page=3"
                    >제가 그리 사랑받고 자랐다네요</a
                  >
                  <em>5</em>
                </td>
                <td class="user_function">..</td>
                <td class="regdate numbers" title="2024-01-16 15:31:56">
                  15:31:56
                </td>
                <td class="numbers">1,554</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765943&amp;page=3"
                    class="photolink"
                    >38</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765943&amp;page=3"
                    >사람들 만나는게 피곤해요</a
                  >
                  <em>8</em>
                </td>
                <td class="user_function">..</td>
                <td class="regdate numbers" title="2024-01-16 15:29:01">
                  15:29:01
                </td>
                <td class="numbers">1,274</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765942&amp;page=3"
                    class="photolink"
                    >37</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765942&amp;page=3"
                    >동남아 요리에 필요한 향신료 반반씩 나누어 사실 분?</a
                  >
                  <em class="best">16</em>
                </td>
                <td class="user_function">nurse</td>
                <td class="regdate numbers" title="2024-01-16 15:26:07">
                  15:26:07
                </td>
                <td class="numbers">1,269</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765941&amp;page=3"
                    class="photolink"
                    >36</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765941&amp;page=3"
                    >집주인이 전세집 실크벽지 도배하라네요</a
                  >
                  <em class="best">33</em>
                </td>
                <td class="user_function">세입자</td>
                <td class="regdate numbers" title="2024-01-16 15:25:14">
                  15:25:14
                </td>
                <td class="numbers">2,932</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765940&amp;page=3"
                    class="photolink"
                    >35</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765940&amp;page=3"
                    >오븐이 있으면 에어프라이어 살 필요 없을까요?</a
                  >
                  <em>8</em>
                </td>
                <td class="user_function">오븐과 에어..</td>
                <td class="regdate numbers" title="2024-01-16 15:23:34">
                  15:23:34
                </td>
                <td class="numbers">730</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765939&amp;page=3"
                    class="photolink"
                    >34</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765939&amp;page=3"
                    >창업을 하고 싶은데요
                  </a>
                  <em class="best">18</em>
                </td>
                <td class="user_function">1일1거짓말..</td>
                <td class="regdate numbers" title="2024-01-16 15:18:06">
                  15:18:06
                </td>
                <td class="numbers">766</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765937&amp;page=3"
                    class="photolink"
                    >33</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765937&amp;page=3"
                    >아래 자꾸 한반도에서 전쟁이 난다는 글이 눈에 거슬려서..</a
                  >
                  <em>5</em>
                </td>
                <td class="user_function">흠</td>
                <td class="regdate numbers" title="2024-01-16 15:16:22">
                  15:16:22
                </td>
                <td class="numbers">770</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765936&amp;page=3"
                    class="photolink"
                    >32</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765936&amp;page=3"
                    >난 질투같은거 전혀 안해~ 라고말하는 사람</a
                  >
                  <em class="best">22</em>
                </td>
                <td class="user_function">나사</td>
                <td class="regdate numbers" title="2024-01-16 15:15:40">
                  15:15:40
                </td>
                <td class="numbers">1,214</td>
              </tr>
              <tr>
                <td class="numbers">
                  <a
                    href="read.php?bn=15&amp;num=3765935&amp;page=3"
                    class="photolink"
                    >31</a
                  >
                </td>
                <td class="title">
                  <a href="read.php?bn=15&amp;num=3765935&amp;page=3"
                    >지긋지긋한 제사</a
                  >
                  <em class="best">16</em>
                </td>
                <td class="user_function">큰며늘</td>
                <td class="regdate numbers" title="2024-01-16 15:13:31">
                  15:13:31
                </td>
                <td class="numbers">1,718</td>
              </tr>
            </tbody>
          </table>
          <div style="text-align: right; margin: 10px">
            <!-- router-link를 사용하여 버튼 클릭 시 경로를 변경 -->
            <router-link to="/FboardWrite">
              <b-button style="background-color: #7fad39; font-color: white"
                >글 작성하기</b-button
              >
            </router-link>
          </div>
        </div>
        <br />
      </div>

      <div class="fbPageNo">
        <a href="/entiz/enti.php?bn=15&amp;page=1" class="selected">1</a>
        <a href="/entiz/enti.php?bn=15&amp;page=2">2</a>
        <a href="/entiz/enti.php?bn=15&amp;page=3">3</a>
        <a href="/entiz/enti.php?bn=15&amp;page=4">4</a>
        <a href="/entiz/enti.php?bn=15&amp;page=5">5</a>
        <a href="/entiz/enti.php?bn=15&amp;page=6">6</a>
        <a href="/entiz/enti.php?bn=15&amp;page=7">7</a>
        <a href="/entiz/enti.php?bn=15&amp;page=8">8</a>
        <a href="/entiz/enti.php?bn=15&amp;page=9">9</a>
        <a href="/entiz/enti.php?bn=15&amp;page=10">10</a>
        <a class="next" href="/entiz/enti.php?bn=15&amp;page=11">&gt;</a>

        <a
          class="end"
          href="/entiz/enti.php?bn=15&amp;page=62348"
          title="마지막"
          >&gt;&gt;</a
        >&nbsp;<a
          class="other"
          href="/entiz/enti.php?bn=35"
          target="_blank"
          title="이전 자유게시판"
          >이전 자유게시판</a
        >
      </div>
    </div>
    <!-- //list_bottom -->

    <div class="list_search">
      <form id="insearch" name="insearch" action="/entiz/enti.php" method="get">
        <fieldset>
          <legend>게시판 검색</legend>
          <div>
            <input type="hidden" name="bn" value="15" />
            <input
              type="hidden"
              id="searchType"
              name="searchType"
              value="search"
            />
            <select
              name="search1"
              id="search1"
              title="검색대상"
              class="btn1 form_select"
            >
              <option value="1">제목</option>
              <option value="2">내용</option>
              <option value="3">닉네임</option>
            </select>
            <input
              type="text"
              id="searchKey"
              name="keys"
              value=""
              size="20"
              class="form_text"
              placeholder="검색어를 입력하세요"
            />
            <input
              class="btn1"
              id="insearch_submit"
              type="submit"
              value="검색"
              title="검색하기"
            />
          </div>
          <br />
        </fieldset>
      </form>
      <div class="list_btn"></div>
    </div>
    <hr
      style="
        margin-bottom: 30px;
        border: 0px;
        height: 20px;
        background: linear-gradient(to left, transparent, #7fad39, transparent);
      "
    />
  </container>
</template>



<style scoped>
h1,
h4 {
  margin-left: 20%;
}

table {
  width: 100%;
  min-width: 70%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
}
th,
td {
  color: #444444;
  border-bottom: 1px solid #444444;
  border-left: 1px solid #444444;
  padding: 10px;
}
th:first-child,
td:first-child {
  border-left: none;
}

.skin1 {
  margin-top: 40px;
  margin-bottom: 40px;
  width: 60%; /* 너비를 화면의 60%로 설정 */
  margin: 0 auto; /* 수평 가운데 정렬 */
}

.fbPageNo,
.end,
.other,
.list_search {
  font-size: 15px;
  text-align: center;
}
</style>
