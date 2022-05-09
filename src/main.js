import Vue from 'vue';
import App from './App.vue';

// Arquivos Template
import HeaderItem from './components/template/TheHeader.vue';
import FooterItem from './components/template/TheFooter.vue';

// Arquivos CSS
import CSS from '@/assets/sass/variables.scss';
import Animations from './assets/sass/animations.scss';

Vue.use(CSS);
Vue.use(Animations);

// Arquivos Bootstrap
import { LayoutPlugin, IconsPlugin, NavPlugin, ButtonPlugin, CardPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Arquivos Bootstrap
Vue.use(LayoutPlugin);
Vue.use(IconsPlugin);
Vue.use(NavPlugin);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);

// Arquivos Template
Vue.component(HeaderItem);
Vue.component(FooterItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
