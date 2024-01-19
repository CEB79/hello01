import axios from "axios";

export default (await import('vue')).defineComponent({
name: "Mypage",
data() {
return {
items: [],
};
},

created() {
this.showMypage();
},

methods: {
// mypage 회원번호, 이름, 전화번호
async showMypage() {
console.log(items);
try {
const response = await axios.post("http://localhost:5000/showmypage", { UserNo: 2 }); //나중에 로컬스토리지 에서 받은 것으로 변경하기
this.items = response.data;
} catch (err) {
console.log(err);
}
},
async showMypage_fboard_count() {
try {
const response = await axios.post("http://localhost:5000/mypage_fcount", { UserNo: 2 }); //나중에 로컬스토리지 에서 받은 것으로 변경하기
this.items = response.data;
} catch (err) {
console.log(err);
}
},
}
});
