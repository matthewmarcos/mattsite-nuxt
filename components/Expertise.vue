<template>
  <div class="mt-8">
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Data and Analytics
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex items-center">
          <Bigquery class="h-5 w-5"></Bigquery>
        </li>
        <li class="flex items-center">
          <ApacheSpark class="h-5 w-5"></ApacheSpark>
        </li>
        <li class="flex items-center">
          <Python class="h-5 w-5"></Python>
        </li>
        <li class="flex items-center">
          <Postgres class="h-5 w-5"></Postgres>
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
        <li class="flex items-center">
          <Html class="h-5 w-5"></Html>
        </li>
        <li class="flex items-center">
          <Css class="h-5 w-5"></Css>
        </li>
        <li class="flex items-center">
          <Vuejs class="h-5 w-5"></Vuejs>
        </li>
        <li class="flex items-center">
          <Nuxt class="h-5 w-5"></Nuxt>
        </li>
      </ul>
    </div>
    <div class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Platform and Tools
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li class="flex items-center">
          <Docker class="h-5 w-5"></Docker>
        </li>
        <li class="flex items-center">
          <Helm class="h-5 w-5"></Helm>
        </li>
        <li class="flex items-center">
          <Kubernetes class="h-5 w-5"></Kubernetes>
        </li>
        <li class="flex items-center">
          <CloudFunctions class="h-5 w-5"></CloudFunctions>
        </li>
        <li class="flex items-center">
          <Terraform class="h-5 w-5"></Terraform>
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
  import Bigquery from "../assets/tech_logos/bigquery.svg?inline";
  import Node from "../assets/devicon/node.svg?inline";
  import ApacheSpark from "../assets/tech_logos/apache-spark.svg?inline";
  import Python from "../assets/tech_logos/python.svg?inline";
  import Postgres from "../assets/tech_logos/postgres.svg?inline";
  import Docker from "../assets/tech_logos/docker.svg?inline";
  import Helm from "../assets/tech_logos/helm.svg?inline";
  import Kubernetes from "../assets/tech_logos/kubernetes.svg?inline";
  import CloudFunctions from "../assets/tech_logos/google-cloud-functions.svg?inline";
  import Terraform from "../assets/tech_logos/terraform.svg?inline";

  export default {
    components: {
      Javascript,
      Html,
      Css,
      Bootstrap,
      Vuejs,
      TailwindCss,
      Nuxt,
      Bigquery,
      Node,
      ApacheSpark,
      Python,
      Postgres,
      Docker,
      Helm,
      Kubernetes,
      CloudFunctions,
      Terraform,
    },
  };
</script>
