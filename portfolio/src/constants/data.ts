import type {
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Project,
  Achievement,
  Certification,
  Activity,
  NavItem,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Praveen Uppar",
  headline: "Full Stack Developer & Cloud Enthusiast",
  intro:
    "B.Tech CSE student at VIT Bhopal, building scalable distributed systems and modern web applications. Passionate about backend architecture, cloud infrastructure, and open-source contribution.",
  phone: "+91 6360082757",
  email: "praveenuppar718@gmail.com",
  github: "https://github.com/PraveenUppar",
  linkedin: "https://linkedin.com/in/praveen-uppar-5b0565277",
  website: "https://pavicodes.in",
  location: "India",
};

export const education: Education[] = [
  {
    id: "vit",
    institution: "Vellore Institute of Technology, Bhopal",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    duration: "2023 – 2027",
    startYear: 2023,
    endYear: 2027,
    score: "8.75 / 10",
    scoreType: "CGPA",
  },
  {
    id: "puc",
    institution: "JSS R. S. Hukkerikar Pre-University Science College, Dharwad",
    degree: "Class XII",
    board: "Department of Pre-University Education, Karnataka",
    duration: "2023",
    startYear: 2021,
    endYear: 2023,
    score: "90%",
    scoreType: "Percentage",
  },
  {
    id: "school",
    institution: "Classic International Public School, Dharwad",
    degree: "Class X",
    board: "ICSE Board",
    duration: "2021",
    startYear: 2019,
    endYear: 2021,
    score: "80%",
    scoreType: "Percentage",
  },
];

export const experience: Experience[] = [
  {
    id: "advan-drive",
    company: "Advan Drive Technology",
    role: "Full Stack SDE Intern",
    type: "Virtual",
    location: "New Delhi",
    duration: "3 months",
    startDate: "Feb 2026",
    endDate: "Apr 2026",
    description: [
      "Built and scaled 5+ workflow automation modules and 7+ backend REST APIs for a CA operations platform, streamlining automated financial reporting.",
      "Architected and managed distributed, containerized infrastructure on Oracle Cloud Infrastructure (OCI), orchestrating 4 microservices with asynchronous job execution and real-time progress tracking.",
      "Owned end-to-end delivery across the Software Development Life Cycle (SDLC) — system design, implementation, testing and deployment — for a live CA operations platform.",
    ],
    technologies: [
      "Node.js",
      "REST APIs",
      "OCI",
      "Docker",
      "Microservices",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    items: ["React.js", "Node.js", "Express.js", "Next.js"],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "Linux", "Docker"],
  },
  {
    category: "Cloud (AWS)",
    icon: "Cloud",
    items: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "Lambda",
      "RDS",
      "DynamoDB",
      "CloudWatch",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "co-host",
    name: "Co-Host",
    tagline: "Tech Events Ticket Platform",
    description:
      "A full-stack event ticketing platform with secure payment processing, QR-based check-in, and real-time inventory management built for high-concurrency workloads.",
    date: "Jan 2026",
    features: [
      "Built and integrated 5+ core backend workflows — payment verification, ticket generation, QR validation, coupon redemption and email notifications, enabling secure and reliable transaction processing.",
      "Designed a 3-layer concurrency control architecture combining idempotency checks, database transactions and atomic operations mechanisms, ensuring consistent inventory management under high-concurrency workloads.",
      "Implemented pull-based Stripe payment verification (no webhooks), preventing URL spoofing by validating session status server-side before order fulfillment.",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "Stripe",
      "PostgreSQL",
      "QR Code",
      "Email",
    ],
    challenges: [
      "High-concurrency inventory management",
      "Secure payment verification without webhooks",
      "Preventing URL spoofing attacks",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: "zenith",
    name: "Zenith",
    tagline: "Container-Based Deployment System",
    description:
      "A distributed deployment platform that automates repository cloning, Docker container builds, and static asset delivery from a single GitHub URL input.",
    date: "Dec 2025",
    features: [
      "Architected a distributed deployment platform with 3 microservices in a monorepo, automating repository cloning and isolated Docker container builds from a single GitHub URL input.",
      "Engineered an asynchronous build pipeline using a Redis-backed job queue for reliable, decoupled task processing across services.",
      "Implemented AWS S3 artifact storage and a custom request-routing layer supporting scalable static asset delivery, SPA fallback routing, and per-project subdomain hosting.",
    ],
    techStack: [
      "Node.js",
      "Docker",
      "Redis",
      "AWS S3",
      "Microservices",
      "Monorepo",
    ],
    challenges: [
      "Orchestrating 3 microservices in a monorepo",
      "Building reliable async pipelines with Redis",
      "SPA fallback routing and subdomain hosting",
    ],
    github: "#",
    demo: "#",
  },
];

export const achievements: Achievement[] = [
  {
    id: "leetcode",
    title: "1500+ LeetCode Rating",
    description:
      "Consistent competitive programming practice with a rating exceeding 1500 on LeetCode.",
    stat: "1500+",
    statLabel: "Rating",
    icon: "Trophy",
  },
  {
    id: "hackbyte",
    title: "Runner-up — HackByte 3.0",
    description:
      "Achieved Runner-up position in HackByte 3.0 (Wikimedia Track) at IIIT Jabalpur, ranking 2nd out of 110 participating teams.",
    stat: "2nd",
    statLabel: "out of 110 teams",
    icon: "Award",
  },
  {
    id: "gssoc",
    title: "Top 2,000 — GSSoC 2024",
    description:
      "Ranked among the Top 2,000 Open Source Contributors out of 30,000+ participants in GirlScript Summer of Code (GSSoC) 2024.",
    stat: "Top 2K",
    statLabel: "of 30,000+",
    icon: "GitBranch",
  },
];

export const certifications: Certification[] = [
  {
    id: "aws-cp",
    name: "AWS Certified: Cloud Practitioner",
    issuer: "Amazon Web Services",
    score: "865 / 1000",
    date: "June 2026",
    icon: "Cloud",
  },
  {
    id: "ml-python",
    name: "Applied Machine Learning in Python",
    issuer: "Coursera",
    score: "87.59%",
    date: "Nov 2024",
    icon: "Brain",
  },
  {
    id: "azure-fund",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    score: "785 / 1000",
    date: "Oct 2024",
    icon: "Cloud",
  },
  {
    id: "python-100",
    name: "100 Days of Code: Python Bootcamp",
    issuer: "Udemy",
    score: "92.19%",
    date: "Sep 2024",
    icon: "Code2",
  },
];

export const activities: Activity[] = [
  {
    id: "mun-lead",
    role: "Technical Team Lead",
    organization: "Model United Nation Chapter",
    duration: "Nov 2024 – May 2025",
    description: [
      "Led the technical team of 5+ members, organizing 3+ MUN events that drew 280+ participants.",
    ],
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
