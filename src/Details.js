// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profill.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nodejs from "./assets/techstack/nodejs.png";
import flask from "./assets/techstack/flask.png";
import phhp from "./assets/techstack/phhp.png";
import python from "./assets/techstack/python.png";

// Porject Images
import projectImage1 from "./assets/projects/backendpenyakitkulit.jpg";
import projectImage2 from "./assets/projects/gemastik.png";
import projectImage3 from "./assets/projects/capstone.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Gilbertus Kristo Anugerah Adviandito ",
  tagline: "I am Backend Enthusiast",
  img: profile,
  about: `Hello, I am Gilbertus Kristo Anugerah Adviandito, a 6th-semester Informatics Engineering student at Universitas Negeri Semarang. I specialize in backend development and cloud computing, focusing on scalable APIs, database management, and cloud infrastructure. With experience in Node.js, PHP, GCP, Postman I am passionate about building secure, efficient, and reliable backend systems while optimizing cloud-based deployments.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/gilbertus-kristo-anugerah-adviandito-a81809240/",
  github: "https://github.com/GilbertusKristo",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "CLoud Computing Cohort",
    Company: "Bangkit Academy",
    Location: "Online",
    Type: "Full Time",
    Duration: " August 2024 - December 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: " Belajar Dasar AI",
    Company: "Dicoding Academy",
    Location: "Online",
    Type: "Full Time",
    Duration: "  26 November 2024",
  },
  {
    Position: "Menjadi Google Cloud Engineer",
    Company: `Dicoding Academy`,
    Location: "Online",
    Type: "Full Time",
    Duration: " 22 November 2024",
  },
  {
    Position: "Pengenalan ke Logika Pemrograman",
    Company: `Dicoding Academy`,
    Location: "Online",
    Type: "Full Time",
    Duration: "11 September 2024",
  },
  {
    Position: " Belajar Dasar Pemrograman JavaScript",
    Company: `Dicoding Academy`,
    Location: "Online",
    Type: "Full Time",
    Duration: "04 November 2024",
  },
  {
    Position: " Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    Company: `Dicoding Academy`,
    Location: "Online",
    Type: "Full Time",
    Duration: "04 November 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  nodejs: nodejs,
  flask: flask,
  phhp: phhp,
  python: python,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Backend Prediksi Penyakit Kulit Dicoding",
    image:  projectImage1,
    description: `Skin Disease Prediction Backend is a robust and scalable backend system designed to support artificial intelligence (AI)-based skin disease prediction services. It facilitates seamless data processing, secure API integration, and efficient model deployment to ensure accurate and real-time diagnostic support..`,
    techstack: "NodeJs",
    githubLink: "https://github.com/GilbertusKristo/backend-prediksi-penyakit-kulit",
  },
  {
    title: "HealthBot With Artificial Intellegence",
    image: projectImage2,
    description: `HealthBot is a health management application for office employees that has advanced features supported by artificial intelligence. HealthBot helps companies create a healthier and more productive workforce. This application also plays a role in improving welfare.       `,
    techstack: "HTML/CSS, JavaScript",
    githubLink: "https://github.com/InitialH14/HealthBot-True.git",
  },
  {
    title: "AI-Based Career Decider Application",
    image: projectImage3,
    description: `Skybound is an app designed to help fresh graduates find careers that match their traits through psychotests and personalized learning modules. It focuses on career personalization and progress tracking through tailored study modules.`,
    techstack: "NodeJs, Flask",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Skyboundd",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "gilbertuskristo@gmail.com",
  phone: "+62 859 748 30337",
};
