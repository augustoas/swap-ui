import { ref, onMounted, onUnmounted } from "vue";

export default function useResponsiveMixin() {
  const isMobile = ref(window.innerWidth < 840);

  const checkIsMobile = () => {
    isMobile.value = window.innerWidth < 840;
  };

  onMounted(() => {
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkIsMobile);
  });

  return {
    isMobile
  };
}