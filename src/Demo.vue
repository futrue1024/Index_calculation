<template>
  <div id="app">
    <div>
      <input type="text" v-model="searchName" />
      <button @click="search">两个字</button>
    </div>
    <div
      id="front"
    >需要费用为：排名费{{searchName*20}}元（把您的网站排到百度首页的费用），排名做上去后，如需维护，按月支付维护费（维护排名稳定的费用）为{{searchName*20*0.15}}元/月</div>
    <div>
      <input type="text" v-model="searchName1" />
      <button @click="search1">三个字</button>
    </div>
    <div
      id="front"
    >需要费用为：排名费{{searchName1*15}}元（把您的网站排到百度首页的费用），排名做上去后，如需维护，按月支付维护费（维护排名稳定的费用）为{{searchName1*15*0.15}}元/月</div>
    <div>
      <input type="text" v-model="searchName2" />
      <button @click="search2">四个字</button>
    </div>
    <div
      id="front"
    >需要费用为：排名费{{searchName2*12}}元（把您的网站排到百度首页的费用），排名做上去后，如需维护，按月支付维护费（维护排名稳定的费用）为{{searchName2*12*0.15}}元/月</div>
    <div>
      <input type="text" v-model="searchName3" />
      <button @click="search3">五个字</button>
    </div>
    <div
      id="front"
    >需要费用为：排名费{{searchName3*10}}元（把您的网站排到百度首页的费用），排名做上去后，如需维护，按月支付维护费（维护排名稳定的费用）为{{searchName3*10*0.15}}元/月</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
      searchName1: "",
      searchName2: "",
      searchName3: "",
    };
  },
  methods: {
    search() {
      return this.searchName;
    },
    search1() {
      return this.searchName1;
    },
    search2() {
      return this.searchName2;
    },
    search3() {
      return this.searchName3;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  border: 1px solid grey;
  position: relative;
}
#front {
  margin: 10px;
}
input {
  margin-right: 6px;
  margin-top: 6px;
}
button {
  position: absolute;
  margin-top: 5px;
}
</style>



