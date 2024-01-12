<template>
  <div>
    <div class="conteinal">
      <div class="body">
        <div id="find_id">
          <div class="find_text">
            <h3>아이디 찾기</h3>
          </div>
          <div class="checkout__input">
            <p>이름<span>*</span></p>
            <input type="text" class="id_find_name" />
          </div>
          <div class="checkout__input">
            <p>전화번호<span>*</span></p>
            <input type="text" class="id_find_phone" />
          </div>
          <button type="button" class="id_find_btn" onclick="idFindButton()">
            아이디 찾기
          </button>
        </div>
        <hr />
        <div id="find_pw"></div>
        <div class="find_text">
          <h3>비밀번호 찾기</h3>
        </div>
        <div class="checkout__input">
          <p>아이디<span>*</span></p>
          <input type="text" class="pw_find_id" />
        </div>
        <div class="checkout__input">
          <p>전화번호<span>*</span></p>
          <input type="text" class="pw_find_phone" />
        </div>
        <button type="button" class="pw_find_btn" onclick="pwFindButton()">비밀번호 찾기</button>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.body {
  margin: 0 0;
  padding: 10% 10%;
}

.id_find_name, .id_find_phone, .pw_find_id, .pw_find_phone {
  height: 50px;
  width: 400px;
  border: solid 1px;
  border-radius: 10px;
  margin-bottom: 5px;
  color: rgb(0, 0, 0);
  padding: 5px;
}

#find_id{
    margin-bottom: 40px;
}

.id_find_btn, .pw_find_btn{
    height: 50px;
    padding: 5px 5px;
    margin-left: 5px ;
    border: solid 1px;
    border-radius: 10px;
    color:black;
    margin-bottom: 5px;
    
}

.id_find_btn, .pw_find_btn{
    margin-top: 15px;
    margin-left: 0px;
}
</style>