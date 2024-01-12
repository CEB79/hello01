<template>
  <section class="RecipeBoard">
    <table class="Board_table">
      <tbody class="Board_tbody">
      <tr class="Board_tr">
        <th>
          <span class="th_span">분류</span>
          <span class="th_span">재료</span>
        </th>
        <td>
          <div class="cateL">
            <div class="cate_list">
              <a class="cate_list_text" href="#">전체</a>
              <a class="cate_list_text" href="#">국/찌개</a>
              <a class="cate_list_text" href="#">튀김/부침개</a>
              <a class="cate_list_text" href="#">면</a>
              <a class="cate_list_text" href="#">볶음</a>
              <a class="cate_list_text" href="#">간식/분식</a>
              <a class="cate_list_text" href="#">구이</a>
            </div>
            <div class="cate_list">
              <a class="cate_list_text" href="#">전체</a>
              <a class="cate_list_text" href="#">소고기</a>
              <a class="cate_list_text" href="#">돼지고기</a>
              <a class="cate_list_text" href="#">닭고기</a>
              <a class="cate_list_text" href="#">달걀/유제품</a>
              <a class="cate_list_text" href="#">해산물</a>
              <a class="cate_list_text" href="#">채소</a>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 썸네일 사진 넣기 -->
    <div class="RecipeThumbnail">
      <div class="row" id="thumbnail">

        <div class='col-lg-4 col-md-6 col-sm-6'>
          <div class='thumbnail_item'>
            <a href="RecipeDetails">
              <img class="thumbnail_item__pic" src="../../public/common/img/EB/7-1.jpg">
              <div class='thumbnail_item__name'>
                <h6>글제목</h6>
                <div class='thumbnail_item__price'>글쓴이</div>
              </div>
            </a>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-6'>
          <div class='thumbnail_item'>
            <img class="thumbnail_item__pic" src="../../public/common/img/EB/7-1.jpg">
            <div class='thumbnail_item__name'>
              <h6>글제목</h6>
              <div class='thumbnail_item__price'>글쓴이</div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-6'>
          <div class='thumbnail_item'>
            <img class="thumbnail_item__pic" src="../../public/common/img/EB/7-1.jpg">
            <div class='thumbnail_item__name'>
              <h6>글제목</h6>
              <div class='thumbnail_item__price'>글쓴이</div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-6'>
          <div class='thumbnail_item'>
            <img class="thumbnail_item__pic" src="../../public/common/img/EB/7-1.jpg">
            <div class='thumbnail_item__name'>
              <h6>글제목</h6>
              <div class='thumbnail_item__price'>글쓴이</div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-6'>
          <div class='thumbnail_item'>
            <img class="thumbnail_item__pic" src="../../public/common/img/EB/7-1.jpg">
            <div class='thumbnail_item__name'>
              <h6>글제목</h6>
              <div class='thumbnail_item__price'>글쓴이</div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-6'>
          <div class='thumbnail_item'>
            <img class="thumbnail_item__pic" src="../../public/common/img/EB/7-1.jpg">
            <div class='thumbnail_item__name'>
              <h6>글제목</h6>
              <div class='thumbnail_item__price'>글쓴이</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup>
</script>