console.log(window.Vue);
const Vue = window.Vue;
Vue.config.productionTip = false;
import Demo from "./Demo.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Demo),
}).$mount("#app");
