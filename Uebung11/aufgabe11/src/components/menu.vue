<template>
  <div class="blob-menu">
    <ul class="list">
      <li
          v-for="(item, index) in items"
          :key="index"
          :ref="`nav-item-${index}`"
          @click="animateBlob(index)"
      >
        <a>
          {{ item }}
        </a>
        <span class="active" ref="nav-blob" v-if="index === 0"></span>
      </li>
    </ul>
  </div>
  <a>Quelle: https://github.com/lookacat/vue-blob-menu-animation/blob/main/src/components/BlobMenu.vue</a>
</template>

<script>
export default {
  name: "BlobMenu",
  data: () => {
    return {
      items: ["ItemA", "ItemB", "ItemC", "ItemD"],
      active: 2,
      animationTimeout: null,
    };
  },
  mounted() {
    this.animateBlob(this.active, 0);
  },
  methods: {
    isActive(index) {
      return index == this.active;
    },
    animateBlob(index, duration = 0.2) {
      clearTimeout(this.animationTimeout);
      const currentElement = this.getNavigationElement(0);
      const targetElement = this.getNavigationElement(index);
      const distance = this.getDistanceBetweenElements(
          currentElement,
          targetElement
      );
      const style = this.$refs["nav-blob"].style;
      style.setProperty("transition-duration", `${duration}s`);
      style.setProperty("transform", `translateY(${distance}px)`);
    },
    getNavigationElement(index) {
      return this.$refs[`nav-item-${index}`];
    },
    getPositionAtCenter(element) {
      const { top, left, width, height } = element.getBoundingClientRect();
      return {
        x: left + width / 2,
        y: top + height / 2,
      };
    },
    getDistanceBetweenElements(a, b) {
      const aPosition = this.getPositionAtCenter(a);
      const bPosition = this.getPositionAtCenter(b);
      return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    },
  },
};
</script>