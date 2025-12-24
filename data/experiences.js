const experiencesData = [
  {
    type: "work",
    company: "Zoomo",
    companyId: "zoomo",
    icon: require("~/assets/job_logos/ridezoomo_favicon.png"),
    roles: [
      {
        title: "Senior Data Engineer",
        isCurrent: true,
        startDate: "2023-12",
        endDate: null,
        achievements: [
          "Spearheaded the migration of the fleet management system for 60,000 bikes across 8 markets.",
          "Developed new analytics tables to enhance data insights.",
        ],
      },
    ],
  },
  {
    type: "project",
    company: "OpenPay",
    companyId: "openpay",
    icon: require("~/assets/job_logos/getopenpay_favicon.png"),
    roles: [
      {
        title: "Data Engineering Consultant",
        isCurrent: false,
        startDate: "2024-06",
        endDate: "2024-09",
        achievements: [
          "Built production dunning system processing $100,000 USD daily transaction volume.",
          "Delivered complete system in 4 weeks with zero production incidents.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Thinking Machines",
    companyId: "thinking-machines",
    icon: require("~/assets/job_logos/thinkingmachin_es_favicon.png"),
    roles: [
      {
        title: "Telco Industry Pod Lead",
        isCurrent: false,
        startDate: "2023-01",
        endDate: "2023-08",
        achievements: [
          "Managed complete sales cycle for telecommunications sector including marketing outreach, pre-sales meetings, technical scoping, proposal writing, and client relationship management.",
          "Delivered multiple proof-of-concept projects closing enterprise sales.",
          "Hosted workshops on Large Language Models (LLMs) for clients during ChatGPT emergence (2023), positioning Thinking Machines as early adopter in generative AI space.",
        ],
      },
      {
        title: "Enterprise Solutions Engineer Lead and Data Engineering Lead",
        isCurrent: false,
        startDate: "2020-12",
        endDate: "2023-11",
        achievements: [
          "Led Internal Data Marketplace team processing 40 datasets serving investment firm stakeholders.",
          "Built data catalog with metadata and lineage enabling internal dataset discovery vs. duplicate external purchases using Python, SQL, Airflow, and Snowflake.",
          "Architected multi-cloud data platforms leveraging Snowflake, Airflow, AWS/GCP/Azure, BigQuery, and dbt.",
          "Established formal sales→dev handover workflows: stakeholder mapping templates, deal presentation requirements, SOW documentation.",
          "Created company-wide playbooks: networking configurations (AWS/GCP/Azure/Snowflake S2S VPN), security checklist (OWASP), TCO calculator.",
          "Served as hands-on SME for S2S VPNs and networking.",
          "Account Management & Stakeholder Leadership: Scaled single-project engagement to multi-year relationship spanning 40+ engineers across 5+ teams.",
          "Built trust with clients through consistent delivery and proactive communication, evolving engagements from intensive oversight to strategic partnerships.",
          "Team Leadership & Platform Ownership: Scaled team from 1 → 7 → 40+ engineers coordinating shared infrastructure releases across multiple project teams.",
          "Coached team on stakeholder communication while maintaining hands-on coding: structured updates, proactive risk flagging, solution-oriented framing.",
          "Designed multi-team workflow for releasing features on shared data platform.",
          "Knowledge Sharing: Hosted workshops on GCP and Snowflake for clients and internal teams.",
        ],
      },
      {
        title: "Data Engineer",
        isCurrent: false,
        startDate: "2020-06",
        endDate: "2020-12",
        achievements: [
          "Built multi-cloud data platforms for enterprises in Southeast Asia.",
          "Contributed to winning $1M USD quarterly contract with Singapore-based investment firm, then selected as first engineer deployed to the account (title changed to Enterprise Solutions Engineer after first performance evaluation).",
          "Delivered proof-of-concept projects closing enterprise sales: EastWest Bank, LBC, etc.",
          "Hands-On Platform Engineering: Coded data ingestion pipelines processing datasets from S3 buckets, REST APIs, file servers (VPN connections), and PostgreSQL dumps using Python, Spark, and Airflow.",
          "Onboarded enterprises to GCP, personally implemented governance structures and connected S2S VPNs across clouds/data centers.",
          "Built ETL workflows using Apache Spark on EMR, managing infrastructure with Terraform.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Station Five",
    companyId: "station-five",
    icon: require("~/assets/job_logos/adaca_favicon.svg"),
    roles: [
      {
        title: "Software Developer",
        isCurrent: false,
        startDate: "2018-10",
        endDate: "2020-04",
        achievements: [
          "Developed and maintained web applications for international clients across various technologies, demonstrating adaptability and rapid learning ability.",
          "Rescued Queensland Fire and Emergency Services website project by catching up on 7-month backlog in 2 months while learning Drupal (no prior PHP background).",
          "Participated in strategic client meetings, authored technical approach sections of proposals, and co-handled project costing processes.",
          "Rapidly learned multiple frameworks (Drupal, Magento 2, .NET Core) to deliver client projects across e-commerce, government, and enterprise domains.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Freelancer.com Ltd",
    companyId: "freelancer",
    icon: require("~/assets/job_logos/freelancer_favicon.png"),
    roles: [
      {
        title: "Software Engineer (Data Science Infrastructure)",
        isCurrent: false,
        startDate: "2017-08",
        endDate: "2018-04",
        achievements: [
          "Maintained and optimized data infrastructure supporting marketing and operational analytics for global marketplace platform.",
          "Overhauled email metrics data pipeline, reducing ETL runtime from 2 hours to under 15 minutes (87% improvement) by eliminating N+1 queries.",
          "Implemented first-ever unit tests in team (80% coverage) with coverage tooling.",
          "Built internal Sankey graph visualization tool for data pipeline and user journey flow visualization.",
        ],
      },
    ],
  },
  {
    type: "education",
    company: "University of the Philippines Los Baños",
    companyId: "uplb",
    icon: "/job_logos/uplb_favicon.png",
    roles: [
      {
        title: "BS Computer Science",
        isCurrent: false,
        startDate: "2013",
        endDate: "2017",
        achievements: [
          "Graduated with honors from premier Philippine university's computer science program.",
          "Volunteered to build SystemOne Reborn, online course registration system handling 20,000 concurrent users at peak, replacing failed vendor system and eliminating km-long queues where students previously camped overnight on campus.",
          "System eliminated transport costs, lodging expenses, and safety risks for thousands of students from across the Philippines.",
          "Served as Vice President of the Young Software Engineers' Society, where I led multiple fundraising projects and organized tutorial sessions for computer science courses, enhancing the learning experience for peers.",
        ],
      },
    ],
  },
];

export default experiencesData;
