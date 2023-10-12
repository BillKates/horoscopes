// 1, Vue.jsで扱うデータを用意する
const myData = {
	appName: "Horoscope Ranking", // アプリ名
	message: "今日の星座ランキング!!", // メッセージ
	horos: [
	  { name: "魚座", path: "./images/horo_12.png", rank: 1 },
	  { name: "牡羊座", path: "./images/horo_01.png", rank: 0 },
	  { name: "牡牛座", path: "./images/horo_02.png", rank: 0 },
	  { name: "双子座", path: "./images/horo_03.png", rank: 0 },
	  { name: "蟹座", path: "./images/horo_04.png", rank: 0 },
	  { name: "獅子座", path: "./images/horo_05.png", rank: 0 },
	  { name: "乙女座", path: "./images/horo_06.png", rank: 0 },
	  { name: "天秤座", path: "./images/horo_07.png", rank: 0 },
	  { name: "蠍座", path: "./images/horo_08.png", rank: 0 },
	  { name: "射手座", path: "./images/horo_09.png", rank: 0 },
	  { name: "山羊座", path: "./images/horo_10.png", rank: 0 },
	  { name: "水瓶座", path: "./images/horo_11.png", rank: 0 },
	]
  }
  
  // 2, Vue.jsの準備をする
  const app = Vue.createApp({
	data() {
	  return myData;
	},
	created() {
	  console.log("created!!");
	  this.shuffleExceptTop(); // ページが読み込まれたときに1位以外をシャッフル
	},
	methods: {
	  shuffleExceptTop() {
		// 1位以外をシャッフル
		for (let i = this.horos.length - 1; i > 1; i--) {
		  let rdm = Math.floor(Math.random() * i) + 1; // 1位以外をシャッフル
		  let tmp = this.horos[rdm];
		  this.horos[rdm] = this.horos[i];
		  this.horos[i] = tmp;
		}
		// ランキングを再計算
		this.horos.forEach((horo, index) => {
		  horo.rank = index + 1;
		});
	  },
	  shuffle() {
		console.log("shuffle!!");
		this.shuffleExceptTop(); // 1位以外をシャッフル
	  }
	},
	computed: {
	  getBest12() {
		return this.horos.concat().slice(0, 12);
	  },
	},
  });
  
  app.mount("#app"); // 3, Vue.jsを起動する
  