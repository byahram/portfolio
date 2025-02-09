// [Common] Nav List
export const navList = {
  "/": { name: "home" },
  "/about": { name: "about" },
  "/career": { name: "career" },
  "/project": { name: "project" },
  "/voice": { name: "voice" },
};

// [Home] Gallery List
export const galleryList = [
  { id: 1, src: "/images/home/mongol.jpg", alt: "몽골" },
  { id: 2, src: "/images/home/spring.jpg", alt: "영종도" },
  { id: 3, src: "/images/home/hongkong2.jpg", alt: "홍콩 " },
  { id: 4, src: "/images/home/mongol2.jpg", alt: "몽골" },
  { id: 5, src: "/images/home/jeju.jpg", alt: "한라산" },
  { id: 6, src: "/images/home/lv.jpg", alt: "라스베가스 그랜드캐년" },
];

// [About] Profile
export const profile = {
  photo: "/images/home/profile.jpg",
  phone: "010-****-****",
  email: "ahram0223@naver.com",
  github: "https://github.com/byahram",
  location: "서울 서대문구",
};

// [About] Education List
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

// [About] Skills List
export const skillsList = {
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

// [About] Certification List
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

// [Project] Tech Stack Options
export const techStackOptions = [
  "React",
  "Next.js",
  "Vue",
  "Nuxt.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Tailwindcss",
];
