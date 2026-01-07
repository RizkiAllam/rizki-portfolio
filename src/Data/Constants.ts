import { BookOpen, Award } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import type { Project, Skill } from '../Types';

export const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const RESUME_DATA = `
Name: Rizki Nur'allam
Role: Web Developer
Location: Ngawi, East Java, Indonesia
Phone: +62 813-6832-7763
Email: jendralra101@gmail.com
LinkedIn: www.linkedin.com/in/rizkiallam
GitHub: github.com/RizkiAllam
Summary: Web Developer with experience in building responsive web applications using HTML5, CSS3, Tailwind CSS, React, and Vue...
Skills: HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, React, Vue, MySQL, Node.js, Express.js, MongoDB, Git, UI/UX.
`;

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Sibolang Web",
    type: "Fullstack",
    description: "A tourist destination web app. Developed backend APIs with Express.js and Node.js, storing data in MySQL and using Docker.",
    tech: ['Vue.js', 'Express.js', 'MySQL', 'Docker', 'Tailwind'],
    githubUrl: "https://github.com/Sibolangid"
  },
  {
    id: 2,
    title: "Taman Wanasutan",
    type: "Frontend",
    description: "Built frontend features using HTML, CSS, and JavaScript within a PHP-based web application.",
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Responsive UI'],
    githubUrl: "https://github.com/xendsa/Taman-Wanasutan/tree/rizz"
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    type: "Frontend",
    description: "A modern dashboard for managing products and orders using React and Redux Toolkit with dark mode support.",
    tech: ['React', 'Redux', 'Chart.js', 'Tailwind'],
    githubUrl: "https://github.com/RizkiAllam"
  },
  {
    id: 4,
    title: "Weather Tracker",
    type: "Fullstack",
    description: "Real-time weather application connecting to OpenWeatherMap API with user location tracking features.",
    tech: ['Next.js', 'TypeScript', 'API Integration'],
    githubUrl: "https://github.com/RizkiAllam"
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'HTML5', icon: FaHtml5, color: 'group-hover:text-orange-600' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'group-hover:text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'group-hover:text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-blue-500' },
  { name: 'React', icon: FaReact, color: 'group-hover:text-cyan-400' },
  { name: 'Vue.js', icon: FaVuejs, color: 'group-hover:text-emerald-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-cyan-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'group-hover:text-green-600' },
  { name: 'Express.js', icon: SiExpress, color: 'group-hover:text-gray-500 dark:group-hover:text-gray-300' },
  { name: 'MySQL', icon: SiMysql, color: 'group-hover:text-blue-700' },
  { name: 'MongoDB', icon: SiMongodb, color: 'group-hover:text-green-500' },
  { name: 'Git', icon: FaGitAlt, color: 'group-hover:text-red-600' },
  { name: 'GitHub', icon: FaGithub, color: 'group-hover:text-gray-900 dark:group-hover:text-white' },
  { name: 'Figma', icon: FaFigma, color: 'group-hover:text-purple-500' },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Front End Developer Intern",
    company: "Cataliz Indonesia",
    period: "Aug 2023 - Jan 2024",
    description: [
      "Developed responsive, mobile-first web interfaces using Vue 3 and Tailwind CSS.",
      "Contributed to frontend development of PIN-POINT Web application.",
      "Built reusable UI components with TypeScript."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    school: "UIN Sunan Kalijaga, Yogyakarta",
    period: "Sep 2021 - Jun 2025",
    description: "Cum Laude Graduate",
    icon: BookOpen,
    isMain: true // Penanda untuk pendidikan utama
  },
  {
    id: 2,
    degree: "Baparekraf Digital Talent",
    school: "Fullstack Web Development",
    period: "2024",
    description: "Intensive Bootcamp",
    icon: Award,
    isMain: false
  },
  {
    id: 3,
    degree: "English Language Training",
    school: "Mr. Bob English Course",
    period: "2025",
    description: "Language Proficiency",
    icon: Award,
    isMain: false
  }
];