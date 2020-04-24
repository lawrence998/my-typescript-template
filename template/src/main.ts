{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App.vue'
import Component from 'vue-class-component';
{{#elementUI}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
{{/elementUI}}
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

{{#mockjs}}
if (process.env.NODE_ENV === 'development') {
  require ('./assets/mock')
}
{{/mockjs}}




{{#elementUI}}
Vue.use(ElementUI);
{{/elementUI}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
})
