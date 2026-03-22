/**
 * =============================================================================
 * PORTFOLIO CONTENT - EDIT HERE
 * =============================================================================
 *
 * Quick checklist (search TODO_REPLACE in this file):
 *
 *   • PROFILE_IMAGE_SRC, PROFILE_IMAGE_ALT - swap file in /public (e.g. profile.jpg)
 *   • RESUME_PDF_PATH - your résumé PDF in /public
 *   • CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL
 *   • YOUR_NAME, YOUR_TITLE, heroKicker, heroIntro
 *   • aboutBio, careerPhilosophy, resumeSection, coverLetter
 *   • academicCredentials (education, certifications, awards, transcript)
 *   • ACADEMIC_PROJECTS - keep exactly one isCapstone: true
 *   • CAPSTONE_TABS - capstone write-ups per assignment
 *   • professionalSection - work experience, volunteering, references
 *   • SECTION_COPY - section titles / short intros
 *   • SKILL_CATEGORIES - Skills section (all groups in one list)
 *
 * =============================================================================
 */

export type ProjectLinkKey =
  | "github"
  | "repository"
  | "watchDemo"
  | "demo"
  | "report"
  | "caseStudy";

/** One skill chip - `icon` must match a key in TechIcon.tsx */
export type SkillItem = {
  label: string;
  icon: string;
};

/** One labeled group inside the Skills section card */
export type SkillCategory = {
  id: string;
  title: string;
  items: SkillItem[];
};

/** Row in School → Certifications list */
export type AcademicCertificate = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  badgeImage?: {
    src: string;
    alt: string;
  };
  /** Local PDF in /public - ButtonLink opens in new tab (no download attr) */
  certificatePdf?: {
    href: string;
    /** Defaults to “View certificate” in the UI */
    label?: string;
  };
};

/** Honors / Dean’s List — card shell aligned with certifications */
export type AcademicAward = {
  id: string;
  name: string;
  issuer: string;
  description: string;
  /** Local PDF in /public — ButtonLink opens in new tab (no download attr) */
  lettersPdf?: {
    href: string;
    label?: string;
  };
};

/** One education card - `logoImage` is the supporting mark on the right of the title row */
export type EducationEntry = {
  id: string;
  institution: string;
  credential: string;
  dates: string;
  detail: string;
  logoImage: {
    src: string;
    alt: string;
  };
};

export type AcademicProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links?: Partial<Record<ProjectLinkKey, string>>;
  isCapstone?: boolean;
};

/** Work experience and volunteering cards in the professional section */
export type ProfessionalVolunteerEntry = {
  id: string;
  title: string;
  organization: string;
  /** Optional date range (e.g. prior roles) */
  dates?: string;
  /** Small mark beside title/org — path under /public */
  logo?: {
    src: string;
    alt: string;
  };
  /** Use a blank line between paragraphs (`\\n\\n`) for multiple blocks */
  description: string;
};

/** One PDF button under a capstone tab — `href` is served from `/public` */
export type CapstoneDocumentLink = {
  label: string;
  /** e.g. `/capstone/Project_Summary_GlamUp!.pdf` */
  href: string;
};

export type CapstoneTab = {
  id: string;
  label: string;
  /** Panel heading under the “DOCUMENT” label (e.g. “Project Summary”) */
  documentTitle: string;
  paragraphs: string[];
  /** Omit or leave empty for tabs with no PDF yet (e.g. Build placeholder) */
  documentLinks?: CapstoneDocumentLink[];
};

export type NavItem = {
  id: string;
  label: string;
};

export type SectionHeadingCopy = {
  eyebrow?: string;
  title: string;
  description?: string;
};

// -----------------------------------------------------------------------------
// Name, hero, contact, photo & résumé paths
// -----------------------------------------------------------------------------
export const YOUR_NAME = "Meriç Yassine";
export const YOUR_TITLE = "Software Developer";
/** Small line above your name; use "" to hide */
export const heroKicker = "";

