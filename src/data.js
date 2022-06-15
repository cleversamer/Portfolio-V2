const skills = [
  { title: "All", selected: true },
  { title: "HTML" },
  { title: "CSS" },
  { title: "Sass" },
  { title: "JavaScript" },
  { title: "Git & GitHub" },
  { title: "React" },
  { title: "Redux" },
  { title: "Node & Express" },
  { title: "MongoDB" },
  { title: "Firebase" },
];

const skillSets = [
  {
    title: "Programming languages",
    set: [{ title: "JavaScript" }],
  },
  {
    title: "Front-end development",
    set: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "JavaScript" },
      { title: "React" },
      { title: "Redux" },
    ],
  },
  {
    title: "Back-end development",
    set: [
      { title: "Node & Express" },
      { title: "MongoDB" },
      { title: "Firebase" },
    ],
  },
  {
    title: "Full-stack development",
    set: [{ title: "Git & GitHub" }],
  },
];

const projects = [
  {
    id: "project-1",
    title: "Hotel Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a facere quod quisquam, illo eaque.",
    imageURL: "/assets/linkedin.png",
    appURL: "https://samer-linkedin.firebaseapp.com/",
    sourceURL: "https://github.com/cleversamerr/LinkedIn",
    techStack: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "JavaScript" },
      { title: "React" },
      { title: "Redux" },
      { title: "Firebase" },
    ],
  },
];

export const getSkillSets = () => {
  return skillSets;
};

export const getSkills = () => {
  return skills.filter((skill) => !skill.visible);
};

export const getProjects = () => {
  return projects;
};
