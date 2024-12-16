<template>
  <!-- Section 1 -->
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-8xl">
      <TheHeader v-if="!isHomePage" />
      <Nuxt />
      <TheFooter />
    </div>
  </section>
</template>

<script>
  import TheHeader from "../components/TheHeader.vue";
  import TheFooter from "../components/TheFooter.vue";

  export default {
    components: {
      TheHeader,
      TheFooter,
    },
    computed: {
      isHomePage() {
        return this.$route.path === "/";
      },
    },
  };
</script>

<style></style>
