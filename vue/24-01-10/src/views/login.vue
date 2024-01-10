<template>
    <div> 
        <div class="conteinal">
            <div class="body">
                <div class="LoginHead">
                <H2>WELCOME <BR/>
                LOGIN</H2>
                </div>
                <div class="loginform">
                    <label for="id"><i class="bi bi-file-person" />ID</label>
                    <b-form-input id="id" placeholder="아이디를 입력해 주세요" />
                    <label for="pass"><i class="bi bi-lock" />PW</label>
                    <b-form-input type="password" id="pass" placeholder="비밀번호를 입력해 주세요" />
                </div>
                <div class="checkForm" >
                    <input type="checkbox" name="IdSave" class="IdSave"> ID 저장
                </div>
                <div class="FindForm">
                    <a href="#" cass="Find">ID/PW 찾기</a>
                </div>
                <div class="btnwrap">
                    <b-button variant="login">로그인</b-button>
                    <a href="#"><b-button variant="join">회원가입</b-button></a>
                </div>
        </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
.body{
    margin: 20% 0;
    padding:  20% 30%;
    border: solid 1px;
    
}
.LoginHead{
    margin-bottom: 50px;
    text-align: center;
    font-size: 50px;
}
.IdSave{
    flex: 1;
    box-sizing: border-box;
}
.Find{
    flex: 1;
    box-sizing: border-box;
}
.checkForm{
    width: 50%;
    float: left;
}
.FindForm{
    float: right;
    text-align: right;
    width: 50%;
}
</style>