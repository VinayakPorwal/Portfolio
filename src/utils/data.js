export const greetings = {
  myName: "Vinayak Porwal",
  title: "Hi , I'm",

  resumeLink:
    "https://drive.google.com/file/d/1KHR0_Yx1bMvALJtG3Mvil6D_AKzmUyM3/view?usp=sharing",

  aboutyou: `I'm ${"Vinayak Porwal"}, a full-stack developer with a drive to create impactful web applications. With a passion for problem-solving and a knack for learning, I'm trying to brings project ideas to web life. Leveraging Next.js, Node.js, and React.js, I create custom solutions that meet and exceed expectations`,
};

export const contacts = {
  title: "Contact Me",
  Subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email: "work4vinayak@gmail.com",

  mail: "mailto:work4vinayak@gmail.com",
  github: "https://github.com/vinayakporwal",
  instagram: "https://www.instagram.com/vinayak_porwal/",
  linkedin: "https://www.linkedin.com/in/vinayakporwal/",
};

export const TopProjects = [];
export const projects = [
  {
    id: 1,
    slug: "youtube-clone",
    tech: ["React.js", "Node.js", "Youtubev3 Api"],
    image: "https://craft-x.netlify.app/assets/youtool.2961e55c.png",
    title: "Youtube-Clone",
    period: "November - 2021",
    description: "Youtube Clone with Additional Features",
    points: [
      "Play And Download Videos.",
      "Customized Feed",
      "Save favorite Videos",
      "Designed in Pure CSS",
    ],
    code: "https://github.com/Vinayakporwal/youtool",
    link: "https://you-tool.vercel.app",
    deploy: "vercel",
    icon: "fa-brands fa-youtube",
  },

  {
    id: 2,
    slug: "craft-x-tools-and-api-server",
    tech: ["React.js", "Node.js", "OpenAi", "Express", "ContextAPI", "Webpack"],
    image: "https://i.ibb.co/t43Ry8j/craft-x-ss.png",
    title: "Craft-x : Tools and API Server",
    period: "November - 2021",
    description:
      "Craft-X is Services based platform that offers a wide range of web tools and Api services.",
    points: [
      "User Registration",
      "Designed in Pure CSS",
      "Token Sytem For limited use APIs, per account 50 tokens",
      "Editable Profile",
      `APi list :
          Weather Report,
          Youtube Caption Scrapper,
          Youtube Video Downloader,
          Image Generation,
          Image to Base64 convertor,`,
    ],
    code: "https://github.com/Vinayakporwal/youtool",
    link: "https://you-tool.vercel.app",
    deploy: "vercel",
    icon: "fa-solid fa-users",
  },
  {
    id: 3,
    slug: "api-server",
    tech: ["React.js", "Node.js", "OpenAi", "Express"],
    image:
      "https://webimages.mongodb.com/_com_assets/cms/l65dhtchtsbcn16hk-image3.png?auto=format%252Ccompress",
    title: "API Server",
    period: "November - 2021",
    description:
      "API Backend sever. List of API endpoints available as service on Server",
    points: [
      "BG remover",
      "Image generation with Stable diffusion ",
      "Image generation with Dalle.2 by OpenAi",
      "ChatGPT for any Queries by OpenAi",
      "And Bunch of API's all in One place",
    ],
    code: "https://github.com/Vinayakporwal/",
    link: "https://you-tool.vercel.app",
    deploy: "vercel",
    icon: "fa-solid fa-server",
  },
  {
    id: 4,
    slug: "flux-movies",
    tech: ["Next.js", "OMDb Api"],
    image: "https://craft-x.netlify.app/assets/MovieApp.e529cf3c.png",
    title: "Flux Movies",
    period: "November - 2021",
    description: "IMDb like Movie Review App",
    points: [
      "Search Movie",
      "Pagination of over 500+ movies",
      "Save favorite movies",
      "Deployed on Vercel",
    ],
    code: "https://github.com/Vinayakporwal/fluxmovies",
    link: "https://fluxmovies.vercel.app",
    icon: "fa-solid fa-clapperboard",
  },
  {
    id: 5,

    slug: "chat-application",
    tech: ["React.js", "Firebase"],
    image: "https://craft-x.netlify.app/assets/Chathook1.6ee5e0d8.png",
    title: "Chat Application",
    period: "November - 2021",
    description: "Realtime Group Chat Application with Google Auth.",
    points: [
      "Sign in/up by Google Auth.",
      "Real Time Database by FIREBASE🔥",
      "Group Chat",
      "Deployed on Firebase",
    ],
    code: "https://github.com/VinayakPorwal/chathookWebApp",
    link: "https://chathook-f2855.web.app",
    icon: "fa fa-comments",
  },
  {
    id: 6,
    slug: "social-media-app",
    tech: ["Javascript", "PHP", "MySQL"],
    image: "https://craft-x.netlify.app/assets/fookreywebs.e4aa483e.png",
    title: "Social Media App",
    period: "March - 2021",
    description: "Social Media Clone With Database",
    points: [
      "CRUD able on Post & comments",
      "User Registeration and Profile",
      "One-to-One Chat",
    ],
    code: "https://github.com/VinayakPorwal/Social-X",
    link: "http://fookreyweb.epizy.com/",
    icon: "fa fa-hashtag",
  },
  {
    id: 7,
    slug: "e-book-platform",
    tech: ["Javascript", "PHP", "MySQL"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjW5A3DAJgSzFO-wjCQzx7htRp4Ns-gfMNyA&usqp=CAU",
    title: "E-book Platform",
    period: "March - 2022",
    description: "A book reading Platform using Google Books Api",
    points: [
      "Free e-Books Search & Download",
      "User Registeration and Profile",
      "Save Searched books",
    ],
    code: "https://github.com/VinayakPorwal/e-keytaab",
    link: "",
    icon: "fa fa-book-atlas",
  },
  {
    id: 8,

    slug: "snake-game",
    tech: ["React.js"],
    image: "https://craft-x.netlify.app/assets/SnakeGame.b73d9fc3.png",
    title: "Snake Game",
    period: "March - 2022",
    description: "A Multi-level SnakeGame",
    points: [
      "Locally stored HighScore data.",
      "Easy , Medium , Hard Levels",
      "Responsive & controls for Mobile/PC",
    ],
    code: "https://github.com/VinayakPorwal/SnakeGame",
    link: "https://VinayakPorwal.github.io/SnakeGame",
    icon: "fa fa-gamepad",
  },
  {
    id: 9,
    slug: "discord-bot",
    tech: ["Python"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WQNJ6LlU1SYUiR5dEB1YV_SSrcFc7EaTHQ&usqp=CAU",
    title: "Discord Bot",
    period: "March - 2022",
    description: "A Multi-Functional Discord Bot",
    points: [
      "Can Respond to your Commands",
      "Play Any Song or Music via Youtube",
      "Download Youtube Video",
    ],
    code: "https://github.com/VinayakPorwal/SnakeGame",
    link: "https://VinayakPorwal.github.io/SnakeGame",
    icon: "fa fa-robot",
  },

  {
    id: 10,
    slug: "chat-application-2",
    tech: ["Javascript", "PHP", "MySQL"],
    image: "https://craft-x.netlify.app/assets/PhpChathook.df742cb3.png",
    title: "Chat Application",
    period: "March - 2021",
    description: "Social Media Clone With Database",
    points: [
      "User Registeration and Profile",
      "use AJAX for seamless Message Exchange.",
      "One-to-One Chat",
    ],
    code: "",
    link: "http://chathook.epizy.com",
    icon: "fa fa-comments",
  },
];

export const imageData = {
  img5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoBxFNQRyDEH-K_kcDu5Tqskdpl-v7o3K0A&usqp=CAU",
};

export const workExperience = [
  {
    name: "Petmatrix Clinic",
    duration: "March 2024 - May 2024",
    role: "Full Stack Developer",
    company: "Pet Matrix Clinic Pvt. Ltd.",
    location: "Indore, India",
    description:
      "Built a responsive portfolio website for showcasing doctors and enabling appointment booking, along with a dedicated admin panel for efficient client and doctor management.",
    skills: [
      "Responsive Web Design",
      "React.js",
      "SCSS",
      "API Integration",
      "Next.js",
      "Database Management (Mongo DB)",
      "Email-based One-time Link Authentication",
      "File Upload Service Integration",
      "Email Automation with Node-mailer and CRON jobs",
    ],
    achievements: [
      "Achieved 20% customer growth for the organization using development, communication, and problem-solving skills.",
    ],
  },
  {
    name: "Cloud-based CRM Platform",
    duration: "Aug 2023 - Nov 2023",
    role: "Frontend Developer",
    company: "Vivafox Digital Pvt. Ltd.",
    location: "Gurgaon, India (Remote)",
    description:
      "Built a cloud-based CRM platform using React.js and Tailwind CSS for user-friendly client management and marketing campaigns, with API integration, state management, and email funnel creation.",
    skills: [
      "Responsive Web Design",
      "React.js",
      "Tailwind CSS",
      "API Integration",
      "Redux-Toolkit for State Management",
      "Next.js",
      "Agile SDLC Model",
    ],
    achievements: [
      "Demonstrated expertise in building server-side rendered applications with Next.js",
    ],
  },
  {
    name: "Helper Hand",
    duration: "April 2023",
    role: "Frontend Developer",
    description:
      "Contributed to a web app connecting people with disabilities to potential helpers, building a user-friendly interface and custom React Calendar for streamlined session booking.",
    skills: [
      "Responsive Web Design",
      "React.js",
      "Tailwind CSS",
      "API Integration",
      "Bug Fixing",
      "Code Quality Enhancement",
      "Custom Form Elements Design with React-hook-form and Material UI",
    ],
    achievements: [
      "Improved validation and usability by 50% through custom form elements design",
    ],
  },
];

export const skills = {
  frontend: [
    {
      icon: "fab fa-html5",
      SkillName: "HTML-5",
    },
    {
      icon: "fab fa-css3-alt",
      SkillName: "CSS",
    },
    {
      icon: "fab fa-js",
      SkillName: "JavaScript",
    },
    {
      icon: "fa-brands fa-css3",
      SkillName: "Tailwind",
    },
    {
      icon: "fab fa-react",
      SkillName: "reactjs",
    },
    {
      icon: "fa-solid fa-n",
      SkillName: "Nextjs 13",
    },
    {
      icon: "fa-brands fa-unity",
      SkillName: "Webpack",
    },
    {
      icon: "fab fa-react",
      SkillName: "Redux-toolkit",
    },
  ],
  backend: [
    {
      icon: "fab fa-node-js",
      SkillName: "nodejs",
    },

    {
      icon: "fab fa-php",
      SkillName: "php",
    },
    {
      icon: "fab fa-python",
      SkillName: "python",
    },
    {
      icon: "fa fa-database",
      SkillName: "MongoDb",
    },
    {
      icon: "fab fa-git",
      SkillName: "Git",
    },
    {
      icon: "fab fa-github",
      SkillName: "Github",
    },
    {
      icon: "fas fa-fire",
      SkillName: "firebase",
    },
  ],
  scalingBackend: [
    {
      icon: "fa-solid fa-share-nodes",
      SkillName: "Kafka",
    },

    {
      icon: "fa-solid fa-database",
      SkillName: "Reddis",
    },
    {
      icon: "fa-brands fa-docker",
      SkillName: "Docker",
    },
    {
      icon: "fa-brands fa-aws",
      SkillName: "AWS",
    },
    {
      icon: "fa-solid fa-fire",
      SkillName: "TurboRepo",
    },
    {
      icon: "fa-solid fa-border-none",
      SkillName: "Mirco-frontend",
    },
  ],
};
