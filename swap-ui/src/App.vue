<template>
  <v-app id="app">
    <div class="app-container">
      <TopBar />
      <v-main class="main-class">
        <router-view />
      </v-main>
      <!-- <BottomBar /> -->
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import TopBar from "./components/Navigation/TopBar/TopBar.vue";
//import BottomBar from "./components/Navigation/BottomBar/BottomBar.vue";

</script>

<style lang="scss">
@import "styles.scss";

.main-class {
  margin-top: 110px; /* height of the TopBar */
  margin-bottom: 60px; /* height of the BottomBar */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;

  // Hide scrollbar if it's not needed
  &::-webkit-scrollbar {
    display: none;
  }
}

.app-container {
  background-color: rebeccapurple;
}
</style>
