import {
  fullstack,
  datascentist,
  softwareengineer,
  couldengineer,
  python,
  typescript,
  sql,
  java,
  javascript,
  html,
  css,
  cshard,
  matlab,
  rstudio,
  reactjs,
  angularjs,
  flask,
  django,
  nodejs,
  jquery,
  git,
  linux,
  unity,
  mysql,
  aws,
  blackbaud,
  fdr,
  conncoll,
  cornelltech,
  camelplanner,
  sortingvisual,
  bestbuyrelational,
  datavisualization,
  sudoku,
  practitioner,
  resume,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: resume,
    title: "Resume",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: fullstack,
  },
  {
    title: "Data Scientist",
    icon: datascentist,
  },
  {
    title: "Software Engineer",
    icon: softwareengineer,
  },
  {
    title: "Cloud Engineer",
    icon: couldengineer,
  },
];

const programmingLanguages = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "C#",
    icon: cshard,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "RStudio",
    icon: rstudio,
  },
];

const frameworks = [
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "AngularJS",
    icon: angularjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
];

const developerTools = [
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "Connecticut College",
    icon: conncoll,
    iconBg: "#c2cccd",
    cardBg: "#00305f",
    date: "Sept 2021 - May 2023",
    points: [
      "Collaborated with professors to explain course material and effectively communicate it to students.",
      "Offered academic guidance to undergraduate students in Computer Science and Statistics, supporting their success in coursework.",
      "Evaluated assignments, giving constructive feedback to students to enhance their academic performance while maintaining confidentiality and professionalism.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Blackbaud",
    icon: blackbaud,
    iconBg: "#E6DEDD",
    cardBg:
      "linear-gradient(5deg, rgba(94,182,80,1) 0%, rgba(20,170,215,1) 100%)",
    date: "May 2022 - Aug 2022",
    points: [
      "Utilized AWS SDK and Python to develop a script for retrieving data from an AWS S3 Bucket.",
      "Designed and implemented a single-page web application with visualization capabilities using Angular and .NET for analyzing and downloading A/B test data, resulting in a significant reduction in time spent on running and analyzing A/B tests.",
      "Solved the challenge of fetching A/B test data from AWS S3 Bucket, improving data accessibility and enabling more efficient analysis.",
    ],
  },
  {
    title: "IGW Research Assistant",
    company_name: "Connecticut College",
    icon: conncoll,
    iconBg: "#c2cccd",
    cardBg: "#00305f",
    date: "Sept 2022 - April 2023",
    points: [
      "Conducted research on the inverse generalized Weibull distribution, using RStudio to develop and implement statistical models to analyze the distribution’s characteristics and behavior.",
      "Developed and implemented simulation tests and real world data test to validate and refine the statistical models, and ensure their accuracy and robustness.",
      "Collaborated with Professor Yan Zhuang to review findings and make recommendations for further research or application of research outcomes.",
    ],
  },
];

const educations = [
  {
    school_name: "Franklin D. Roosevelt High School",
    gpa: "94/100",
    degree: "Diploma",
    major: "",
    icon: fdr,
    iconBg: "#c2cccd",
    cardBg: "#970b22",
    date: "Sept 2015 - June 2019",
    awards: ["Distinction in Mathematics", "Dean's High Honors"],
  },
  {
    school_name: "Connecticut College",
    gpa: "3.9/4",
    degree: "Bachelor of Arts",
    major: "Computer Science & Statistics and Data Science",
    icon: conncoll,
    iconBg: "#c2cccd",
    cardBg: "#00305f",
    date: "Aug 2019 - May 2023",
    awards: [
      "Distinction in Computer Sciences",
      "Distinction in Statistics",
      "Dean's High Honors",
      "DataFest 2022 Best Business Application",
    ],
  },
  {
    school_name: "Cornell Tech",
    gpa: "3.9/4",
    degree: "Master of Engineering",
    major: "Computer Science",
    icon: cornelltech,
    iconBg: "#c2cccd",
    cardBg: "#B31B1B",
    date: "Aug 2023 - May 2024",
    awards: ["Merit Scholarships"],
  },
];

const certificates = [
  {
    name: "Certified AWS Practitioner",
    image: practitioner,
  },
];

const projects = [
  {
    name: "Camel Planner",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
      {
        name: "cpanel",
        color: "blue-text-graddient",
      },
    ],
    image: camelplanner,
    source_code_link: "https://github.com/WenjieWangX/CamelPlanner",
    website_link: "https://wenjie.digital.conncoll.edu",
  },
  {
    name: "Sorting Visualization",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: sortingvisual,
    source_code_link: "https://github.com/WenjieWangX/sorting-visualization",
    website_link: "https://wenjiewangx.github.io/sorting-visualization/",
  },
  {
    name: "Sudoku",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/WenjieWangX/sudoku",
    website_link: "https://wenjiewangx.github.io/sudoku/",
  },
  {
    name: "Simple BestBuy Database & Visualization",
    description: "",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
      {
        name: "plotly",
        color: "orange-text-gradient",
      },
    ],
    image: bestbuyrelational,
    source_code_link: "https://github.com/WenjieWangX/BestBuyDatabase",
    website_link: "",
  },
  {
    name: "Data Visualization",
    description: "",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "plotly",
        color: "green-text-gradient",
      },
      {
        name: "postgresal",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
      {
        name: "boostrap",
        color: "blue-text-gradient",
      },
    ],
    image: datavisualization,
    source_code_link:
      "https://github.com/WenjieWangX/Dockerized-Flask-PostgreSQL-Dashboard",
    website_link: "",
  },
];

export {
  navLinks,
  services,
  programmingLanguages,
  frameworks,
  developerTools,
  experiences,
  educations,
  certificates,
  projects,
};
