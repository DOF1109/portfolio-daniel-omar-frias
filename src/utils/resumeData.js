import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as soundRentalsImages from "../assets/images/projects/soundRentals/soundRentalsIndex";
import * as dentalCareImages from "../assets/images/projects/dentalCare/dentalCareIndex";
import * as scrapperImages from "../assets/images/projects/scrapper/scrapperIndex";

const resumeData = {
  name: "Daniel Omar Frias",
  profession: "Software Developer",
  job: "Instrumentista Industrial",
  email: "friasdaniel.1109@gmail.com",
  address: {
    url: "https://www.google.com/maps/place/Salta/@-24.2077744,-65.4550191,7z/data=!3m1!4b1!4m6!3m5!1s0x941b0d2938ead0c7:0x8b4a1bd1f6c37998!8m2!3d-25.2529539!4d-64.7162415!16zL20vMDJrX2Zw?entry=ttu",
    text: "Salta, Argentina",
  },

  socials: {
    linkedin: {
      url: "https://www.linkedin.com/in/danielomarfrias/",
      text: "Daniel Omar Frias",
      icon: LinkedInIcon,
    },
    github: {
      url: "https://github.com/DOF1109",
      text: "DOF1109",
      icon: GitHubIcon,
    },
  },

  about:
    "●    ¡Hola!, soy un Software Developer apasionado por la innovación y la tecnología. Con experiencia en desarrollo de software y formación académica. Comprometido a ofrecer soluciones de alta calidad.\n\n●    Busco contribuir a proyectos desafiantes en un entorno dinámico. Mi objetivo es aportar valor agregado a las empresas mientras avanzo personal y profesionalmente.\n\n●    Mi reconocimiento como empleado destacado del año 2022 es un testimonio de mi proactividad y capacidad de trabajo en equipo.\n\n●    Si quieres saber más sobre mí, me puedes contactar por LinkedIn, enviarme un email, acordemos un encuentro, una llamada o a través de éste portfolio.",

  experiences: [
    {
      title: "Front End Developer - E3 Digital Dev",
      date: "Jul. 2024 - Oct. 2024",
      description:
        "Desarrollador Front End utilizando React como eje central y demás librerías de utilidad. Trabajo de medio tiempo.",
    },
    {
      title: "Front End Developer - SoundRentals",
      date: "May. 2024 - Jun. 2024",
      description:
        "Programación de una aplicación web para reservas de DJs para enventos.",
    },
    {
      title: "Full Stack Developer - Personal Portfolio",
      date: "Ene. 2024 - Mar. 2024",
      description:
        "Desarrollo de un sitio web para mi portfolio personal.",
    },
    {
      title: "Full Stack Developer - Dental Clinic",
      date: "Oct. 2023 - Dic. 2023",
      description:
        "Programación de una aplicación web para una clínica dental con diferentes perfiles de usuario.",
    },
    {
      title: "Android Developer - ScrAPPer",
      date: "Nov. 2019 - Mar. 2020",
      description:
        "Programación de una aplicación Android para realizar el seguimiento de los equipos “scraper” por tuberías industriales.",
    },
    {
      title: "Instrumentista Industrial - TGN S.A.",
      date: "Ene. 2018 - Actualidad",
      description:
        "Programación de PLCs. Coordinación de trabajos con contratistas externos. Relación con clientes y proveedores. Mantenimiento de sistemas de automatización industrial.",
    },
    {
      title: "Servicio técnico - Autónomo",
      date: "Ene. 2014 - Dic. 2017",
      description:
        "Mantenimiento, instalación, configuración y actualización de sistemas operativos, software y hardware.",
    },
  ],

  education: [
    {
      title: "Professional Developer - Digital House",
      date: "Oct. 2022 - Jun. 2024",
      description:
        "Carrera de desarrollo web diseñada por Mercado Libre, Globant y Digital House, donde imparten conocimientos técnicos y soft skills.",
    },
    {
      title: "Curso de Responsive Web Design - EDteam",
      date: "Sep. 2022 - Oct. 2022",
      description:
        "Diseño de sitios web y aplicaciones para cualquier tamaño de pantalla.",
    },
    {
      title: "Curso de HTML5 y CSS3 - Azul School",
      date: "Jul. 2022 - Sep. 2022",
      description: "Maquetación y desarrollo web.",
    },
    {
      title: "Curso de WordPress - EDteam",
      date: "May. 2022 - Jun. 2022",
      description: "Creación y diseño de sitios web con WordPress.",
    },
    {
      title:
        "Técnico Universitario en Programación - Universidad Nacional de Salta",
      date: "Feb. 2014 - Mar. 2019",
      description:
        "Carrera universitaria con formación en análisis, diseño e implementación de programas informáticos.",
    },
    {
      title: "Técnico en Industrias de Procesos - EET N° 3.143",
      date: "Ene. 2006 - Dic. 2011",
      description:
        "Capacitación profesional para desempeñarse en el ámbito industrial.",
    },
    {
      title:
        "Diploma de Capacidad en Inglés - Cultural Argentino Británica de Salta",
      date: "Mar. 2002 - Dic. 2010",
      description:
        "Capacitación para comunicarse en inglés. Además de redacción y traducción del idioma.",
    },
  ],

  skills: [
    {
      title: "Front End",
      description: [
        "React",
        "Next.js",
        "Material UI",
        "RESTful APIs",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      title: "Back End",
      description: [
        "Node.js",
        "Express.js",
        "Prisma",
        "Java",
        "Spring Boot",
        "Hibernate",
        "Swagger",
      ],
    },
    {
      title: "Útiles",
      description: [
        "Inglés",
        "Resolución de problemas",
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Aprendizaje continuo",
        "Adaptación",
        "Innovación",
      ],
    },
    {
      title: "Control y versionado",
      description: ["Git", "GitHub", "Scrum"],
    },
    {
      title: "Bases de datos",
      description: ["MySQL Workbench", "SQL"],
    },
    {
      title: "Básicos",
      description: ["Testing", "AWS Cloud", "Docker"],
    },
  ],

  projects: [
    {
      title: "SoundRentals",
      caption: "Aplicación web de reservas de DJs para enventos.",
      description:
        "Aplicación web para realizar reservas de Djs para eventos. Además permite su administración y navegación como visitante dependiendo del tipo de usuario.",
      principalImage: soundRentalsImages.SoundRentals_1,
      arrayImages: Object.values(soundRentalsImages), // Esto crea un array con las imágenes

      links: [
        {
          socialRed: "GitHub",
          url: "https://github.com/DOF1109/sound-rentals",
          icon: GitHubIcon,
        },
      ],
    },
    {
      title: "Dental Care",
      caption: "App web para clínica dental.",
      description:
        "Aplicación web de gestión de turnos para una clínica dental. Te permite administrar turnos, odontólogos, pacientes y otros aspectos relacionados con la gestión de turnos en una clínica dental.",
      principalImage: dentalCareImages.DentalCare_1,
      arrayImages: Object.values(dentalCareImages),

      links: [
        {
          socialRed: "GitHub",
          url: "https://github.com/DOF1109/dental-clinic",
          icon: GitHubIcon,
        },
      ],
    },
    {
      title: "ScrAPPer",
      caption: "App mobile para seguimiento de 'scrapers'.",
      description:
        "Aplicación de seguimiento de 'scrapers' para una empresa de transporte de gas. Te permite rastrear el equipo contando los 'golpes' escuchados, estimar el tiempo de llegada del equipo a un punto específico y ver su velocidad de movimiento en la cañería.",
      principalImage: scrapperImages.ScrAPPer_1,
      arrayImages: Object.values(scrapperImages),
      links: [
        {
          socialRed: "GitHub",
          url: "https://github.com/DOF1109/AppScraper",
          icon: GitHubIcon,
        },
      ],
    },
  ],
};

export default resumeData;
