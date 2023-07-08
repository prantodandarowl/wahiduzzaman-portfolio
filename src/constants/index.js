import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  flutter,
  bilybd,
  tesla,
  fiberx,
  carrent,
  jobit,
  tripguide,
  threejs,
  django,
  fiverxWeb,
  mixedmasala,
  recipeusingapi,
  ml2,
  ml1,
  neloy,
  sadia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine learning Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Dango",
    icon: django,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "FiberX",
    icon: fiberx,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Oct 2021",
    points: [
      "Developing and maintaining web applications .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Diginer and Developer",
    company_name: "BilyBD",
    icon: bilybd,
    iconBg: "#383E56",
    date: "Feb 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing the payment method(Bkash,Nagad).",

    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Wahiduzzaman is an exceptional web developer, passionate and dedicated to his craft. His technical expertise and creative problem-solving make him an invaluable asset to any team.",
    name: "Ifat Naim",
    designation: "CFO",
    company: "Fiberx",
    image: neloy,
  },
  {
    testimonial:
      "Wahiduzzaman is an exceptional team member with remarkable coding expertise. His contributions have been invaluable to our  group success.",
    name: "Sadia Khan",
    designation: "Student",
    company: "North South University",
    image: sadia,
  },

];

const projects = [
  {
    name: "ISP Website",
    description:
      "Web-based platform that allows the user to enroll their services,Pay their bill and allow the admin to control the admin panel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
    ],
    image: fiverxWeb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fipi Masala",
    description:
      "E-commerce site for selling masala .That also allow the user to  pay online and chnage delivary location using live location .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mixedmasala,
    source_code_link: "https://github.com/",
  },
  {
    name: "Recipe App",
    description:
      "A Web based recipe app using API, that allow the user to search for the recipe with ingridient name or specific food name.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

    ],
    image: recipeusingapi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Data breach detection ",
    description:
      "cloud data breach detection and prevention system using Ml and encryption which will encrypt the data and if the data is safe then decrypt and kill the transfer.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "encryption",
        color: "green-text-gradient",
      },

    ],
    image: ml2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Text summarization using NLP",
    description:
      "Bangla and English abstract Text summarization .",
    tags: [
      {
        name: "Machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },

    ],
    image: ml1,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };