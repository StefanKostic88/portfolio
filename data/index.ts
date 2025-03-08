import { JSX } from "react";

interface NavBarItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const navBarItems: NavBarItem[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

interface GridItemProp {
  title: string;
  description: string;
  id: number;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}
export const gridItems: GridItemProp[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: " /about/test2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Express clone library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E Learn App",
    des: "E Learn App is an educational platform developed using Angular 17 with standalone components and RxJS. The primary objective of this application is to create a dynamic educational environment that enhances communication between students and trainers. The portal leverages AWS API Gateway for backend communication, ensuring smooth interaction with various services.",
    img: "/projects/e-learn.png",
    iconLists: [
      "/ang.svg",
      "/tail.svg",
      "/ts.svg",
      "/rxjs-1.svg",
      "/nodejs-icon.svg",
      "/aws-api-gateway.svg",
      "/aws-lambda-1.svg",
      "/aws-dynamodb-svgrepo-com.svg",
    ],
    link: "https://e-learn-stefan.netlify.app",
  },
  {
    id: 2,
    title: "The Fit Club",
    des: "Fit Club is a modern fitness website built with React, TypeScript, and Framer Motion. It provides an interactive and engaging experience for users looking for fitness training and workout inspiration.",
    img: "/projects/fit-club.png",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://fit-club-stefan.netlify.app",
  },
  {
    id: 3,
    title: "Questions App",
    des: "Question App is a simple survey application built with React that allows users to create and participate in surveys. Designed for ease of use, the app enables users to answer questions, submit responses, and view results dynamically.",
    img: "/projects/question-app.png",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://question-app-stefan.netlify.app",
  },
  {
    id: 4,
    title: "OmniFood",
    des: "Omnifood is a simple yet visually appealing landing page built with HTML, CSS, and JavaScript. Designed to showcase a modern food delivery service, the page highlights key features, benefits, and a call-to-action for users to explore the service.",
    img: "/projects/omnifood.png",
    iconLists: [
      "/html-5-logo-svgrepo-com.svg",
      "/css-3-logo-svgrepo-com.svg",
      "/scss-svgrepo-com.svg",
      "/javascript-logo-svgrepo-com.svg",
    ],
    link: "https://omnifood-stefan.netlify.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Stefan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Aleksandar Militar",
    title: "Sportsbook manager at Betagy llc",
  },
  {
    quote:
      "Stefan is an exceptional developer with a keen eye for detail and a deep understanding of modern web technologies. His ability to quickly learn and apply new concepts makes him a valuable asset to any team.",
    name: "Aleksandar Glisic",
    title: "Senior Developer at Epam systmes",
  },
];

export const companies = [
  { id: 1, name: "html", img: "/html-5-logo-svgrepo-com.svg" },
  { id: 2, name: "css", img: "/css-3-logo-svgrepo-com.svg" },
  {
    id: 3,
    name: "javascript",
    img: "/javascript-logo-svgrepo-com.svg",
    // nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "typescript",
    img: "/ts.svg",
    // nameImg: "/hostName.svg",
  },
  {
    id: 5,
    name: "angular",
    img: "/ang.svg",
    // nameImg: "/appName.svg",
  },
  {
    id: 6,
    name: "react",
    img: "/re.svg",
    // nameImg: "/cloudName.svg",
  },

  { id: 7, name: "next.js", img: "/next.svg" },
  { id: 8, name: "node.js", img: "/nodejs-icon.svg" },
  { id: 9, name: "rxjs", img: "/rxjs-1.svg" },
  { id: 10, name: "rxjs", img: "/tail.svg" },
  { id: 11, name: "docker.", img: "/dock.svg" },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
//   {
//     id: 6,
//     name: "tailwind.",
//     img: "/tail.svg",
//     nameImg: "/tailwind.svg",
//   },
//   {
//     id: 6,
//     name: "tailwind.",
//     img: "/tail.svg",
//     nameImg: "/tailwind.svg",
//   },
//   {
//     id: 6,
//     name: "tailwind.",
//     img: "/tail.svg",
//     nameImg: "/tailwind.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - TrustDigital",
    desc: "Assisted in the development of a web-based platform using Next.js TypeScript and Tailwind css, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Web Developer -  NELKEN",
    desc: "Developing web apps using  React, TypeScript and Matirial UI.",
    className: "md:col-span-2",
    // thumbnail: "/exp2.svg",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Full Stack JavaScript Developer - Epam Systems",
    desc: "Developing web apps using Angular, Node.js, Express, AWS, Serverless, TypeScript, PostgreSQL and MongoDB.",
    className: "md:col-span-2",
    // thumbnail: "/exp3.svg",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Risk Supervisor - Betagy LLC",
    desc: " Led a comprehensive review of sports betting risk supervision processes, identifying critical gaps and streamlining workflows to enhance efficiency.",
    className: "md:col-span-2",
    // thumbnail: "/exp4.svg",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/StefanKostic88",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/cupri",
  },
  // {
  //   id: 3,
  //   img: "/twit.svg",
  // },
];
