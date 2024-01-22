<template>
  <section class="RecipeBoard">
    <button class="btn_add_add" id="write"><a class="write_a" href="RecipeRegister">글작성</a></button>
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
        <div class='col-lg-4 col-md-6 col-sm-6' v-for="item in items" :key="item.RecipeID">
          <div class='thumbnail_item'>
            <a href="RecipeDetails">
              <img class="thumbnail_item__pic" :src="item.TitleImg" alt="">
              <div class='thumbnail_item__name'>
                <h6>{{ item.RecipeName }}</h6>
                <div class='thumbnail_item__price'>{{ item.userNa }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "RecipeBoard",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.showRecipe();
  },
  methods: {
    async showRecipe() {
      try {
        const response = await axios.get("http://localhost:5000/recipe");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>