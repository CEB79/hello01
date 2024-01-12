<template>
  <b-container rounded fluid class="p-4 bg-ivory">

     <div id=boardName>
      <h1>주방 꿀팁</h1>
      <h4>주방에서 유용한 팁을 공유합니다.</h4>
    </div>

    <div margin="5px">
      <table
        id="tipMenu"
        vertical-align="center"
        border="3"
        bordercolor="grey"
        height="30"
        align="left"
      >
        <td align="center">꿀팁 종류</td>
        <td align="center"><a href="#">전체</a></td>
        <td align="center"><a href="#">손질법</a></td>
        <td align="center"><a href="#">보관법</a></td>
        <td align="center"><a href="#">요리정보</a></td>
        <td align="center"><a href="#">기타</a></td>
      </table>
    </div>
    <br /><br /><br />

    <div>
        <!-- img-src="@/img/kitchenTips/egg/5.png" -->
      <div>
        <b-card-group deck class="tipCard">
        <b-card
          bg-variant="primary"
          text-variant="white"
          img-alt="Image"
          img-src="./../../public/common/img/kitchenTips/egg/6.jpg"
          img-height="200"
          img-width="200"
          header="The house"
          class="text-center position-relative"
        >
          <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </b-card-text>
          <b-button variant="primary" class="paragraph stretched-link"
            >Click here</b-button
          >
        </b-card>



          <b-card   
            title="달걀 쉽게 까는 법"
            img-src="https://recipe1.ezmember.co.kr/cache/recipe/2019/08/14/1e6b5fb08ef8dfca4cb76b5cdc25246e1.jpg"
            img-alt="Image1"
            img-top
          >
            <b-card-text>
              숟가락만 준비하세요!
            </b-card-text>
            <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>

          <b-card
            title="Title"
            img-src=""
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
            <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>

          <b-card
            title="Title"
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </b-card-text>
            <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>
        </b-card-group>
      </div>

      <!-- 사진썸네일 -->
     
    </div>
  </b-container>
</template>

<style scoped>
/* .blog__item {
margin-bottom: 60px;
float: left;
padding: 10px;
margin: 10px;
} */
/* .card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
  } */




.pics {
  width: 200px;
  margin: 10px;
  min-width: 100px;
}

.container.b-img {
  /* min-width: 50px; */
  /* width: 200px; */
}
</style>
