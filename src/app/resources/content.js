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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
    name: "X",
    icon: "x",
    link: "",
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Palwinder Singh, a passionate MERN Stack Developer with 3+ years of experience in building scalable and high-performance web applications. 
        I specialize in React, Next.js, NodeJS, JavaScript, TypeScript, MySQL, PostgreSQL, MongoDb, ElectronJS, Docker, AWS  and other modern web technologies, 
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
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
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
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
          "React JS", "Next.js", "Remix JS", "HTML", "CSS", "Tailwind CSS", "Electron JS"
        ],
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend",
        languages:[
          "Node JS", "Express JS", "Firebase", "Socket IO", "Redis"
        ],
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Programming",
        languages:[
          "JavaScript", "TypeScript"
        ],
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Databases",
        languages:[
          "PostgreSQL", "MySQL", "MongoDb", "Supabase"
        ],
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Devops",
        languages:[
          "GIT", "Docker", "AWS", "Nginx"
        ],
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Payment Gateway",
        languages:[
          "Stripe"
        ],
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Others",
        languages:[
          "Tanstack Query", "RTK Query"
        ],
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
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
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
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
    // Images from https://pexels.com
    image: "/images/projects/project-01/TraderEdge-1.jpg",
  },
  {
    title: "TraceBale",
    description: `TraceBale by CottonConnect is a digital traceability platform that tracks cotton and raw materials at key stages, enhancing supply chain transparency.`,
    url: "https://tracebale.com/",
    // Images from https://pexels.com
    image: "/images/projects/project-01/Tracebale-1.jpg",
  },
  {
    title: "Donkey",
    description: `Donkey – the ultimate destination for global entertainment! Watch HD Movies & TV Shows online for Free!`,
    url: "https://donkey.to/",
    // Images from https://pexels.com
    image: "/images/projects/project-01/Donkey-1.jpg",
  },
  {
    title: "MietWohl",
    description: `At mietWohl, various tenants from all over Germany will answer your questions about whether the new environment and surroundings match your expectations of a new rental apartment. `,
    url: "http://212.132.98.168/home",
    // Images from https://pexels.com
    image: "/images/projects/project-01/Mietwohl-1.jpg",
  },
  {
    title: "TraderEdge(Chrome Extension)",
    description: `Trader Edge Chrome Extension is a powerful tool for backtesting and recording trading data. Designed to enhance the functionality of the TraderEdge backtesting software.`,
    url: "https://trader-edge.en.softonic.com/chrome/extension",
    // Images from https://pexels.com
    image: "/images/projects/project-01/Traderedge-ChromeExtension-1.avif",
  }  
]

export { person, social, newsletter, home, about, blog, work, gallery, projects };
