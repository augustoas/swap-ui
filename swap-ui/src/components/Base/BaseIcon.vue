<template>
  <div class="icon-wrapper">
    <svg :width="props.width" :height="props.height" :viewBox="props.viewBox" fill="none">
      <path :d="icon.path" :fill="getIconFilled()" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { SvgIcon } from "../../types/global.types";

  export interface Props {
    icon: SvgIcon,
    width?: number,
    height?: string | number,
    viewBox?: string,
    fill?: boolean,
    color?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    width: 18,
    height: 18,
    fill: false,
    color: "var(--base-dark-blue)",
    viewBox: "0 0 18 18"
  })

  const getIconFilled = () => {
    return props.fill ? props.color : "var(--navbar-icon-grey)";
  };


</script>

<style scoped>
.icon-wrapper {
  display: inline-block;
  flex-shrink: 0;
}
</style>
