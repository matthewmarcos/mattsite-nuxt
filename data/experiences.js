const experiencesData = [
  {
    type: "work",
    company: "Rex Software",
    companyId: "rex-software",
    icon: require("~/assets/job_logos/rexsoftware_favicon.png"),
    summary: "Real estate software for the AU and UK markets.",
    roles: [
      {
        title: "Senior Data and AI Engineer",
        isCurrent: true,
        startDate: "2026-03",
        endDate: null,
        achievements: [
          "Built the ingestion platform for the property management product end to end, across both regions.",
          "Also built the company's PII-hashing service and a handful of dashboards nobody else wanted to own.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Zoomo",
    companyId: "zoomo",
    icon: require("~/assets/job_logos/ridezoomo_favicon.png"),
    summary: "E-bike subscriptions, operating across seven countries.",
    roles: [
      {
        title: "Sr. Data Engineer",
        isCurrent: false,
        startDate: "2023-12",
        endDate: "2025-12",
        achievements: [
          "Pitched dbt as the fix for a company-wide data freshness problem, then did the migration and taught everyone how to use it.",
          "Spent a lot of time making things cheaper and faster, and migrating the fleet system without taking dashboards down.",
        ],
      },
    ],
  },
  {
    type: "project",
    company: "Openpay (Project)",
    companyId: "openpay",
    icon: require("~/assets/job_logos/getopenpay_favicon.png"),
    summary: "Early-stage subscription billing, later acquired by Airwallex.",
    roles: [
      {
        title: "Sr. Software Engineer",
        isCurrent: false,
        startDate: "2024-06",
        endDate: "2024-09",
        achievements: [
          "Built their dunning system from scratch — the thing that chases failed payments without annoying customers too much.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Thinking Machines Data Science Inc.",
    companyId: "thinking-machines",
    icon: require("~/assets/job_logos/thinkingmachin_es_favicon.png"),
    summary: "Data consultancy in Southeast Asia.",
    roles: [
      {
        title: "Telco Industry Pod Lead",
        isCurrent: false,
        startDate: "2023-01",
        endDate: "2023-11",
        achievements: [
          "Ran the telco vertical — client relationships, solution design, and the sales conversations that come with it.",
        ],
      },
      {
        title: "Enterprise Solutions Engineer and Senior Data Engineer",
        isCurrent: false,
        startDate: "2020-12",
        endDate: "2023-11",
        achievements: [
          "Built an internal data marketplace for a very large investment firm, and ended up as its de-facto platform owner.",
          "Designed data platforms for clients from first conversation through to implementation, which meant writing a lot of proposals and then having to deliver on them.",
        ],
      },
      {
        title: "Data Engineer",
        isCurrent: false,
        startDate: "2020-06",
        endDate: "2020-12",
        achievements: [
          "Won a large client contract off the back of a hackathon prototype, then built the geospatial dashboard it turned into.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Station Five",
    companyId: "station-five",
    icon: require("~/assets/job_logos/stationfive_logo.svg"),
    summary: "Web agency work for international clients.",
    roles: [
      {
        title: "Software Developer",
        isCurrent: false,
        startDate: "2018-10",
        endDate: "2020-04",
        achievements: [
          "Learned whichever framework the next client needed — Drupal, Magento, .NET — usually about a week before I needed it.",
          "Rescued a government website project that had fallen badly behind, having never written PHP before.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Freelancer.com Inc.",
    companyId: "freelancer",
    icon: require("~/assets/job_logos/freelancer_favicon.png"),
    roles: [
      {
        title: "Software Engineer (Data Science Infrastructure)",
        isCurrent: false,
        startDate: "2017-08",
        endDate: "2018-04",
        achievements: [
          "Rewrote the email metrics pipeline so the data scientists stopped waiting hours for it.",
        ],
      },
    ],
  },
  {
    type: "education",
    company: "University of the Philippines",
    companyId: "uplb",
    icon: "/job_logos/uplb_favicon.png",
    roles: [
      {
        title: "B.S. Computer Science, Honor Roll",
        isCurrent: false,
        startDate: "2013",
        endDate: "2017",
        achievements: [],
      },
    ],
  },
];

export default experiencesData;
