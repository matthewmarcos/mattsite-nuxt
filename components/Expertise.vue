<template>
  <div class="mt-8">
    <div class="mt-4 opacity-40">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize line-through">
        Data and Analytics
      </h2>
      <div class="relative inline-block mb-6">
        <ul class="flex flex-wrap gap-4">
          <li class="flex items-center">
            <Bigquery class="h-5 w-5"></Bigquery>
          </li>
          <li class="flex items-center">
            <Python class="h-5 w-5"></Python>
          </li>
          <li class="flex items-center">
            <Snowflake class="h-5 w-5"></Snowflake>
          </li>
          <li class="flex items-center">
            <Airflow class="h-5 w-5"></Airflow>
          </li>
          <li class="flex items-center">
            <Postgres class="h-5 w-5"></Postgres>
          </li>
        </ul>
        <span
          aria-hidden="true"
          class="absolute inset-x-0 top-1/2 h-px bg-gray-600 dark:bg-blue-200"
        ></span>
      </div>
    </div>

    <div class="mt-2 opacity-40">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize line-through">
        Platforms and Tools
      </h2>
      <div class="relative inline-block">
        <ul class="flex flex-wrap gap-4 items-center">
          <li class="flex items-center">
            <Terraform class="h-5 w-5"></Terraform>
          </li>
          <li class="flex items-center">
            <Kubernetes class="h-5 w-5"></Kubernetes>
          </li>
          <li class="flex items-center">
            <Docker class="h-5 w-5"></Docker>
          </li>
          <li class="flex items-center">
            <Gcp class="h-5 w-5"></Gcp>
          </li>
          <li class="flex items-center">
            <Helm class="h-5 w-5"></Helm>
          </li>
        </ul>
        <span
          aria-hidden="true"
          class="absolute inset-x-0 top-1/2 h-px bg-gray-600 dark:bg-blue-200"
        ></span>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200">Current Stack</h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li class="flex items-center">
          <Claude class="h-8 w-8"></Claude>
        </li>
        <li class="flex items-center">
          <img :src="openai" alt="Codex" class="h-8 w-8" />
        </li>
        <li class="flex items-center">
          <img :src="gemini" alt="Gemini" class="h-8 w-8" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bigquery from "../assets/tech_logos/bigquery.svg?inline";
  import Python from "../assets/tech_logos/python.svg?inline";
  import Snowflake from "../assets/tech_logos/snowflake.svg?inline";
  import Airflow from "../assets/tech_logos/airflow.svg?inline";
  import Postgres from "../assets/tech_logos/postgres.svg?inline";
  import Terraform from "../assets/tech_logos/terraform.svg?inline";
  import Kubernetes from "../assets/tech_logos/kubernetes.svg?inline";
  import Docker from "../assets/tech_logos/docker.svg?inline";
  import Gcp from "../assets/tech_logos/gcp.svg?inline";
  import Helm from "../assets/tech_logos/helm.svg?inline";
  import Claude from "../assets/tech_logos/claude.svg?inline";

  export default {
    components: {
      Bigquery,
      Python,
      Snowflake,
      Airflow,
      Postgres,
      Terraform,
      Kubernetes,
      Docker,
      Gcp,
      Helm,
      Claude,
    },
    data() {
      return {
        openai: require("../assets/tech_logos/openai.png"),
        gemini: require("../assets/tech_logos/gemini.png"),
      };
    },
  };
</script>
