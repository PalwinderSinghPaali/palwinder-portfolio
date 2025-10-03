import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Palwinder",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/Palwinder-1.jpg",
  location: "Chandigarh, India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Punjabi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Learn & Grow with {person.firstName}</>,
  description: (
    <>
       I share insights on modern frameworks, best practices, and industry trends. Stay updated with tutorials, tips, and expert guidance to enhance your coding skills and build real-world projects.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PalwinderSinghPaali",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/palwinder-singh-98775b221/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/paali__palwinder_/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:palwinder.singhofficial9@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Palwinder Singh, a Full Stack Developer at <InlineCode>Contriverz</InlineCode>, where I craft seamless and interactive user experiences. 
      Specialize in building high-performance, scalable web applications.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Palwinder Singh, a passionate MERN Stack Developer with 4+ years of experience in building scalable and high-performance web applications. 
        I specialize in React, NodeJS, Next.js, React Native, JavaScript, TypeScript, MySQL, PostgreSQL, MongoDb, ElectronJS, Docker, AWS  and other modern web technologies, 
        crafting seamless user experiences with clean, efficient code. I thrive on solving complex problems and creating interactive, visually stunning web solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Contriverz",
        timeframe: "Oct 2022 - Present",
        role: "MERN/PERN Stack Developer",
        achievements: [
          <>
            Independently spearheaded and successfully developed and deployed a large-scale database projects on servers, Chrome extensions that can handle Millions concurrent
            users with minimal downtime.
          </>,
          <>
            Led teams in developing and implementing backend
            processes, fostering collaboration and ensuring high-quality
            deliverables. Handled regular client calls. Directed project
            lifecycles from conception to deployment, mentoring team
            members.
          </>,
          <>
          Designed algorithms to generate and display custom trading
          indicators on interactive charts, proficient in integrating Socket.IO,
          Churnkey, Firebase, Rabbit MQ, Docker, Chat Bots, Stripe, Payment Gateways, Subscription etc.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/TraderEdge-1.jpg",
            alt: "TraderEdge",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Nerddnest-1.jpg",
            alt: "Nerddnest",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "OOP's Info Solution Pvt. Ltd.",
        timeframe: "Mar 2022 - Sept 2022",
        role: "React Developer",
        achievements: [
          <>
            Gained proficiency in React.js for building dynamic and responsive web applications.
          </>,
          <>
            Developed multiple live projects.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Panjab University, Chandigarh, India",
        description: <>Bachelor of Engineering (Computer Science & Enginnering)</>,
      },
      {
        name: "Govt. Model Sr. Sec. School, Sector 33, Chandigarh, India",
        description: <>Class XII</>,
      },
      {
        name: "Govt. Model Sr. Sec. School, Sector 44, Chandigarh, India",
        description: <>Class X</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        languages:[
          "React JS", "Next.js", "React Native", "Remix JS", "HTML", "CSS", "Tailwind CSS", "Electron JS"
        ],
      },
      {
        title: "Backend",
        languages:[
          "Node JS", "Express JS", "Firebase", "Socket IO", "Redis", "Rabbit MQ"
        ],
      },
      {
        title: "Programming",
        languages:[
          "JavaScript", "TypeScript"
        ],
      },
      {
        title: "Databases",
        languages:[
          "PostgreSQL", "MySQL", "MongoDb", "Supabase"
        ],
      },
      {
        title: "Devops",
        languages:[
          "GIT", "Docker", "AWS", "Nginx", "Apache"
        ],
      },
      {
        title: "Payment Gateway",
        languages:[
          "Stripe", "Paypal"
        ],
      },
      {
        title: "Others",
        languages:[
          "Tanstack Query", "RTK Query", "PayloadCMS"
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/projects/project-01/TraderEdge-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Nerddnest-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Tekmart-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Tracebale-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/MietWohl-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Donkey-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Tracerice-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/TraderEdge-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Moawen-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/10xTraders-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Tekmart-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Traderedge-ChromeExtension-1.avif",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Nerddnest-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Tekmart-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Instantly-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const projects = [
  {
    title: "TraderEdge",
    description: `TraderEdge is a backtesting and strategy analysis tool designed for traders to refine and test their trading strategies using historical market data.`,
    url: "https://traderedge.app/",
    path: "/work/traderedge",
    // Images from https://pexels.com
    image: "/images/projects/project-01/TraderEdge-1.jpg",
  },
  {
    title: "TraceBale",
    description: `TraceBale by CottonConnect is a digital traceability platform that tracks cotton and raw materials at key stages, enhancing supply chain transparency.`,
    url: "https://tracebale.com/",
    path: "/work/tracebale",
    image: "/images/projects/project-01/Tracebale-1.jpg",
  },
  {
    title: "Donkey",
    description: `Donkey – the ultimate destination for global entertainment! Watch HD Movies & TV Shows online for Free!`,
    url: "https://donkey.to/",
    path: "/work/donkey",
    image: "/images/projects/project-01/Donkey-1.jpg",
  },
  {
    title: "Imaginarium",
    description: `Professional AI writing software with story development tools, character creation, and collaboration features. Trusted by professional creators.`,
    url: "https://imaginarium.page/",
    path: "/work/imaginarium",
    image: "/images/projects/project-01/imaginarium-main-1.png",
  },
  {
    title: "MietWohl",
    description: `At mietWohl, various tenants from all over Germany will answer your questions about whether the new environment and surroundings match your expectations of a new rental apartment. `,
    url: "http://212.132.98.168/home",
    path: "/work/mietwohl",
    image: "/images/projects/project-01/MietWohl-1.jpg",
  },
  {
    title: "Aife - Art Is For Everyone",
    description: `Discover unique artworks from talented artists. Browse our curated collection of contemporary art.`,
    url: "https://aife.vercel.app/",
    path: "/work/aife",
    image: "/images/projects/project-01/aife-1.png",
  },
  {
    title: "10xTraders.AI",
    description: "10xTraders AI helps you create AI-driven trading strategies to dominate the markets. Automate trading with ease using our advanced strategy builder.",
    url: "https://10xtraders.ai/",
    path: "/work/10x-traders",
    image: "/images/projects/project-01/10xTraders-1.jpg",
  },
    {
    title: "eSimPro",
    description: `One-stop platform for hassle-free global connectivity. Explore a range of eSim data packages, ensuring seamless, secure connections for travelers worldwide. Stay connected effortlessly with eSim Pro.`,
    url: "https://esim-pro.com/",
    path: "/work/esimpro",
    image: "/images/projects/project-01/eSimPro-1.png",
  },
  {
    title: "TraderEdge(Chrome Extension)",
    description: `Trader Edge Chrome Extension is a powerful tool for backtesting and recording trading data. Designed to enhance the functionality of the TraderEdge backtesting software.`,
    url: "https://trader-edge.en.softonic.com/chrome/extension",
    path: "/work/traderedge=extension",
    image: "/images/projects/project-01/Traderedge-ChromeExtension-1.avif",
  },  
  {
    title: "NerddNest",
    description: "NerddNest is a social media platform used for online game streaming like twitch. Here users can Add, Interact, Post with each others, can also create events etc.",
    url: "",
    path: "/work/nerddnest",
    image: "/images/projects/project-01/Nerddnest-1.jpg",
  },
  {
    title: "Instantly.ai",
    description: "All-in-one cold outreach platform for business growth. Easily find, reach, and convert prospects with AI-powered automation, high deliverability, and a built-in lead database.",
    url: "https://instantly.ai/",
    path: "/work/instantly",
    image: "/images/projects/project-01/Instantly-1.jpg",
  },
  {
    title: "Tekmart",
    description: "Tekmart is an application, used to create bots using different methods for TikTok. Which are used to increase reach, replies, messages etc.",
    url: "",
    path: "/work/tekmart",
    image: "/images/projects/project-01/Tekmart-1.jpg",
  },
  {
    title: "TraceRice",
    description: "TraceRice by CottonConnect is a digital traceability platform that tracks rice and raw materials at key stages, enhancing supply chain transparency.",
    url: "",
    path: "/work/tracerice",
    image: "/images/projects/project-01/Tracerice-1.jpg",
  }
]

const expertise = [
  {
    title: "React JS",
    description: `React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.`,
    url: "https://react.dev/",
    image: "/images/gallery/React.png",
  },
  {
    title: "Next.js",
    description: `Next.js is a React framework for building full-stack web applications. It enables server-side rendering, static site generation, and optimized performance.`,
    url: "https://nextjs.org/",
    image: "/images/gallery/nextjs.jpeg",
  },
  {
    title: "Node JS",
    description: `Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. A fast and scalable runtime for building backend applications using JavaScript.`,
    url: "https://nodejs.org/en",
    image: "/images/gallery/Node.png",
  },
  {
    title: "PostgreSQL",
    description: `A powerful, robust, open-source relational database management system (RDBMS) known for its scalability, reliability, and advanced querying capabilities.`,
    url: "https://www.postgresql.org/",
    image: "/images/gallery/postgres.png",
  } 
]

export { person, social, newsletter, home, about, blog, work, gallery, projects, expertise };
