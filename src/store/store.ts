// Nav List
export const navList = {
  "/": { name: "home" },
  "/about": { name: "about" },
  "/work": { name: "work" },
  "/project": { name: "project" },
  "/contact": { name: "contact" },
};

// Home - Gallery List
export const galleryList = [
  { id: 1, src: "/images/mongol.jpg", alt: "몽골 사원에서" },
  { id: 2, src: "/images/spring.jpg", alt: "버들이랑" },
  { id: 3, src: "/images/hongkong2.jpg", alt: "홍콩 해변가" },
  { id: 4, src: "/images/mongol2.jpg", alt: "몽골에서 푸르공 타고" },
  { id: 5, src: "/images/jeju.jpg", alt: "한라산 등산" },
  { id: 6, src: "/images/lv.jpg", alt: "라스베가스 그랜드캐년" },
];

// About - Profile
export const profile = {
  photo: "/images/profile.jpg",
  phone: "010-0000-0000",
  email: "ahram0223@naver.com",
  github: "https://github.com/byahram",
  bio: "Full-stack developer with a passion for building efficient and scalable web applications using React, Next.js, and Node.js.",
  location: "Seoul, South Korea",
};

// About - Education List
export const educationList = [
  {
    id: 3,
    college: "Boise State University",
    location: "Boise, ID",
    degree: "B.S.",
    major: "Computer Science",
    gpa: "3.34/4.0",
    status: "졸업",
    duration: {
      from: "2016.01",
      to: "2018.12",
    },
  },
  {
    id: 2,
    college: "Santa Monica College",
    location: "Santa Monica, CA",
    degree: "A.A.",
    major: "Accounting",
    gpa: "3.54/4.0",
    status: "편입",
    duration: {
      from: "2015.01",
      to: "2015.12",
    },
  },
  // {
  //   id: 1,
  //   college: "Idaho State University",
  //   location: "Pocatello, ID",
  //   degree: "B.A.",
  //   major: "General Business",
  //   gpa: "3.72/4.0",
  //   status: "편입",
  //   duration: {
  //     from: "2014.01",
  //     to: "2014.12"
  //   }
  // }
];

// About - ExperienceList
export const experienceList = [
  {
    id: 2,
    company: "(주)원스인터랙티브",
    team: "개발팀",
    position: "대리",
    role: "프론트엔드 개발자",
    details: ["", "", ""],
    skills: ["Vue.js", "Nuxt.js", "Php"],
    duration: {
      from: "2024.03",
      to: "",
    },
    projects: [
      {
        projId: 0,
        title: "Project A",
        description: "A web application for managing user data and analytics.",
        technologies: ["Vue.js", "Vuetify", "Vuex"],
        link: "https://projectA.com",
      },
      {
        projId: 1,
        title: "Project B",
        description:
          "E-commerce platform for a local business, integrating payment gateway.",
        technologies: ["Nuxt.js", "Stripe API", "Tailwind CSS"],
        link: "https://projectB.com",
      },
    ],
  },
  {
    id: 1,
    company: "(주)씨티케이",
    team: "클립 ICT팀",
    position: "사원",
    role: "프론트엔드 개발자",
    details: ["", "", ""],
    skills: ["Php", "Laravel", "Bootstrap"],
    duration: {
      from: "2022.11",
      to: "2024.02",
    },
    projects: [
      {
        projId: 0,
        title: "Project C",
        description: "A corporate website using PHP and Laravel.",
        technologies: ["PHP", "Laravel", "Bootstrap"],
        link: "https://projectC.com",
      },
      {
        projId: 1,
        title: "Project D",
        description:
          "Internal tool for project management and task assignments.",
        technologies: ["Laravel", "MySQL", "jQuery"],
        link: "https://projectD.com",
      },
    ],
  },
  {
    id: 0,
    company: "(주)스마트컨버전스",
    team: "R&D 연구개발팀",
    position: "연구원",
    role: "안드로이드 앱 개발자",
    details: ["", "", ""],
    skills: ["Java", "Android Studio", "Unity", "C++"],
    duration: {
      from: "2024.03",
      to: "~",
    },
    projects: [
      {
        projId: 0,
        title: "Project E",
        description:
          "An Android app for fitness tracking with data syncing features.",
        technologies: ["Java", "Android Studio", "Firebase"],
        link: "https://projectE.com",
      },
      {
        projId: 1,
        title: "Project F",
        description: "AR-based game developed using Unity for Android.",
        technologies: ["Unity", "C#", "Vuforia"],
        link: "https://projectF.com",
      },
    ],
  },
];

// About - Skill List
export const skillList = {
  technical: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "Bootstrap",
      "TailwindCSS",
    ],
    backend: ["PHP", "Laravel", "Node.js", "MySQL"],
    mobile: ["Java", "Android Studio"],
    tools: ["VSCode", "IntelliJ", "HeidiSQL", "Postman", "Figma", "FileZilla"],
  },
  soft: [
    "Effective Communication",
    "Smart Collaboration",
    "Easy Adaptability",
    "Time Management",
    "Problem Solving",
    "Creativity & Innovations",
  ],
};

// About - Certification List
export const certificationList = [
  {
    id: 6,
    name: "정보처리기사",
    organized: "한국산업인력공단",
    date: "2024.09",
  },
  {
    id: 5,
    name: "SQL 개발자",
    organized: "한국데이터산업진흥원",
    date: "2023.12",
  },
  {
    id: 4,
    name: "웹디자인기능사",
    organized: "한국산업인력공단",
    date: "2023.09",
  },
  // {
  //   id: 3,
  //   name: "한국사능력검정시험 3급",
  //   organized: "국사편찬위원해",
  //   date: "2020.07",
  // },
  // {
  //   id: 2,
  //   name: "워드프로세서 1급",
  //   organized: "대한상공회의소",
  //   date: "2020.05",
  // },
  // {
  //   id: 1,
  //   name: "2종보통운전면허",
  //   organized: "경찰청(운전면허시험관리단)",
  //   date: "2019.01",
  // },
];

// Languages.ts
export const Languages = [
  "Korean (Native)",
  "English (Fluent)",
  "Japanese (Intermediate)",
];

// Project - Project List
export const projectsList = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    techStack: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of project 3",
    techStack: ["React", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of project 4",
    techStack: ["Node.js", "Express", "MongoDB"],
  },
];

// Project - Tech Stack Options
export const techStackOptions = [
  "React",
  "Next.js",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "CSS",
];
