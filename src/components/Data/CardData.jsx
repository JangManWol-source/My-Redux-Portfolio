import joellibee from "../../assets/joellibee.png";
import health from "../../assets/health-crud.png";
import mobile from "../../assets/mobile.png";
import netflix from "../../assets/netflix.png";
const cardData = [
  {
    id: Math.random().toString(),
    img: health,
    title: "Health Information CRUD MERN Stacks",
    description:
      "I used Mern stacks which is MongoDB, Express.js, React.js and Node.js. In this project, I learned how to connect or communicate to my frontend component through the backend.",
    built: [
      { item: "react.js" },
      { item: "redux-toolkit" },
      { item: "material-ui" },
      { item: "mongoDB" },
      { item: "node.js" },
      { item: "express.js" },
    ],
    github: "https://github.com/JangManWol-source/mern-stacks-health-crud",
    demo: "http://health-crud.jamisjoecristian.com/",
  },
  {
    id: Math.random().toString(),
    img: joellibee,
    title: "Jollibee Clone App Named Joellibee",
    description:
      "In this project, I learned redux-toolkit. Managing global state and actions in each component.",
    built: [
      { item: "react.js" },
      { item: "redux-toolkit" },
      { item: "material-ui" },
      { item: "html" },
      { item: "css" },
      { item: "tailwind" },
    ],
    github: "https://github.com/JangManWol-source/Joellibee",
    demo: "http://joellibee.jamisjoecristian.com/",
  },
  {
    id: Math.random().toString(),
    img: netflix,
    title: "Netflix Home Page",
    description:
      "In this project I explore all about on how to implement react-slick in project and how does it works.",
    built: [
      { item: "react.js" },
      { item: "redux-toolkit" },
      { item: "material-ui" },
      { item: "html" },
      { item: "css" },
      { item: "tailwind" },
    ],
    github: "https://github.com/JangManWol-source/Netflix-Cloned",
    demo: "https://jade-daffodil-b46ab0.netlify.app/",
  },
  {
    id: Math.random().toString(),
    img: mobile,
    title: "ICCT Colleges Learning Management System",
    description:
      "I am the mobile app developer of this ongoing thesis project. The development is still in progress.",
    built: [
      { item: "android studio" },
      { item: "firebase" },
      { item: "material-ui" },
      { item: "xml" },
      { item: "kotlin" },
    ],
    github: "https://github.com/JangManWol-source/ICCT-LMS",
    demo: "https://drive.google.com/file/d/17HXaV6Ca1s7ZaH0gZOBFJp72GFuqXYGo/view?usp=sharing",
  },
];

export default cardData;
