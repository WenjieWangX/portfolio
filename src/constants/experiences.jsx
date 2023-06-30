import { blackbaud, conncoll } from "../assets";

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

export default experiences;
