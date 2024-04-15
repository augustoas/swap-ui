<template>
  <div>
    <!-- Desktop version -->
    <div v-if="!isMobile">
      <div>404 NOT FOUND</div>
    </div>
    <!-- Mobile version -->
    <div v-if="isMobile">
      <div>404 NOT FOUND</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import ResponsiveMixin from "../mixins/responsiveMixin";
  const { isMobile } = ResponsiveMixin();
</script>

<style lang="scss">
/* Common styles for both versions */

/* MOBILE */
</style>
