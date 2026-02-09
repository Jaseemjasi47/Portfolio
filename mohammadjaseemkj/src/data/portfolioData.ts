import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaPython, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

export const portfolioData = {
  personalInfo: {
    name: "Mohammad Jaseem K J",
    role: "Full Stack Developer (Python Django + React)",
    description: "I build scalable, high-performance web applications with modern technologies. Passionate about clean code, user experience, and solving complex problems.",
    email: "jaseemonline1122@gmail.com",
    phone: "+91 9995998034",
    location: "India (Open to Remote)",
    social: [
      { name: "GitHub", icon: FaGithub, url: "https://github.com/Jaseemjasi47" },
      { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/mohammadjaseemkj" }, 
      { name: "Email", icon: FaEnvelope, url: "mailto:jaseemonline1122@gmail.com" }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
        
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Brototype",
      period: "2022 – 2024",
      description: "Building scalable web applications using Django & React. Working with authentication, REST APIs, and database design. optimizing performance and ensuring clean UI/UX."
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Ociuz Infotech",
      period: "2025 – Present",
      description: "Building scalable web applications using Django & React. Working with authentication, REST APIs, and database design. optimizing performance and ensuring clean UI/UX."
    }
  ],
  education: [
    {
      degree: "BSc Computer Science",
      institution: "Calicut University",
      period: "2019 – 2022",
      description: "Focus on Computer Science fundamentals, Algorithms, and Software Engineering."
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, cart functionality, and payment gateway integration.",
      techStack: ["React", "Django", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/Jaseemjasi47",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/Jaseemjasi47",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Framer Motion to showcase projects and skills.",
      techStack: ["React", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/Jaseemjasi47",
      liveUrl: "#",
      featured: false
    }
  ]
};
