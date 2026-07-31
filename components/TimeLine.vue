<template>
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li v-for="experience in sortedExperiences" :key="experience.companyId" class="mb-10 ml-6">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-white dark:bg-white rounded-full border border-gray-300 dark:border-gray-600 shadow-sm"
        >
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            :src="experience.icon"
            :alt="experience.company"
          />
        </span>

        <!-- Company Header -->
        <h3 class="flex items-center mb-3 text-lg font-semibold text-gray-900 dark:text-white">
          {{ experience.company }}
          <span
            v-if="experience.roles.some((role) => role.isCurrent)"
            class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >Current</span
          >
        </h3>

        <!-- Company Summary -->
        <p
          v-if="experience.summary"
          class="mb-4 text-base font-normal text-gray-600 dark:text-gray-400 italic"
        >
          {{ experience.summary }}
        </p>

        <!-- Multiple roles at same company -->
        <template v-if="experience.roles.length > 1">
          <div v-for="(role, index) in experience.roles" :key="index" class="mb-6">
            <h4
              class="flex items-center mb-1 text-base font-medium text-gray-700 dark:text-gray-300"
            >
              {{ role.title }}
              <span
                v-if="role.isCurrent"
                class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
                >Current</span
              >
            </h4>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >
              {{ formatPeriod(role.startDate, role.endDate) }}
            </time>
            <p
              v-if="role.summary"
              class="mb-2 text-base font-normal text-gray-600 dark:text-gray-400 italic"
            >
              {{ role.summary }}
            </p>
            <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <ul class="list-disc ml-5">
                <li v-for="(achievement, idx) in role.achievements" :key="idx">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </template>

        <!-- Single role at company -->
        <template v-else>
          <h4 class="flex items-center mb-1 text-base font-medium text-gray-700 dark:text-gray-300">
            {{ experience.roles[0].title }}
            <span
              v-if="experience.roles[0].isCurrent"
              class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
              >Current</span
            >
          </h4>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >
            {{ formatPeriod(experience.roles[0].startDate, experience.roles[0].endDate) }}
          </time>
          <p
            v-if="experience.roles[0].summary"
            class="mb-2 text-base font-normal text-gray-600 dark:text-gray-400 italic"
          >
            {{ experience.roles[0].summary }}
          </p>
          <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <ul class="list-disc ml-5">
              <li v-for="(achievement, idx) in experience.roles[0].achievements" :key="idx">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ol>
  </div>
</template>

<script>
  import experiencesData from "@/data/experiences";

  export default {
    data() {
      return {
        experiencesData: experiencesData,
      };
    },
    computed: {
      sortedExperiences() {
        return [...this.experiencesData].sort((a, b) => {
          // Get the most recent end date from all roles in each experience
          // If endDate is null, treat as "current" (very recent)
          const aEndDates = a.roles.map((role) =>
            role.endDate ? this.parseDate(role.endDate).getTime() : Date.now()
          );
          const bEndDates = b.roles.map((role) =>
            role.endDate ? this.parseDate(role.endDate).getTime() : Date.now()
          );

          const aMostRecentEnd = Math.max(...aEndDates);
          const bMostRecentEnd = Math.max(...bEndDates);

          return bMostRecentEnd - aMostRecentEnd; // Most recent end date first
        });
      },
    },
    methods: {
      // Parse ISO 8601 date string (YYYY-MM or YYYY) to Date object
      parseDate(dateString) {
        if (!dateString) return new Date();
        // Handle YYYY-MM format
        if (dateString.includes("-")) {
          const [year, month] = dateString.split("-");
          return new Date(parseInt(year), parseInt(month) - 1, 1);
        }
        // Handle YYYY format (education)
        return new Date(parseInt(dateString), 0, 1);
      },

      // Format date for display: "Dec 2023 - Present" or "Jun 2020 - Dec 2020"
      formatPeriod(startDate, endDate) {
        const start = this.formatDate(startDate);
        const end = endDate ? this.formatDate(endDate) : "Present";
        return `${start} - ${end}`;
      },

      // Format single date: "Dec 2023" or "2013" (for year-only)
      formatDate(dateString) {
        if (!dateString) return "Present";

        // Handle year-only format (education)
        if (!dateString.includes("-")) {
          return dateString;
        }

        // Handle YYYY-MM format
        const [year, month] = dateString.split("-");
        const date = new Date(parseInt(year), parseInt(month) - 1, 1);
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        return `${monthNames[date.getMonth()]} ${year}`;
      },
    },
  };
</script>

<style></style>
