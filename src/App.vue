<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarLinks from "@/components/NavBarLinks.vue";
import CartList from "./components/CartList.vue";
import { useCart } from "./composables/useCart";
import NavBar from "@/components/NavBar.vue";
// import DetailView from "./views/DetailView.vue"
export default defineComponent({
  name: "AppComponent",
  components: {
    NavBarLinks,
    NavBar,
    CartList,
  },
  setup() {
    return {};
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>