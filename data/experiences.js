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
        achievements: ["Building AI workflows and internal tools for the data team."],
      },
    ],
  },
  {
    type: "work",
    company: "Zoomo",
    companyId: "zoomo",
    icon: require("~/assets/job_logos/ridezoomo_favicon.png"),
    summary: "E-bike subscription platform.",
    roles: [
      {
        title: "Sr. Data Engineer",
        isCurrent: false,
        startDate: "2023-12",
        endDate: "2025-12",
        achievements: [
          "Modernised the data platform and the tooling around it, and got the rest of the company using it.",
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
        achievements: ["Built the system that recovers failed subscription payments."],
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
        achievements: ["Led the telco practice — client relationships and solution design."],
      },
      {
        title: "Enterprise Solutions Engineer and Senior Data Engineer",
        isCurrent: false,
        startDate: "2020-12",
        endDate: "2023-11",
        achievements: [
          "Designed and built data platforms for enterprise clients, and ended up owning one of them.",
        ],
      },
      {
        title: "Data Engineer",
        isCurrent: false,
        startDate: "2020-06",
        endDate: "2020-12",
        achievements: ["Built pipelines and dashboards on client engagements."],
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
        achievements: ["Built web applications in whatever stack each client happened to need."],
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
        achievements: ["Rebuilt the email metrics pipeline the data science team relied on."],
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
