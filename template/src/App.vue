<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
{{#if_eq vuePropertyDecorator "vue-class-component"}}
import Component from "vue-class-component";
{{/if_eq}}
{{#if_eq vuePropertyDecorator "vue-property-decorator"}}
import {Component} from "vue-property-decorator";
{{/if_eq}}
{{#unless router}}
import HelloWorld from './components/HelloWorld.vue'
{{/unless}}

@Component({
  name: 'app'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
})
export default class App extends Vue {}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
}
html {
  height: 100%;
}
body {
  height: 100%;
  font-size: 14px;
  color: #333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
