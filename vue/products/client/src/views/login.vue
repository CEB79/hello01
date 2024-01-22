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
                    <b-form-input id="id" placeholder=" 아이디를 입력해 주세요" v-model="userId"/>
                    <label for="pass"><i class="bi bi-lock" />PW</label>
                    <b-form-input type="password" id="pass" placeholder=" 비밀번호를 입력해 주세요" v-model="userPw"/>
                </div>
                <div class="checkForm" >
                    <input type="checkbox" name="IdSave" class="IdSave"> ID 저장
                </div>
                <div class="FindForm">
                    <a href="IdPw" class="Find">ID/PW 찾기</a>
                    
                </div>
                <div class="btnwrap">
                    <button class="loginbtn" @click="checkLogin(userPw)">로그인</button><br>
                    <a href="SignChack"><button class="loginbtn">회원가입</button></a>
                </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default{
    name: "checkUser",
    
    data(){
        return{
        userId: "",
        userPw : ""
        };
    },


    methods: {
    // Get All Products
    async checkLogin(userPw) {
        
        if(this.userId == '') {
            alert('아이디를 입력해주세요.');
            return;
        }if(this.userPw == ''){
            alert('비밀번호를 입력해주세요');
            return;
        }
        try {
            await axios.post("http://localhost:5000/login", {
                UserId: this.userId,
                UserPassword: this.userPw
            }).then(function(res){
                console.log(res.data[0]);
                if(res.data[0] == undefined){
                    alert("패스워드가 일치하지 않습니다.")
                }if(res.data[0].UserPassword == userPw){
                    const idKey = "UserNo"
                    localStorage.setItem(idKey,res.data[0].UserNo);
                    alert("로그인")
                }
            }).catch(function(res){
                console.log(res);
            });
        } catch (err) {
            console.log(err);
        }
        },  
       
       
        // Get All Products
        async showUser() {
        try {
            const response = await axios.get("http://localhost:5000/user");
            this.items = response.data;
        } catch (err) {
            console.log(err);
        }
        },
        }
    // methods : {
    //     login : function(){
    //         if(this.user.id == '') {
    //             alert('아이디를 입력해주세요.');
    //             return;
    //         }
    //         if(this.user.password){
    //             alert('비밀번호를 입력해주세요');
    //             return;
    //         }
    //         .post('/api/login', {user:this.user}.then((response) =>{
    //             if (response.data.success == true) {
    //                     alert(response.data.message);
    //                     this.$router.push('/list');
    //                 } else {
    //                     alert(response.data.message);
    //                 }
    //         })) 
    //     },

    




}



</script>
<style>
.body{
    margin: 0 0;
    padding:  10% 30%;
    
    
}
.LoginHead{
    margin-bottom: 20px;
    text-align: center;
    font-size: 45px;
}
.loginform{
    margin: 5px 0;
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
    color: #737373;
}
.FindForm:default{
    color: #737373;
}

.loginbtn { 
    height: 50px;
    width: 90%;
    border: solid 1px black;
    border-radius: 20px;
    background-color: rgb(248, 241, 233);
    color: #000;
    font-size: 1rem;
    margin-top: 5px;
    }

.btnwrap{
    width: 90%;
    margin: 40px auto;
}

</style>