<template>
  <div class="mt-8">
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Data and Analytics
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex items-center">
          <Laravel class="h-5 w-5"></Laravel>
        </li>
      </ul>
    </div>
    <div class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Software Engineering
      </h2>

      <ul class="flex flex-wrap gap-4 items-center">
        <li class="flex items-center">
          <Bootstrap class="h-5 w-5"></Bootstrap>
        </li>
        <li class="flex items-center">
          <TailwindCss class="h-5 w-5"></TailwindCss>
        </li>
        <li class="flex items-center">
          <Javascript class="h-5 w-5"></Javascript>
        </li>
        <li class="flex items-center">
          <Node class="h-5 w-5"></Node>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Javascript from "../assets/devicon/javascript.svg?inline";
  import Html from "../assets/devicon/html.svg?inline";
  import Css from "../assets/devicon/css.svg?inline";
  import Vuejs from "../assets/devicon/vuejs.svg?inline";
  import TailwindCss from "../assets/devicon/tailwindcss.svg?inline";
  import Nuxt from "../assets/devicon/nuxt.svg?inline";
  import Bootstrap from "../assets/devicon/bootstrap.svg?inline";
  import Laravel from "../assets/devicon/laravel.svg?inline";
  import Node from "../assets/devicon/node.svg?inline";
  export default {
    components: {
      Javascript,
      Html,
      Css,
      Bootstrap,
      Vuejs,
      TailwindCss,
      Nuxt,
      Laravel,
      Node,
    },
  };
</script>
