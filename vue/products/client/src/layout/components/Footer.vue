<template>
    <footer class="footer">
			<div class="footer__inner">
				<div class="footer__content_first">
					
					<div class="footer_content left">
						<p class="title">고객센터</p>
						<p class="tel">02-783-9006</p>
						<p class="work_time">오전 10시 ~ 오후 5시 (주말, 공휴일 제외)</p>
						<div class="footer__sns_link">
							<ul>
								<li><a href="https://www.youtube.com/channel/UC_hIgz9bSiAp0HT8_lF07vg?view_as=subscriber" target="_blank"><img alt="" src="/resources/images/Group 44.png"></a></li>
								<li><a href="http://www.bluerecipe.co.kr" target="_blank"><img alt="" src="/resources/images/Group 45.png"></a></li>
								<li id="androidIcon"><a href="https://play.google.com/store/apps/details?id=com.sample.recipebank_app" target="_blank"><img alt="" src="/resources/images/Group 46.png"></a></li>
								<li><a href="https://apps.apple.com/kr/app/%EB%A0%88%EC%8B%9C%ED%94%BC%EB%B1%85%ED%81%AC/id1546587955" target="_blank"><img alt="" src="/resources/images/Group 47.png"></a></li>
							</ul>
						</div>
					</div>
					
					<div class="footer_content right">
						<p class="title">(주)블루레시피</p>
						<div class="contentus_link">
							<ul>
								<!-- <li><a href="http://www.bluerecipe.co.kr/" target="_blank">회사소개</a></li> -->
								<li><a href="https://www.recipebank.co.kr/recipeBank/info.pdf" target="_blank">회사소개</a></li>
								<li class="hr">&nbsp;</li>
								<li><a style="cursor: pointer;" onclick="TermsofUsePopup()">이용약관</a></li>
								<li class="hr">&nbsp;</li>
								<li><a style="cursor: pointer;" onclick="PrivacyPopup()">개인정보 처리방침</a></li>
								<li class="hr">&nbsp;</li>
                                <li><a style="cursor: pointer;" onclick="RefundPopupFooter()">환불정책</a></li>
							</ul>
						</div>
						<p class="footer__content_sub_txt">
							법인명(상호) : (주)블루레시피  |  사업자등록번호 : 315-88-01684  | 벤처기업 : 제 20200301103호
							<br>특허 제 10-2210476호  |  통신판매업신고 : 2020-서울영등포-3611  |   개인정보보호책임자 : 송신애
							<br>주소 : 서울 강남구 테헤란로 305, 한국기술센터 21층 |  대표이사 :  송신애
							<br>제휴/협력 문의 : aidkr@aidkr.com  |  채용문의 :  job@aidkr.com
						</p>
					</div>
					
					<div class="clear__both"></div>
				</div>

			</div>
		</footer>
</template>

<style scoped>
footer{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* font-size: 100%; */
    /* font: inherit; */
    /* vertical-align: baseline; */
    /* font-size: 1rem; */
    /* font-weight: 400; */
    /* line-height: 1.5; */
    color: #212529;
    text-align: left;
    background-color: #dcdda0;
}

footer > .footer__inner {
    width: 992px;
    padding: 68px 0;
    margin: 0 auto;
}
</style>