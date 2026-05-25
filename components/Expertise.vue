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
          <Python class="h-5 w-5"></Python>
        </li>
        <li class="flex items-center">
          <Snowflake class="h-5 w-5"></Snowflake>
        </li>
        <li class="flex items-center">
          <Airflow class="h-5 w-5"></Airflow>
        </li>
        <li class="flex items-center">
          <Dagster class="h-5 w-5"></Dagster>
        </li>
        <li class="flex items-center">
          <Postgres class="h-5 w-5"></Postgres>
        </li>
        <li class="flex items-center">
          <Dbt class="h-5 w-5"></Dbt>
        </li>
      </ul>
    </div>
    <div class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Platforms and Tools
      </h2>
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
          <CloudRun class="h-5 w-5"></CloudRun>
        </li>
        <li class="flex items-center">
          <Gcs class="h-5 w-5"></Gcs>
        </li>
        <li class="flex items-center">
          <Helm class="h-5 w-5"></Helm>
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
  import Dagster from "../assets/tech_logos/bigquery.svg?inline"; // Placeholder - replace with dagster.svg
  import Postgres from "../assets/tech_logos/postgres.svg?inline";
  import Dbt from "../assets/tech_logos/bigquery.svg?inline"; // Placeholder - replace with dbt.svg
  import Terraform from "../assets/tech_logos/terraform.svg?inline";
  import Kubernetes from "../assets/tech_logos/kubernetes.svg?inline";
  import Docker from "../assets/tech_logos/docker.svg?inline";
  import CloudRun from "../assets/tech_logos/gcp.svg?inline"; // Placeholder - replace with cloud-run.svg
  import Gcs from "../assets/tech_logos/gcp.svg?inline"; // Placeholder - replace with gcs.svg
  import Helm from "../assets/tech_logos/helm.svg?inline";

  export default {
    components: {
      Bigquery,
      Python,
      Snowflake,
      Airflow,
      Dagster,
      Postgres,
      Dbt,
      Terraform,
      Kubernetes,
      Docker,
      CloudRun,
      Gcs,
      Helm,
    },
  };
</script>
