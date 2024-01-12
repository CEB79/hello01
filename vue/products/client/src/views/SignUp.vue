<template>
  <div>
    <div class="conteinal">
      <div class="body">
        <h2 class="checkout__title">회원가입</h2>
        <br />
        <div class="row">
          <div class="col-lg-7">
            <div class="checkout__input" id="sign_up_name">
              <p>이름<span>*</span></p>
              <input name="username" type="text" id="signUserName" /><br />
            </div>
          </div>

          <!-- <div class="sigh_in_add">
                                <input type="text" id="sample6_postcode" placeholder="우편번호">
                                <input type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기"><br>
                                <input type="text" id="sample6_address" placeholder="주소"><br>
                                <input type="text" id="sample6_detailAddress" placeholder="상세주소">
                                <input type="text" id="sample6_extraAddress" placeholder="참고항목">
                            </div> -->
          <div>
            <div class="checkout__input" id="sign_up_id">
              <p>아이디<span>*</span></p>
              <input name="id" type="text" class="testid" />
              <button type="button" class="testbtn" onclick="userIdMatch()">
                중복 확인
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="checkout__input">
              <p>비밀번호<span>*</span></p>
              <input name="pw" type="password" class="signup_pw" />
            </div>
            <div class="checkout__input">
              <p>비밀번호 확인<span>*</span></p>
              <input name="pw_check" type="password" class="signup_pw_check" />
            </div>
          </div>
          <div>
            <div class="checkout__input">
              <p>전화번호<span>*</span></p>
              <input
                type="text"
                class="input_plus PhonData"
                name="phone"
                placeholder="예) 010-0000-0000"
              />
            </div>
          </div>
          <div>
            <div class="checkout__input">
              <p>Email<span>*</span></p>
              <input
                type="text"
                class="input_plus EmailData"
                name="email"
                placeholder="예)email@email.com"
              />
            </div>
          </div>
          <div>
            <button type="button" id="sign_up_btn" @click="signUpButton">
              회 원 가 입
            </button>
          </div>
        </div>
        <!-- <div class="checkout__input">
                            <p>주소<span>*</span></p>
                            <input type="text" name="zipcode" placeholder="우편번호" id="zip_code" disabled>
                            <button type="button" id="btn_zip_code" onclick="zipCodeSearch()">우편번호 검색</button><br>
                            <input type="text" name="adress" placeholder="주소" class="checkout__input_add" id="adress_input" disabled><br>
                            <input type="text" name="adress_Details" placeholder="상세주소" class="checkout__input_add" id="adress_input_details">
                        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
    
        signUpButton(value) {
        let pw = document.getElementsByClassName("signup_pw");
        let pw_check = document.getElementsByClassName("signup_pw_check");
        
        if (pw[0].value == pw_check[0].value && pw[0].value.length >= 8) {
            this.phonCheck()
        } else if (pw[0].value.length <= 8 || pw_check[0].value.length <= 8) {
        alert("8자리 이상 입력하세요");
        } else if (pw[0].value !== pw_check[0].value) {
        alert("비밀번호가 일치하지 않습니다.");
    }   return value.length >=4 && value.length <= 12;
  },
        phonCheck(){
            let Pdata= document.getElementsByClassName("PhonData");
            // console.log(Pdata[0])
            // return/^[0-9][0-9]*$/.
        if(Pdata[0].value.length == 13 || Pdata[0].value.length == 12){
            this.emailCheck()
            
        }
    },
        emailCheck(){
            let Edata = document.getElementsByClassName('EmailData');
            console.log(Edata[0].value)
            alert("가입 완료");
            
            

        }
    
    

}
}
</script>
<style>
.body {
  margin: 0 0;
  padding: 10% 10%;
}

.checkout__input_add {
  margin-bottom: 5px;
  height: 50px;
  width: 550px;
  border: solid 1px;
  border-radius: 10px;
  color: rgb(0, 0, 0);
}

#signUserName,
.testid,
.signup_pw,
.signup_pw_check,
#zip_code,
.input_plus {
  height: 50px;
  width: 400px;
  border: solid 1px;
  border-radius: 10px;
  margin-bottom: 5px;
  color: rgb(0, 0, 0);
  padding: 5px;
}
.checkout__input {
  margin-bottom: 5px;
  font-size: 15pt;
}

#zip_code {
  width: 400px;
}

#btn_zip_code,
.testbtn,
#sign_up_btn {
  height: 50px;
  padding: 5px 5px;
  margin-left: 5px;
  border: solid 1px;
  border-radius: 10px;
  color: black;
  margin-bottom: 5px;
}

#sign_up_btn {
  margin-top: 15px;
  margin-left: 0px;
}
input:disabled {
  background: #e2e1e1;
}
</style>