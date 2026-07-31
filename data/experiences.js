const experiencesData = [
  {
    type: "work",
    company: "Rex Software",
    companyId: "rex-software",
    icon: require("~/assets/job_logos/rexsoftware_favicon.png"),
    summary:
      "Real estate software platform (agency CRM + property management) operating across the AU and UK markets.",
    roles: [
      {
        title: "Senior Data and AI Engineer",
        isCurrent: true,
        startDate: "2026-03",
        endDate: null,
        achievements: [
          "Designed and shipped — solo, end-to-end — two production data-ingestion pipelines (AU + UK) for the property management platform: Dataflow Flex Templates → Snowflake Snowpipe (AUTO_INGEST via Pub/Sub) → dbt bronze layer. AU extracts 10 source databases in ~22 minutes; UK covers 182 entities with an 88M-row backfill completed in 85 minutes. Delivered 157 bronze dbt models across both regions.",
          "Re-architected Jitsu's direct-to-Snowflake event ingestion to a GCS → Snowpipe AUTO_INGEST pattern, cutting idle warehouse spend and unlocking hourly (vs. daily) refresh cadence; propagated the reactive pattern across 4+ sources (GitHub, Slack, Google Sheets, Jira).",
          "Built the company's PII-hashing infrastructure on Cloud Run (configurable hash/mask/keep action model, JSON-path support, scoped table discovery), producing DPIA and SOC-style audit evidence for compliance review.",
          "Shipped 3 production dashboards solo end-to-end (engineering DORA metrics, application performance, and an operational property-platform V1) — each from scraper/pipeline through gold marts, dbt models, Plotly app, and deploy.",
          "Delivered across four parallel workstreams while several were gated on external DevOps dependencies; rated 4.79/5 (Exceptional) at the 3rd-month client review.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Zoomo",
    companyId: "zoomo",
    icon: require("~/assets/job_logos/ridezoomo_favicon.png"),
    summary: "E-bike subscription platform operating across 7 international markets (AU, UK, DE, FR, ES, US, CA).",
    roles: [
      {
        title: "Sr. Data Engineer",
        isCurrent: false,
        startDate: "2023-12",
        endDate: "2025-12",
        achievements: [
          "Reduced BigQuery storage costs 50% ($120K → $60K annually) through archiving system moving infrequently-accessed data to GCS Coldline with unarchiving capabilities; established cross-team process for dataset retention management.",
          "Led company-wide dbt implementation: migrated 40+ critical models, established Git workflows and CI/CD pipelines (GitHub Actions), implemented 150+ automated tests, deployed self-hosted documentation site; includes change management and internal training workshops.",
          "Reduced transformation runtime of master tables by 88% (4 hours → 45 minutes) by resolving dependency management issues and establishing unified 30-minute refresh cadence.",
          "Created automated arrears management system handling 50-100+ cases for each of 7 markets, reducing manual workload and lowering latency of payment-to-unlock workflow (<5 minutes vs. ~1 day).",
          "Executed zero-downtime fleet management system migration affecting 100% of operational dashboards (60,000+ assets, 80,000 jobs) across 7 markets; rebuilt analytics master tables to use new system.",
        ],
      },
    ],
  },
  {
    type: "project",
    company: "Openpay (Project)",
    companyId: "openpay",
    icon: require("~/assets/job_logos/getopenpay_favicon.png"),
    summary: "Early-stage subscription management platform (later acquired by Airwallex).",
    roles: [
      {
        title: "Sr. Software Engineer",
        isCurrent: false,
        startDate: "2024-06",
        endDate: "2024-09",
        achievements: [
          "Built dunning system processing $100,000 USD daily across 10,000+ active subscriptions with email notifications from scratch.",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "Thinking Machines Data Science Inc.",
    companyId: "thinking-machines",
    icon: require("~/assets/job_logos/thinkingmachin_es_favicon.png"),
    roles: [
      {
        title: "Telco Industry Pod Lead",
        isCurrent: false,
        startDate: "2023-01",
        endDate: "2023-11",
        achievements: [
          "Led Telco vertical business development and technical solution sales, managing client relationships to expand telecommunications portfolio in Southeast Asia.",
        ],
      },
      {
        title: "Enterprise Solutions Engineer and Senior Data Engineer",
        isCurrent: false,
        startDate: "2020-12",
        endDate: "2023-11",
        achievements: [
          "Built an internal Data Marketplace processing 40 datasets (2TB daily), eliminating duplicate purchases for $320B+ investment firm.",
          "Coordinated 40+ engineers across 5+ teams as de-facto platform owner while coding daily (Python, Airflow, dbt).",
          "Designed enterprise data platform architectures from business requirements through technical proposals: participated in pre-sales meetings, authored TCO calculations and build timelines, identified technical risks, then led implementation across multi-cloud environments. (Snowflake, Airflow, AWS/GCP, BigQuery, dbt).",
          "Created company-wide playbooks: S2S VPN configs, security checklists, TCO calculators; authored RFCs for sales→dev handover.",
        ],
      },
      {
        title: "Data Engineer",
        isCurrent: false,
        startDate: "2020-06",
        endDate: "2020-12",
        achievements: [
          "Won $1M USD quarterly contract with $320B+ investment firm through corporate hackathon POC.",
          "Built geospatial dashboard for environmental risk assessment as solo data engineer.",
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
          "Overhauled email metrics data pipeline reducing ETL runtime from 2 hours to 15 minutes (87% improvement) by eliminating N+1 queries; improved tooling for data scientists and project managers (Technologies: Python, Redshift, Go, Node).",
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