export const CONTACT_EMAIL = "mericyassine@gmail.com";
export const GITHUB_URL = "https://github.com/meric-yassine";
export const LINKEDIN_URL = "https://www.linkedin.com/in/meric-yassine";

/** Space in filename → encoded for reliable loading */
export const PROFILE_IMAGE_SRC = "/IMG_9768%202.JPG";
export const PROFILE_IMAGE_ALT = `Portrait of ${YOUR_NAME}`;
export const RESUME_PDF_PATH = "/MericYassine_Resume.pdf";

export const SITE_DESCRIPTION = `${YOUR_NAME} - computer programming student & software developer`;

/** Section titles & one-line intros - edit in one place */
export const SECTION_COPY: Record<string, SectionHeadingCopy> = {
  about: {
    eyebrow: "About",
    title: "Hello, I’m glad you’re here",
  },
  philosophy: {
    eyebrow: "Goals",
    title: "Philosophy / Statement of Career Goal",
  },
  skills: {
    eyebrow: "Toolkit",
    title: "Skills",
    description:
      "Technologies and programming languages I’ve used to design and build applications through coursework, labs, projects, and capstone work.",
  },
  resume: {
    eyebrow: "Résumé",
    title: "Résumé",
  },
  coverLetter: {
    eyebrow: "Applications",
    title: "Cover letter",
    description:
      "A sample cover letter I adapt for junior developer roles, focused on clear communication, relevant projects, and honest representation of my experience.",
  },
  credentials: {
    eyebrow: "Education",
    title: "School & certificates",
  },
  workSamples: {
    eyebrow: "Projects",
    title: "Selected Work",
    description:
      "Coursework and capstone projects I can walk through in more detail.",
  },
  capstone: {
    eyebrow: "Capstone",
    title: "Capstone project",
    description:
      "Deliverables and notes for my capstone course-organized by topic.",
  },
  professional: {
    eyebrow: "Beyond class",
    title: "Other experience",
    description: "Professional experience and volunteering.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk",
    description: "Best reach is email; links below if you prefer.",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "philosophy", label: "Goals" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Résumé" },
  { id: "cover-letter", label: "Letter" },
  { id: "credentials", label: "School" },
  { id: "work-samples", label: "Projects" },
  { id: "capstone", label: "Capstone" },
  { id: "professional", label: "Other" },
  { id: "contact", label: "Contact" },
];

/** Two short paragraphs for the hero intro */
export const heroIntro = [
  "I’m a computer programming student with a background in architecture, focused on building clean, practical applications.",
  "I enjoy working with TypeScript, React, and backend APIs to turn ideas into working products. I’m currently seeking a junior developer role where I can keep learning and contributing.",
] as const;

export const aboutBio = {
  lead:
    "I’m a computer programming student at George Brown Polytechnic, working toward an Advanced Diploma in Computer Programming. I like building practical, user-focused applications through coursework, team projects, and my capstone. I enjoy working across the stack - especially TypeScript, React, and backend APIs. I learn best by building, debugging, and iterating. I care about writing clean, readable code and shipping software that stays simple, useful, and easy to understand.",
  priorEducation:
    "Before transitioning into software development, I completed a Bachelor’s degree in Architecture at Yıldız Technical University, where I developed strong design thinking, analytical problem-solving, and structured planning skills.",
  interests:
    "Right now I’m focused on full-stack development with TypeScript, React, and Node.js, plus databases and wiring up complete applications end to end. I’m getting more comfortable with Git, testing, and collaborating on larger projects through team work and capstone milestones. I’m looking for a junior developer role - ideally in full-stack or frontend where I can keep learning and contribute to real-world products.",
};

/** Goals section (#philosophy) - quote + subsection titles & bodies; edit here only */
export type CareerPhilosophySection = {
  id: string;
  title: string;
  body: string;
};

export const careerPhilosophy = {
  quote: {
    text: "Science is the most reliable guide in life.",
    attribution: "Mustafa Kemal Atatürk",
  },
  sections: [
    {
      id: "how-i-learn",
      title: "How I learn",
      body:
        "I learn best by breaking work into small, clear deliverables and improving them step by step. My process is usually build, test, break, fix, and gather feedback before committing too heavily to one direction. That approach helps me stay adaptable and turn challenges into progress.",
    },
    {
      id: "how-i-work-with-others",
      title: "How I work with others",
      body:
        "In team projects like capstone, I value communication, readable code, realistic timelines, and staying organized through Git and documentation. I try to be dependable, open to feedback, and focused on building solutions that make sense not only for me, but for the people working with me.",
    },
    {
      id: "where-im-headed",
      title: "Where I’m headed",
      body:
        "I’m currently working toward a junior developer role, ideally in full-stack or frontend development. My goal is to keep improving through real-world projects, collaboration, and continuous learning, while building software that is clear, reliable, and useful.",
    },
  ] satisfies CareerPhilosophySection[],
};

// -----------------------------------------------------------------------------
// SKILLS SECTION - one unified card; edit labels here; `icon` keys map in TechIcon.tsx
// -----------------------------------------------------------------------------
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { label: "HTML", icon: "layout" },
      { label: "CSS", icon: "paintbrush" },
      { label: "JavaScript", icon: "braces" },
      { label: "TypeScript", icon: "typescript" },
      { label: "React", icon: "component" },
    ],
  },
  {
    id: "backend-data",
    title: "Backend, APIs & Databases",
    items: [
      { label: "Node.js", icon: "server" },
      { label: "Express", icon: "server" },
      { label: "REST APIs", icon: "link" },
      { label: "GraphQL", icon: "share" },
      { label: "PostgreSQL", icon: "database" },
      { label: "MongoDB", icon: "database" },
      { label: "SQL", icon: "table" },
      { label: "Firebase", icon: "flame" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile / App",
    items: [
      { label: "React Native", icon: "smartphone" },
      { label: "Expo", icon: "smartphone" },
      { label: "SwiftUI", icon: "apple" },
      { label: "Android development basics", icon: "smartphone" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    items: [
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "github" },
      { label: "Docker", icon: "container" },
      { label: "Postman", icon: "send" },
      { label: "VS Code", icon: "code" },
      { label: "Rider · PyCharm · PhpStorm", icon: "cpu" },
    ],
  },
  {
    id: "concepts",
    title: "Concepts / Other",
    items: [
      { label: "OOP", icon: "box" },
      { label: "API integration", icon: "plug" },
      { label: "Responsive design", icon: "responsive" },
      { label: "Testing basics", icon: "test" },
      { label: "Database design", icon: "tableprops" },
      { label: "Full-stack development", icon: "layers" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    items: [
      { label: "Java", icon: "java" },
      { label: "Python", icon: "python" },
      { label: "C#", icon: "csharp" },
      { label: "JavaScript", icon: "braces" },
      { label: "TypeScript", icon: "typescript" },
      { label: "SQL", icon: "table" },
    ],
  },
];

export const resumeSection = {
  summary:
    "A concise overview of my experience, projects, and technical background. It highlights the work I’ve built and the skills I’m continuing to develop.",
  actionLabel: "View résumé",
};

/** Cover letter section - preview card, CTA label, and full draft paragraphs */
export const coverLetter = {
  previewTitle: "Junior developer application",
  previewBody:
    "A structured starting point I tailor for each application-focused on clarity, relevant projects, and what I’ve built through coursework and capstone.",
  /** Label on the expandable card (<details> summary) */
  detailsSummaryLabel: "View full cover letter",
  fullParagraphs: [
    "Hi there,",
    "I’m writing to apply for a junior developer role with your team. I’m an Advanced Diploma student in Computer Programming at George Brown Polytechnic, with hands-on experience building full-stack apps using TypeScript, React, Node.js, and databases - both in coursework and through my capstone.",
    "I learn by shipping small slices of work, reading docs when I’m stuck, and taking feedback seriously. I’m comfortable with Git, collaborating on group deliverables, and writing code that teammates can follow.",
    "I’d welcome the chance to contribute to real products while continuing to grow. Thank you for your time-I’d be glad to talk more.",
    "Best,",
    YOUR_NAME,
  ],
};

// -----------------------------------------------------------------------------
// academicCredentials - education, certifications, awards, transcript
// -----------------------------------------------------------------------------
export const academicCredentials = {
  education: [
    {
      id: "edu-gbc",
      institution: "George Brown Polytechnic · Toronto",
      credential: "Advanced Diploma, Computer Programming",
      dates: "2023 – present · graduating 2026 (expected)",
      detail:
        "Coursework covers object-oriented programming, web development, databases, systems analysis, and a team capstone. I focus on full-stack work-TypeScript and React on the client, Node.js and REST APIs on the server, and PostgreSQL, MongoDB, and SQL for persistence.",
      logoImage: {
        src: "/logo_gbp.svg",
        alt: "George Brown Polytechnic logo",
      },
    },
    {
      id: "edu-aws-restart",
      institution: "AWS re/Start Program · Toronto, ON",
      credential: "Cloud & IT Skills Training Program",
      dates: "Completed Dec 2022",
      detail:
        "Completed an intensive training program focused on cloud computing, Linux, networking, and core IT fundamentals. Gained hands-on experience with AWS services and built a strong foundation in cloud-based systems.",
      logoImage: {
        src: "/aws-re-start-graduate.png",
        alt: "AWS re/Start graduate badge",
      },
    },
    {
      id: "edu-yildiz",
      institution: "Yıldız Technical University · Istanbul, Turkey",
      credential: "Bachelor’s Degree in Architecture",
      dates: "2012 – 2017",
      detail:
        "Developed strong problem-solving, design thinking, and project planning skills, with experience translating complex requirements into structured solutions.",
      logoImage: {
        src: "/logo-en_ytu.svg",
        alt: "Yıldız Technical University logo",
      },
    },
  ] satisfies EducationEntry[],
  certifications: [
    {
      id: "cert-aws-cpp",
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "Dec 2022",
      badgeImage: {
        src: "/aws-certified-cloud-practitioner.png",
        alt: "AWS Certified Cloud Practitioner badge",
      },
    },
    {
      id: "cert-aws-educate-cloud-101",
      name: "Cloud Computing 101",
      issuer: "AWS Educate · Amazon Web Services",
      year: "2022",
      badgeImage: {
        src: "/aws-educate-introduction-to-cloud-101-training-badg.png",
        alt: "AWS Educate Cloud Computing 101 trained badge",
      },
    },
    {
      id: "cert-linkedin-cybersecurity-at-work",
      name: "Cybersecurity at Work",
      issuer: "LinkedIn Learning",
      year: "2026",
      badgeImage: {
        src: "/Large-Use_RGB_Blue_72px_Learning_RGB.png",
        alt: "LinkedIn Learning",
      },
      certificatePdf: {
        href: "/linkedin-certificate.pdf",
        label: "View certificate",
      },
    },
  ] satisfies AcademicCertificate[],
  awards: [
    {
      id: "award-deans-list",
      name: "Dean’s List — 5 Consecutive Semesters",
      issuer: "George Brown Polytechnic",
      description:
        "Awarded Dean’s List recognition for five consecutive semesters with a 3.89 GPA, reflecting consistent academic excellence throughout my program.",
      lettersPdf: {
        href: "/deans-list-awards.pdf",
        label: "View letters",
      },
    },
  ] satisfies AcademicAward[],
  transcript: {
    label: "Request transcript",
    description:
      "I can share my official transcript on request. Email me and I’ll follow up with the next step.",
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Transcript request")}`,
  },
};

// -----------------------------------------------------------------------------
// ACADEMIC_PROJECTS - keep exactly one isCapstone: true (GlamUp); edit links in repo URLs
// -----------------------------------------------------------------------------
export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "glamup",
    title: "GlamUp - Beauty Services Marketplace (Capstone)",
    description:
      "A full-stack mobile application connecting clients with beauty professionals, enabling service discovery, booking, and profile management in a single platform.\n\nDeveloped using React Native, TypeScript, and Expo, with Firebase for backend services and data management. Focused on building scalable booking workflows, clean UI components using React Native Paper, and a user-friendly mobile experience.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Firebase",
      "React Native Paper",
    ],
    isCapstone: true,
    links: {
      github: "https://github.com/meric-yassine/GlamUp_Capstone_2026.git",
      report: "/#capstone",
    },
  },
  {
    id: "inventory-mvc",
    title: "Inventory Management System",
    description:
      "Web-based inventory management system built with ASP.NET MVC, supporting product tracking, CRUD operations, and structured data management.",
    technologies: ["ASP.NET MVC", "C#", "SQL Server"],
    links: {
      watchDemo: "https://www.youtube.com/watch?v=5MWn51EPhNM",
      repository:
        "https://gitlab.com/comp30957152344/comp3095_assignment01.git",
    },
  },
  {
    id: "voting-app",
    title: "Voting Application",
    description:
      "Web application allowing users to securely submit and track votes, with dynamic content rendering and database integration using PHP and MySQL.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    links: {
      watchDemo: "https://www.youtube.com/watch?v=30SltqyYDV0",
      github: "https://github.com/meric-yassine/Voting-Application.git",
    },
  },
  {
    id: "ml-project",
    title: "Machine Learning Project",
    description:
      "Machine learning project using a COVID-19 symptoms dataset to train a Decision Tree model for infection prediction, including preprocessing, feature selection, and evaluation.",
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "Decision Tree",
      "Data preprocessing",
      "Model evaluation",
    ],
    links: {
      watchDemo: "https://www.youtube.com/watch?v=SGGF_v0FSO0",
      github: "https://github.com/meric-yassine/ML-covid-prediction.git",
    },
  },
  {
    id: "gomoku-ai-minimax",
    title: "Gomoku Game with AI (Minimax)",
    description:
      "Command-line Gomoku (Five in a Row) game implemented in Java, featuring both human vs. human and human vs. AI modes using a minimax algorithm with alpha-beta pruning.",
    technologies: [
      "Java",
      "Data Structures",
      "Algorithms",
      "Minimax",
      "Alpha-Beta Pruning",
      "Recursion",
    ],
    links: {
      github: "https://github.com/meric-yassine/gomoku-ai-minimax.git",
    },
  },
];

