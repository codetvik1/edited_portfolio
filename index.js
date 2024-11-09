import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Welcome to my portfolio website. I’m a hands-on learner with a fusion of curiosity, a problem-solving attitude, and a strong technical mindset. Committed to excellence and driven by a resilient, goal-oriented approach, I embrace challenges as pathways to my growth. Scroll down to know more about me;)`;

export const ABOUT_TEXT = `I am Ritvik Bhatia, a tech enthusiast, a software developer in the making, and a student navigating the exciting landscape of IIoT at Guru Gobind Singh Indraprastha University. With a blend of theoretical knowledge, hands-on experience, and a relentless pursuit of excellence, I am poised to make a meaningful impact in the world of Industry 4.0. As I continue to chart my course through academia and beyond, I am fueled by a passion for innovation and a commitment to pushing the boundaries of what can be achieved in the ever-evolving field of technology.`;

export const EXPERIENCES = [
  {
    year: "Sept 2023 - Present ",
    role: "Executive Committee Member",
    company: "IEEE - USAR",
    description: `As an Executive Comittee Member of the IoT subchapter, I provided leadership and managed work alongside peers, effectively handling various tasks. This role enhanced my teamwork and organizational skills, allowing me to contribute to collaborative projects while fostering a productive environment focused on innovation and progress in IoT initiatives.`,
    technologies: ["IoT", "Leadership", "Public Relations",],
  },
  {
    year: "2022 - 2023",
    role: "IoT Developer Intern",
    company: "Emertxe, Banglore",
    description: `During my IoT developer internship, I created a home automation system, gaining valuable hands-on experience in foundational programming skills using C and microcontrollers. This internship also involved SDLC project building in IoT, allowing me to apply my technical knowledge in practical, real-world applications.`,
    technologies: ["SDLC", "C++", "IoT"],
  },
  {
    year: "July 2024 - Aug 2024",
    role: "Machine Learning Intern",
    company: "INCOIS, Hyderabad",
    description: `During my internship at INCOIS, I worked on a project focused on Sea Surface Temperature (SST) prediction using computer vision and image processing techniques. I gained insights into LSTM models and corporate work dynamics, conducted survey work, and explored research papers from other scientists, enriching my understanding of the field.`,
    technologies: ["Machine Learning", "Python", "OpenCV", "Tensor FLow"],
  },
  {
    year: "Aug 2023 - Sept 2023",
    role: "System Design Trainee",
    company: "CDAC, Noida",
    description: `I’ve developed expertise in PCB design using CAD software like Eagle, honed my model design skills, and deepened my knowledge of microcontroller chips and sensors. This experience has equipped me with essential skills for embedded systems, blending hands-on design proficiency with a solid technical foundation.`,
    technologies: ["PCB Designing", "Microcontrollers", "Sensors", "Hardware modelling"],
  },
];

export const PROJECTS = [
  {
    title: "IoT Attendance tracker",
    image: project1,
    description:
      "This project is used to take attendance through fingerprint sensor (used R307). The enrolled fingerprints are marked present on the google sheets wirelessly through the web hook tool IFTTT.",
    technologies: ["ESP32", "Sensors", "WebHooks", "IoT"],
  },
  {
    title: "Sea surface Temperature Forecasting",
    image: project2,
    description:
      "This project provides an innovative tool for visualizing Sea Surface Temperature (SST) data with an interactive map. Users can click on any ocean area to instantly retrieve SST values, while contour lines in a jet color palette help visualize temperature variations.",
    technologies: ["Machine Learning", "Image Processing", "Computer Vision", "Python"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Stocks Prediction",
    image: project4,
    description:
      "This project demonstrates how to predict Google's stock prices using a Long Short-Term Memory (LSTM) recurrent neural network in Python. It utilizes historical stock data to train the model and then tests its predictive capabilities on a separate test dataset. The project involves data preprocessing, model building, training, and evaluation.",
    technologies: ["Machine Learning", "Neural Networks", "LSTM", "Python"],
  },
];

export const CONTACT = {
  address: "Dwarka Sector 1-A, New Delhi, India",
  phoneNo: "+91-8076586384",
  email: "ritvik.connect@gmail.com",
};
