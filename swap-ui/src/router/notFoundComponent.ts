<template>
  <div>
    <!-- Desktop version -->
    <div v-if="!isMobile.value">
      <div>404 NOT FOUND</div>
    </div>
    <!-- Mobile version -->
    <div v-if="isMobile.value">
      <div>404 NOT FOUND</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ResponsiveMixin from "@/mixins/responsiveMixin";

export default defineComponent({
  setup() {
    // Assuming isMobile is defined in the ResponsiveMixin
    const { isMobile } = ResponsiveMixin();

    return {
      isMobile
    };
  }
});
</script>

<style lang="scss">
/* Common styles for both versions */

/* MOBILE */
</style>
