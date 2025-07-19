import Lang from "./lang";

const userInfo = {
    about: {
        greeting: "Hello There!",
        aboutMe: `My name is ${Lang.name}, a multidisciplinary 
              designer & developer. I'm always down for something new and challenging!
              I'm here to help you create beautifully formatted websites. 
              My projects mostly include web development.`,
    },
    social: {
        gmail: "abhishekbudakoti23@gmail.com",
        phone: "+919672131111",
        github: "https://github.com/Abhishek-budhakoti",
        linkedin: "https://www.linkedin.com/in/abhishek-budakoti",
        fullName: "Abhishek Budakoti"
    },


    projects: [
        {
            id: 1,
            title: 'INVOICE-GENRETOR',
            description: `The Async Invoice Project is a modern, single-page application built with React.js that allows users to create, preview, and manage invoices asynchronously. It offers a smooth, responsive interface designed for freelancers, businesses, or service providers needing lightweight invoice automation.
            link:-https://pokemoneapi23.netlify.app/`,
            alter: 'async-invoice',
            image: './photo.jpg',
        },
          {
            id: 2,
            title: 'POKEDEX',
            description: `The Async Invoice Project is a modern, single-page application built with React.js that allows users to create, preview, and manage invoices asynchronously. It offers a smooth, responsive interface designed for freelancers, businesses, or service providers needing lightweight invoice automation.`,
           

            alter: 'async-invoice',
            image: './photo.jpg',
        },
        {
            id: 3,
            title: 'NOTES WEBPAGE',
            description: `It is a webpage built using React.js and Axios that implements full CRUD operations. It demonstrates how to post, edit (update), and delete data using an existing API with Axios commands and React Hooks. This web app is hosted at: https://react-fullstack-axios.netlify.app/`,
            alter: 'notes-webpage',
            image: './photo.jpg',
        },

        {
            id: 4,
            title: 'TO-DO WEBPAGE',
            description: `To-Do Webapp is a React-based project for managing a personal to-do list. Users can add tasks, mark them as completed, or delete them.`,
            alter: 'todo-webpage',
            image: './photo.jpg',
        },
        {
            id: 2,
            title: 'REACT PORTFOLIO',
            description: `Designed and developed a ReactJS portfolio 
        with fancy 3D animations using Three.js for 
        the background element.Which i managed by Ai`,
            alter: 'React Portfolio',
            image: './photo.jpg',
        }
    ]
};

export default userInfo;
