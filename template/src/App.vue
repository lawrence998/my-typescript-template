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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
