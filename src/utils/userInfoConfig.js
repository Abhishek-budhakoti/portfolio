import Lang from "./lang";

const userInfo = {
  about: {
    greeting: "Hello There!",
    aboutMe: `My name is ${Lang.name},I am from yammun nagar,Haryana and my belongings are from garhwal(uttrakhand),passed my graduation in BCA(Bachelors of computer application) in 2025 from JMIT,radaur which is affilated by kurukshetra university
         I'm a passionate and self-driven web developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js. I enjoy transforming ideas into interactive and visually appealing web experiences. While I may be new to the industry, I’m constantly learning and building projects that challenge and grow my skills. I’m excited to collaborate, contribute, and grow in real-world development environments.
         `,
    skills: [
      "React",
      "Tailwind CSS",
      "Responsive Website",
      "Git-Hub",
      "Framer Motion",
      "C++",
      "oops",
      "DSA",
      "HTML",
      "CSS",
      "java Script"
    ],
  },
  social: {
    gmail: "abhishekbudakoti23@gmail.com",
    phone: "+919992134643",
    github: "https://github.com/Abhishek-budhakoti",
    linkedin: "https://www.linkedin.com/in/abhishek-budakoti",
    fullName: "Abhishek Budakoti"
  },


  projects: [
    {
      id: 1,
      title: 'INVOICE-GENERATOR',
      description: `The Async Invoice Project is a modern, single-page application built with React.js that allows users to create, preview, and manage invoices asynchronously. It offers a smooth, responsive interface designed for freelancers, businesses, or service providers needing lightweight invoice automation.`,
      link: 'sdlfjsdklf',
      alter: 'async-invoice',
      image: './invoice.png',
    },
    {
      id: 2,
      title: 'POKEDEX',
      description: `The Pokedex project is a fun and interactive single-page app that fetches data from the Pokémon API and displays it in an intuitive UI. Built with React and styled-components.`,
      link: 'https://pokemoneapi23.netlify.app/',
      alter: 'pokedex',
      image: './pokemone.png',
    },
    {
      id: 3,
      title: 'NOTES WEBPAGE',
      description: `It is a webpage built using React.js and Axios that implements full CRUD operations. It demonstrates how to post, edit (update), and delete data using an existing API with Axios commands and React Hooks.`,
      link: 'https://postapi23.netlify.app/',
      alter: 'notes-webpage',
      image: './posts.png',
    },
    {
      id: 4,
      title: 'TO-DO WEBPAGE',
      description: `To-Do Webapp is a React-based project for managing a personal to-do list. Users can add tasks, mark them as completed, or delete them.`,
      link: 'https://reacttodoapp23.netlify.app/',
      alter: 'todo-webpage',
      image: './todo.png',
    },
    {
      id: 5,
      title: 'REACT PORTFOLIO',
      description: `Designed and developed a ReactJS portfolio with fancy 3D animations using Three.js for the background element. Which I managed using AI.`,
      link: 'https://myportfolioabhishek23.netlify.app/',
      alter: 'react-portfolio',
      image: './portfolio.png',
    }
  ]

};

export default userInfo;
