import { fdr, conncoll, cornelltech } from "../assets";

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

export default educations;