// -----------------------------------------------------------------------------
// CAPSTONE_TABS — GlamUp deliverables; PDFs live in /public/capstone/ (update paths here)
// -----------------------------------------------------------------------------
export const CAPSTONE_TABS: CapstoneTab[] = [
  {
    id: "summary",
    label: "Summary",
    documentTitle: "Project Summary",
    paragraphs: [
      "High-level overview of the GlamUp capstone: problem, scope, and what the product delivers.",
    ],
    documentLinks: [
      {
        label: "Open PDF",
        href: "/capstone/Project_Summary_GlamUp!.pdf",
      },
    ],
  },
  {
    id: "vision",
    label: "Vision",
    documentTitle: "Project Vision",
    paragraphs: [
      "Product vision and goals for the beauty-services marketplace experience.",
    ],
    documentLinks: [
      {
        label: "Open PDF",
        href: "/capstone/ProjectVision_GlamUp.pdf",
      },
    ],
  },
  {
    id: "requirements",
    label: "Requirements",
    documentTitle: "High-Level Requirements",
    paragraphs: [
      "High-level requirements that define what GlamUp must support for users and stakeholders.",
    ],
    documentLinks: [
      {
        label: "Open PDF",
        href: "/capstone/High_Level_Requirements.pdf",
      },
    ],
  },
  {
    id: "plan",
    label: "Plan",
    documentTitle: "Project Plan",
    paragraphs: [
      "Project plan: milestones, timeline, and how the team organized capstone work.",
    ],
    documentLinks: [
      {
        label: "Open PDF",
        href: "/capstone/Project_Plan.pdf",
      },
    ],
  },
  {
    id: "analysis",
    label: "Design",
    documentTitle: "Requirements Analysis & Design",
    paragraphs: [
      "Requirements analysis and design decisions shaping the GlamUp application.",
    ],
    documentLinks: [
      {
        label: "Open PDF",
        href: "/capstone/Requirements%20Analysis_Design.pdf",
      },
    ],
  },
  {
    id: "wireframes",
    label: "Wireframes",
    documentTitle: "Wireframes & Mockups",
    paragraphs: [
      "UI mockups and screen flows for the GlamUp mobile experience.",
    ],
    documentLinks: [
      {
        label: "Open PDF",
        href: "/capstone/F25_T08_Mockups.pdf",
      },
    ],
  },
  {
    id: "status",
    label: "Status",
    documentTitle: "Status Reports",
    paragraphs: [
      "Progress reports from the capstone: status, risks, and next steps across the term.",
    ],
    documentLinks: [
      {
        label: "Open report I (PDF)",
        href: "/capstone/ProjectReport1.pdf",
      },
      {
        label: "Open report II (PDF)",
        href: "/capstone/ProjectReport2.pdf",
      },
    ],
  },
  {
    id: "implementation",
    label: "Build",
    documentTitle: "Implementation",
    paragraphs: ["Implementation documentation will be added here."],
  },
];

