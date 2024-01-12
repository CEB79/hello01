<template>
  <!-- <Subpage :pagetit="'자유 소통 게시판'"> -->

  <div>
    <div id=boardName>
      <h1>자유 게시판</h1>
      <h4>회원끼리 자유롭게 소통하는 게시판입니다.</h4>
    </div>
    <div>
      <b-form-group
        id="title"
        placeholder="제목을 입력하세요"
        label="제목"
        label-for="titleName"
      >
        <b-form-input id="inputTitle" v-model="name" :state="state" trim>
        </b-form-input>
      </b-form-group>
      <b-form-group>
     
      </b-form-group>

      <b-form-group id="content" description="" label="내용" label-for=" ">
        <b-form-textarea
          id="textarea-rows"
          v-model="text"
          rows="10"
          placeholder="내용을 입력하세요"
        >
        </b-form-textarea>
        
      </b-form-group>
      <div>
        <b-button class="btn1" type="submit" size="sm" variant="outline-primary"
          >확인</b-button>
        <b-button class="btn1" type="reset" size="sm" variant="outline-secondary"
          >취소</b-button>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </Subpage> -->
</template>

<script>
// import Subpage from "@/layout/components/Subpage.vue";
// export default {
// components: { Subpage },
// data(){
//     return{
//       form:{
//         bookname:"",
//         companyname:"",
//         class:"",
//         name:"",
//         phonenum:'',
//         email:'',
//         memo:'',
//         checkedtype:[]
//       },
//     }
//   },
//   methods:{
//     ClassCall(event){
//         event.preventDefault()
//         alert(JSON.stringify(this.form))
//         this.$nextTick(() => {
//             this.form.bookname = ''
//             this.form.companyname = ''
//             this.form.class = ''
//             this.form.name = ''
//             this.form.phonenum = ''
//             this.form.email = ''
//             this.form.memo = ''
//             this.form.checkedtype = []
//         })
// 	},
//   }
// };
</script>

<style>
.boardName{
align-content: center;
}



</style>
