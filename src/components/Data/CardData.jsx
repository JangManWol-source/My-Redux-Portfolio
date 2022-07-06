
import joellibee from "../../assets/joellibee.png";
import health from '../../assets/health-crud.png'
const cardData = [
    {
      id: Math.random().toString(),
      img: joellibee,
      title: "Jollibee Clone App Named Joellibee",
      description: "",
      built: [
        { item: "react.js" },
        { item: "redux-toolkit" },
        { item: "material-ui" },
        { item: "mongoDB" },
        { item: "node.js" },
        { item: "express.js" },
      ],
      github: "https://github.com/JangManWol-source/Joellibee",
      demo: "http://joellibee.jamisjoecristian.com/",
    },
    {
      id: Math.random().toString(),
      img: health,
      title: "Health Information CRUD MERN Stacks",
      description: "",
      built: [
        { item: "react.js" },
        { item: "redux-toolkit" },
        { item: "material-ui" },
        { item: "html" },
        { item: "css" },
        { item: "tailwind" },
      ],
      github: "https://github.com/JangManWol-source/mern-stacks-health-crud",
      demo: "http://health-crud.jamisjoecristian.com/",
    }
  ];

  export default cardData