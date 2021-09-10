/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Muhammad Taimoor",
  title: "Hi all, I'm Taimoor",
  subTitle: emoji(
    `Hey I'm a full stack developer. I aspire to create new ways to understand and design, experiences that can help solve problems and communicate both in anesthetic and functional sense. 
    Some of the technologies I enjoy working with include Vue.js, NodeJS, ReactJS, SailsJS, ExpressJS, AdonisJS other JS frameworks.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/113EcdrdQDSr9ECtca1mBQovFNpIGMCfJ/view",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/taimoor954",
  linkedin: "https://www.linkedin.com/in/muhammad-taimoor-bb9664170",
  gmail: "taimoormuhammad954@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/taimoor.148",
  medium: "https://medium.com/@taimoormuhammad954",
  stackoverflow: "https://stackoverflow.com/users/10425193/muhammad-taimoor",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Model Database for your website"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ) ,
    emoji(
      "⚡ Can Build micro services to make your web app highly scalable and reliable"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   /* {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    }, */
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
   /* {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }, */
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    } ,
    {
      skillName: "mongodb" ,
      fontAwesomeClassname: "fas fa-leaf"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karachi University",
      logo: require("./assets/images/KU logo.jpeg"),
      subHeader: "Bachelors in Computer Science from UBIT",
      duration: "January 2018 - January 2021",
      /*desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ] */
    },
    {
      schoolName: "St. Patrick's High School",
      logo: require("./assets/images/st.pats logo.png"),
      subHeader: "Matriculation from St.pats",
      duration: "January 2005 - January 2015",
    /*  desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }  */
    }
   ] 
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Cubix",
      companylogo: require("./assets/images/cubix.jpg"),
      date: "May 2021 – Present",
      desc: "Currently working as a backend developer for two of their applications"
    } ,
    {
      role: "Backend Developer",
      company: "S-Tech",
      companylogo: require("./assets/images/s-tech.png"),
      date: "December 2019 - Febuary 2019",
      desc: "Contributed in one of the e-commerce based on c2b model",
    /*  descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ] */
    },
    {
      role: "Software Engineer Intern",
      company: "Kcompute",
      companylogo: require("./assets/images/kcomputer.png"),
      date: "October 2019 – November 2019",
     // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

console.log("token", process.env.REACT_APP_GITHUB_TOKEN)
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  githubUserName: "taimoor954"
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/rollBliss.png"),
      projectName: "Rollbliss",
     // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rollbliss.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/atghar.png"),
      projectName: "Atghar",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://atghar.com/"
        }
      ]
    } ,
    {
      image: require("./assets/images/stairhoppers.png"),
      projectName: "Stairhoppers",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://techopialabs.com/stairhoppers/"
        }
      ]
    } 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certification from WEBICAMP",
      subtitle:
        "Completed Certifcation from WEBICAMP for React App Development.",
      image: require("./assets/images/react.png"),
      footerLink: [
      /*  {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }  */
      ] 
      
    },
    {
      title: "MERN Certification from WEBICAMP",
      subtitle:
        "Completed Certifcation from WEBICAMP for MERN App Development.",
      image: require("./assets/images/mern.png"),
      footerLink: [
       /* {
          name: "View certification",
          url: ""
        } */
      ] 
    },

    {
      title: "AI CERTIFICATION",
      subtitle: "Completed Certifcation from AI KARACHI for AI",
      image: require("./assets/images/karachiAi.png"),
      footerLink: [
       /* {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        } */
      ] 
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
