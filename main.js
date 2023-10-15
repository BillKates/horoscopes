// main.js
const myData = {
  appName: "Horoscope Ranking",
  message: "今日の星座ランキング!!",
  horos: [
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
    { name: "魚座", path: "./images/horo_12.png", rank: 0 }
  ],
  selectedHoroscope: "", // ユーザーが選択した星座
};

const app = Vue.createApp({
  data() {
    return myData;
  },
  methods: {
    shuffle() {
      for (let i = this.horos.length - 1; i > 0; i--) {
        let rdm = Math.floor(Math.random() * (i + 1));
        let tmp = this.horos[rdm];
        this.horos[rdm] = this.horos[i];
        this.horos[i] = tmp;
      }
      this.horos.forEach((horo, index) => {
        horo.rank = index + 1;
      });
    },
    setSelectedHoroscope() {
      // ユーザーが選択した星座を1位にする処理
      const selectedHoro = this.horos.find(horo => horo.name === this.selectedHoroscope);
      if (selectedHoro) {
        this.horos = this.horos.filter(horo => horo !== selectedHoro);
        this.horos.unshift(selectedHoro);
        this.horos.forEach((horo, index) => {
          horo.rank = index + 1;
        });
      }
    }
  },
  computed: {
    getBest12() {
      return this.horos.slice(0, 12);
    },
  },
});

app.mount("#app");
