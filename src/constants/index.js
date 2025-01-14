import project1 from "../assets/projects/project_1.webp";
import project2 from "../assets/projects/project_2.webp";
import project3 from "../assets/projects/project_3.webp";
// import project4 from "../assets/projects/project_4.webp";
import project5 from "../assets/projects/project_5.webp";

export const HERO_CONTENT = ` I am a dedicated 4th-year Electronics engineering student at Pulchowk Campus, driven by my passion for innovation and learning. Alongside my certifications in cybersecurity, I have developed a keen interest in web development, particularly frontend design and functionality. Although I am yet to gain professional experience in my field, my commitment to honesty, punctuality, and continuous growth defines my work ethic. My ultimate goal is to leverage my skills to help businesses thrive while building exceptional personal and professional experiences. Let’s create something remarkable together!`;

export const ABOUT_TEXT = `Hi! I’m an Electronics Engineering undergraduate at Pulchowk Campus in Kathmandu. I am passionate about cybersecurity and web development, with a strong drive to create innovative solutions that address real-world challenges.<br><br>

Throughout my academic journey, I’ve gained hands-on experience in various projects and freelancing roles, including data entry tasks and data annotation in Toloka. These experiences have sharpened my time management and problem-solving skills, laying a solid foundation for my professional growth.<br><br>

When I’m not coding or exploring new technologies, I enjoy singing, hiking, and immersing myself in nature. These activities fuel my creativity and keep me motivated to tackle new challenges.<br><br>

I am excited to collaborate on impactful projects and continue expanding my skills in the ever-evolving tech landscape.

`;

export const EDUCATION = [
  {
    year: "2021",
    institute: "Uniglobe College",
    description: `Completed Plus Two (High School) from Uniglobe College, Kamaladi, with a 3.59 GPA.`,
    certification: false,
  },
  {
    year: "Expected 2025",
    institute: "Pulchowk Campus",
    description: `I am expected to complete my undergraduate degree in Electronics, Communication, and Information Technology Engineering.`,
    certification: false,
  },
  {
    year: "Nov 2024",
    institute: "Microsoft and LinkedIn",
    description: `Received the "Career Essentials in Cybersecurity" certification.`,
    certification: true,
  },
  // {
  //   year: "Nov 2024",
  //   institute: "ISC2",
  //   description: `Received the "Certified in Cybersecurity" certification.`,
  //   certification: true,
  // },
];

export const COMMUNITY = [
  {
    year: "Nov 2024",
    title: "WIA x CIT Instructor",
    description: `Promoted responsible internet usage and cybersecurity awareness among students in Nepal's far-west region through interactive sessions and career guidance, fostering digital literacy and ethical technology use.`,
    certification: false,
  },
];

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Premier League Clone",
    image: project1,
    description:
      "A fully functional web app built with PostgreSQL and an API for tracking match updates, team stats, and player details.",
    technologies: ["PostgreSQL", "React", "Node.js", "Axios"],
    URL: null,
  },
  {
    title: "Wakeword and command detection AI",
    image: project2,
    description:
      "An AI model detecting a wakeword and executing commands from a set of predefined actions.",
    technologies: ["TensorFlow", "Jupyter Notebook", "Librosa", "React"],
    URL: null,
  },
  {
    title: "Greenhouse Monitoring App",
    image: project3,
    description:
      "An IoT solution visualizing sensor data and automating greenhouse control via AWS and Axios",
    technologies: [
      "React",
      "Bootstrap",
      "Highcharts",
      "Express.js",
      "AWS IoT Core",
      "AWS S3",
    ],
    URL: null,
  },
  {
    title: "Tenzies",
    image: project5,
    description:
      "Developed a web version of the popular Tenzies dice game, drawing inspiration from the Scrimba React tutorial. The project allowed me to gain a deeper understanding of utilizing localStorage in React.",
    technologies: ["React", "React Router"],
    URL: "https://tenzies-aavash.netlify.app/",
  },
];

export const CONTACT = {
  address: "Jana Marg, Peepalbot, Bansbari, Kathmandu",
  phoneNo: "+977-9861023482 ",
  email: "bhattaraiaavash1@gmail.com",
  linkedin: "LinkedIn",
};
