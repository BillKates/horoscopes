console.log("main.js!!");

// 1, Vue.jsで扱うデータを用意する
const myData = {
	appName: "Horoscope Ranking",// アプリ名
	message: "今日の星座ランキング!!",// メッセージ
	horos: [// 星座データ
		{name: "牡羊座", path:"./images/horo_01.png", rank:0},
		{name: "牡牛座", path:"./images/horo_02.png", rank:0},
		{name: "双子座", path:"./images/horo_03.png", rank:0},
		{name: "蟹座", path:"./images/horo_04.png", rank:0},
		{name: "獅子座", path:"./images/horo_05.png", rank:0},
		{name: "乙女座", path:"./images/horo_06.png", rank:0},
		{name: "天秤座", path:"./images/horo_07.png", rank:0},
		{name: "蠍座", path:"./images/horo_08.png", rank:0},
		{name: "射手座", path:"./images/horo_09.png", rank:0},
		{name: "山羊座", path:"./images/horo_10.png", rank:0},
		{name: "水瓶座", path:"./images/horo_11.png", rank:0},
		{name: "魚座", path:"./images/horo_12.png", rank:0}
	]
}

// 2, Vue.jsの準備をする
const app = Vue.createApp({
	data(){
		return myData;// 扱うデータを指定する
	},
	created(){
		console.log("created!!");// Vue.jsの初期化
		this.shuffle();// シャッフル
	},
	methods:{
		shuffle(){// 星座を判定する処理
			console.log("shuffle!!");
			// シャッフル
			for(let i=this.horos.length-1; 0<=i; i--){
				for(let j=0; j<i; j++){
					let rdm = Math.floor(Math.random()*i);
					let tmp = this.horos[rdm];
					this.horos[rdm] = this.horos[i];
					this.horos[i] = tmp;
				}
			}
			// ランキング
			for(let i=0; i<this.horos.length; i++){
				this.horos[i].rank = i + 1;
			}
		}
	},
	computed:{
		getBest3(){
			return this.horos.concat().slice(0, 3); 
		},
		getWorst3(){
			return this.horos.concat().reverse().slice(0, 3);
		}
	}
});
app.mount("#app");// 3, Vue.jsを起動する