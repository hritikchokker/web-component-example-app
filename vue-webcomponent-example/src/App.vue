<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <popup-lib
    onClick="(e) => log('button us clicked',e)"
    message="hello web component from vuejs"
  />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import element from "@hritik-chokker-webcomponent/element/elements";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    // if (document) {
    //   let script = document.createElement("script");
    //   script.async = true;
    //   script.src = element;
    //   script.type= 'text/javascript';
    //   script['Content-Type']='application/javascript';
    //   document.head.appendChild(script);
    //   console.log(element,'eee');
    // }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
