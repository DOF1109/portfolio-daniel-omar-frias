import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const resumeData = {
  name: "Daniel Omar Frias",
  profession: "Full Stack Web Developer",
  email: "friasdaniel.1109@gmail.com",
  address: {
    url: "https://www.google.com/maps/place/Salta/@-24.2077744,-65.4550191,7z/data=!3m1!4b1!4m6!3m5!1s0x941b0d2938ead0c7:0x8b4a1bd1f6c37998!8m2!3d-25.2529539!4d-64.7162415!16zL20vMDJrX2Zw?entry=ttu",
    text: "Salta, Argentina"
  },

  socials: {
    linkedin: {
      url: "https://www.linkedin.com/in/daniel-omar-frias/",
      text: "Daniel Omar Frias",
      icon: LinkedInIcon,
    },
    github: {
      url: "https://github.com/DOF1109",
      text: "DOF1109",
      icon: GitHubIcon,
    },
  },

  about: "🚀 ¡Hola!, soy un Full Stack Web Developer con una sólida formación académica. Aplico metodologías ágiles, principios SOLID, ETC y DRY.\n\n🔟 Soy adaptable, colaborativo y centrado en objetivos. Mis habilidades blandas me permiten trabajar excelente en equipo. Creo en brindar soluciones a través de la tecnología.\n\n🎯 Busco aportar mi mentalidad abierta y dinamismo, creciendo tanto personal como profesionalmente para poder aportar un valor agregado a mi trabajo.\n\n💬 Si quieres saber más sobre mí, me puedes contactar por LinkedIn, enviarme un email, acordemos una encuentro o una llamada.",

  experiences: [
    {
        title: "Instrumentista Industrial - TGN S.A.",
        date: "Ene. 2018 - Actualidad",
        description: "Programación de PLCs. Coordinación de trabajos con contratistas externos. Relación con clientes y proveedores. Mantenimiento de sistemas de automatización industrial.",
    },
    {
        title: "Servicio técnico - Autónomo",
        date: "Ene. 2014 - Dic. 2017",
        description: "Mantenimiento, instalación, configuración y actualización de sistemas operativos, software y hardware.",
    }
  ],

  education: [
    {
        title: "Professional Developer - Digital House",
        date: "Oct. 2022 - Actualidad",
        description: "Carrera de desarrollo web diseñada por Mercado Libre, Globant y Digital House, donde imparten conocimientos técnicos y soft skills.",
    },
    {
        title: "Curso de Responsive Web Design - EDteam",
        date: "Sep. 2022 - Oct. 2022",
        description: "Diseño de sitios web y aplicaciones para cualquier tamaño de pantalla.",
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
        title: "Técnico Universitario en Programación - Universidad Nacional de Salta",
        date: "Feb. 2014 - Mar. 2019",
        description: "Carrera universitaria con formación en análisis, diseño e implementación de programas informáticos.",
    },
    {
        title: "Técnico en Industrias de Procesos - EET N° 3.143",
        date: "Ene. 2006 - Dic. 2011",
        description: "Capacitación profesional para desempeñarse en el ámbito industrial.",
    },
    {
        title: "Diploma de Capacidad en Inglés - Cultural Argentino Británica de Salta",
        date: "Mar. 2002 - Dic. 2010",
        description: "Capacitación para comunicarse en inglés. Además de redacción y traducción del idioma.",
    }
  ]
};

export default resumeData;