export const professionalSection = {
  headings: {
    volunteer: "Volunteering",
    recommendations: "References",
  },
  /** Order is row-major for the 2×2 “Other Experience” grid: three roles, then volunteering */
  workExperience: [
    {
      id: "work-student-ambassador",
      title: "Student Ambassador",
      organization: "George Brown Polytechnic",
      logo: {
        src: "/logo_gbp.svg",
        alt: "George Brown Polytechnic logo",
      },
      dates: "May 2025 – Present",
      description:
        "Assisted students with technology-related inquiries, including campus systems and digital tools. Acted as a liaison between students and college services, resolving issues and supporting access to resources.",
    },
    {
      id: "work-tjx-sales",
      title: "Sales Associate",
      organization: "TJX Canada",
      logo: {
        src: "/tjx.png",
        alt: "TJX Companies logo",
      },
      dates: "Sep 2024 – Present",
      description:
        "Provided customer support in a fast-paced retail environment, resolving issues and mentoring new associates on POS systems and store procedures. Recognized for teamwork and reliability during high-volume periods.",
    },
    {
      id: "work-architect-mimari",
      title: "Architect",
      organization: "Mimari Araştırmalar Ltd.",
      logo: {
        src: "/mimari_arastirmalar_logo.jpg",
        alt: "Mimari Araştırmalar logo",
      },
      dates: "Feb 2019 – Mar 2020",
      description:
        "Worked on architectural design and project planning, translating client requirements into structured solutions. Coordinated with teams, managed project details, and contributed to budgeting and procurement. Developed strong analytical thinking, attention to detail, and problem-solving skills.",
    },
  ] satisfies ProfessionalVolunteerEntry[],
  volunteer: [
    {
      id: "vol-open-house",
      title: "Open House Student Volunteer",
      organization: "George Brown Polytechnic",
      logo: {
        src: "/logo_gbp.svg",
        alt: "George Brown Polytechnic logo",
      },
      dates: "Apr 2024",
      description:
        "Welcomed and guided prospective students and families during campus events, answering questions about programs and student life and helping create a positive experience.",
    },
  ] satisfies ProfessionalVolunteerEntry[],
  recommendations: {
    body: "Reference letters from instructors or supervisors available on request.",
  },
};
