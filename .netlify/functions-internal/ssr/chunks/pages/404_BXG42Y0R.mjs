/* empty css                                      */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderSlot, g as renderTransition, h as renderHead, i as renderComponent, j as fade, m as maybeRenderHead } from '../astro_C5HHWdbc.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                      */
/* empty css                                      */
/* empty css                        */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ErrorLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorLayout;
  const { title, description } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate(_a || (_a = __template(["<html", ' data-astro-cid-phvk24jt> <head><meta charset="UTF-16"><meta name="error" content="error-page"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/site-jupiter-logo.png"><meta name="generator"', "><title>", "</title>", "", "</head> <body data-astro-cid-phvk24jt", "> ", ' <!-- <script src="../scripts/darklightmode-control.ts"><\/script> -->  </body></html>'])), addAttribute(currentLocale, "lang"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-phvk24jt": true }), renderHead(), addAttribute(renderTransition($$result, "p2injs3v", fade({ duration: "0.4s" }), ""), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/layouts/ErrorLayout.astro", "self");

const RESUME = {
  en: {
    "basics": {
      "name": "Gabriel Mayantz Remes",
      "label": "Software developer",
      "image": "/photo.jpg",
      "email": "mailto:gabm.remes@gmail.com?Subject=Interesado%20en%20el%20curso",
      "phone": "https://api.whatsapp.com/send?phone=5493816170091",
      "summary": "I am a FullStack Developer specializing in Frontend with Angular, boasting significant experience in designing and developing web applications. While I have honed my skills primarily in Angular, I am genuinely interested in transitioning to backend development using Java. My commitment lies in contributing to project success by implementing best development practices and continuous learning.",
      "linkedIn": "https://www.linkedin.com/in/gabriel-mayantz-remes/",
      "github": "https://github.com/Gabusy07",
      "location": {
        "region": null,
        "country": "Argentina"
      }
    },
    "work": [
      {
        "name": "NoCountry",
        "position": "Backend developer",
        "urls": ["https://www.nocountry.tech/"],
        "startDate": "2024-02-02",
        "endDate": null,
        "summary": "Participated in selections conducted by NoCountry in the development of server side web applications, using Java and Spring Boot as development technologies and working under agile work methods as like scrum.",
        "highlights": ["Java developer", "data base design", "pair programming"]
      },
      {
        "name": "Techforb - Avla",
        "position": "Fullstack developer",
        "urls": ["https://techforb.com/en", "https://www.avla.com/cl/corp"],
        "startDate": "2023-04-02",
        "endDate": "2024-01-02",
        "summary": "Contributed to the development of digital products for Avla, a multinational risk insurance company, while part of the consulting firm. Contributed to the creation of digital solutions, focusing on learning and applying best development practices. Worked closely with more experienced colleagues, gaining valuable experience in the complete software development lifecycle and meeting established quality standards to ensure successful project delivery. Additionally, actively collaborated in resolving backend team errors, providing a comprehensive perspective on software development.",
        "highlights": ["Angular developer", "Scrum", "Jira"]
      },
      {
        "name": "NoCountry",
        "position": "Backend developer",
        "urls": ["https://www.nocountry.tech/"],
        "startDate": "2022-12-02",
        "endDate": "2023-04-02",
        "summary": "Participated in cohorts conducted by NoCountry in the development of multiple server side web applications, using Java and Spring Boot as development technologies.",
        "highlights": ["Java develop", "data base design", "Product manager", "pair programming", "Trello"]
      }
    ],
    "education": [
      {
        "institution": "Universidad Nacional de Tucuman",
        "area": "Humananities",
        "studyType": "Bachelor"
      }
    ],
    "skills": [
      {
        "name": "CSS"
      },
      {
        "name": "Angular"
      },
      {
        "name": "Git"
      },
      {
        "name": "Tailwind"
      },
      {
        "name": "Bootstrap"
      },
      {
        "name": "Scss"
      },
      {
        "name": "Typescript"
      },
      { "name": "Astro.js" },
      {
        "name": "Java"
      },
      {
        "name": "Springboot"
      },
      {
        "name": "Hibernate"
      },
      {
        "name": "JUnit"
      },
      {
        "name": "Mysql"
      },
      {
        "name": "MongoDB"
      },
      {
        "name": "Postgresql"
      },
      {
        "name": "Postman"
      },
      {
        "name": "Microservices"
      },
      {
        "name": "Firebase"
      },
      {
        "name": "Docker"
      },
      {
        "name": "Python"
      },
      {
        "name": "Github"
      },
      {
        "name": "Scrum"
      },
      {
        "name": "Jira"
      },
      {
        "name": "Linux"
      }
    ],
    "languages": [
      {
        "language": "English",
        "flag": "/us-flag.png",
        "fluency": "intermediate level",
        "level": "B2"
      },
      {
        "language": "Spanish",
        "fluency": "Native speaker",
        "flag": "/spain-flag.png",
        "level": null
      }
    ],
    "references": [
      {
        "name": "",
        "reference": "Reference…"
      }
    ],
    "projects": [
      {
        "name": "TripMate",
        "isActive": false,
        "startDate": null,
        "endDate": null,
        "description": "Five-week project carried out with a large multidisciplinary team for noCountry. I took on the role in the backend team, performing tasks such as database design, class design, and providing technical solutions support to my team members. I played a prominent role in team organization and communication. I strengthened soft skills by pair programming.",
        "picture": "/tripmate-logo.png",
        "highlights": ["#2023", "NoCountry"],
        "url": "https://github.com/No-Country/s7-09-T-JavaReact"
      },
      {
        "name": "Smart Businees Tracker",
        "isActive": true,
        "startDate": null,
        "endDate": null,
        "description": "Project carried out in collaboration with a large multidisciplinary team. I took on the main role in the backend team, performing tasks such as application database design and providing technical solutions support to my team members. I played a prominent role in team organization as well as communication among other members from areas such as frontend and UX.",
        "picture": "/sbt-icon.png",
        "highlights": ["#2024", "NoCountry"],
        "url": "https://github.com/No-Country/s13-11-m-java"
      },
      {
        "name": "Data manager aplication",
        "isActive": true,
        "startDate": null,
        "endDate": null,
        "description": "Personal project in which, through the Google Gemini API, I can generate actions to analyze a database based on user-input instructions and execute actions accordingly.",
        "picture": null,
        "highlights": ["#2024"],
        "url": null
      },
      {
        "name": "Xepelin",
        "isActive": false,
        "startDate": null,
        "endDate": null,
        "description": "Project aiming to clone the main functionalities of a real application. It was a multidisciplinary project in which my role was as a product manager. I had to conduct a detailed assessment of the main functionalities and organize and coordinate teams, as well as implement agile work methodologies such as Scrum and the use of tools like Trello.",
        "picture": "/xepelin-logo.png",
        "highlights": ["#2023", "NoCountry"],
        "url": "https://github.com/No-Country/s8-04-m-node-react-xepelin"
      },
      {
        "name": "Lumini",
        "isActive": false,
        "startDate": null,
        "endDate": null,
        "description": "Five weeks project. One of my first multidisciplinary collaborative projects. My role was focused not only on the development of the code but also on strengthening the group, supporting task management, and analyzing project requirements.",
        "picture": "/noCountry-logo.jpg",
        "highlights": ["#2022", "NoCountry"],
        "url": "https://github.com/No-Country/C9-G34"
      }
    ]
  },
  es: {
    "basics": {
      "name": "Gabriel Mayantz Remes",
      "label": "Desarrollador de software",
      "image": "/photo.jpg",
      "email": "mailto:gabm.remes@gmail.com?Subject=Interesado%20en%20el%20curso",
      "phone": "https://api.whatsapp.com/send?phone=5493816170091",
      "summary": "Soy un Desarrollador FullStack especializado en Frontend con Angular, con una amplia experiencia en el diseño y desarrollo de aplicaciones web. Aunque he perfeccionado mis habilidades principalmente en Angular, estoy genuinamente interesado en hacer la transición al desarrollo backend utilizando Java. Mi compromiso radica en contribuir al éxito del proyecto implementando las mejores prácticas de desarrollo y aprendiendo continuamente.",
      "linkedIn": "https://www.linkedin.com/in/gabriel-mayantz-remes/",
      "github": "https://github.com/Gabusy07",
      "location": {
        "region": null,
        "country": "Argentina"
      }
    },
    "work": [
      {
        "name": "NoCountry",
        "position": "Backend developer",
        "urls": ["https://www.nocountry.tech/"],
        "startDate": "2024-02-02",
        "endDate": null,
        "summary": "Participé en selecciones realizadas por NoCountry en el desarrollo de aplicaciones web del lado del servidor, utilizando Java y Spring Boot como tecnologías de desarrollo y trabajando bajo métodos de trabajo ágiles como scrum.",
        "highlights": ["Desarrollador Java", "diseño de base de datos", "pair programming"]
      },
      {
        "name": "Techforb - Avla",
        "position": "Desarrollador Fullstack",
        "urls": ["https://techforb.com/en", "https://www.avla.com/cl/corp"],
        "startDate": "2023-04-02",
        "endDate": "2024-01-02",
        "summary": "Contribuí al desarrollo de productos digitales para Avla, una compañía multinacional de seguros de riesgo, mientras formaba parte de la firma consultora. Contribuí a la creación de soluciones digitales, centrándome en aprender y aplicar las mejores prácticas de desarrollo. Trabajé en estrecha colaboración con colegas más experimentados, obteniendo experiencia valiosa en el ciclo de vida completo de desarrollo de software y cumpliendo con los estándares de calidad establecidos para garantizar la entrega exitosa del proyecto.",
        "highlights": ["Desarrollador Angular", "Scrum", "Jira"]
      },
      {
        "name": "NoCountry",
        "position": "Backend developer",
        "urls": ["https://www.nocountry.tech/"],
        "startDate": "2022-12-02",
        "endDate": "2023-04-02",
        "summary": "Participé en cohortes realizadas por NoCountry en el desarrollo de múltiples aplicaciones web del lado del servidor, utilizando Java y Spring Boot como tecnologías de desarrollo.",
        "highlights": ["Desarrollador Java", "diseño de base de datos", "Product manager", "pair programming", "Trello"]
      }
    ],
    "education": [
      {
        "institution": "Universidad Nacional de Tucumán",
        "area": "Humanidades",
        "studyType": "Licenciatura"
      }
    ],
    "skills": [
      { "name": "CSS" },
      { "name": "Angular" },
      { "name": "Git" },
      { "name": "Tailwind" },
      { "name": "Bootstrap" },
      { "name": "Scss" },
      { "name": "Typescript" },
      { "name": "Astro.js" },
      { "name": "Java" },
      { "name": "Springboot" },
      { "name": "Hibernate" },
      { "name": "JUnit" },
      { "name": "Mysql" },
      { "name": "MongoDB" },
      { "name": "Postgresql" },
      { "name": "Postman" },
      { "name": "Microservices" },
      { "name": "Firebase" },
      { "name": "Docker" },
      { "name": "Python" },
      { "name": "Github" },
      { "name": "Scrum" },
      { "name": "Jira" },
      { "name": "Linux" }
    ],
    "languages": [
      {
        "language": "Inglés",
        "flag": "/us-flag.png",
        "fluency": "Nivel intermedio",
        "level": "B2"
      },
      {
        "language": "Español",
        "fluency": "Hablante nativo",
        "flag": "/spain-flag.png",
        "level": null
      }
    ],
    "references": [
      {
        "name": "",
        "reference": "Referencia…"
      }
    ],
    "projects": [
      {
        "name": "TripMate",
        "isActive": false,
        "startDate": null,
        "endDate": null,
        "description": "Proyecto de cinco semanas realizado con un gran equipo multidisciplinario para NoCountry. Me desempeñé en el equipo de backend, realizando tareas como diseño de base de datos, diseño de clases y brindando soporte técnico a mis compañeros de equipo. Jugué un papel destacado en la organización y comunicación del equipo. Fortalecí habilidades blandas mediante la programación en pareja.",
        "picture": "/tripmate-logo.png",
        "highlights": ["#2023", "NoCountry"],
        "url": "https://github.com/No-Country/s7-09-T-JavaReact"
      },
      {
        "name": "Smart Businees Tracker",
        "isActive": true,
        "startDate": null,
        "endDate": null,
        "description": "Proyecto realizado en colaboración con un gran equipo multidisciplinario. Me desempeñé en el papel principal en el equipo de backend, realizando tareas como diseño de base de datos de la aplicación y brindando soporte técnico a mis compañeros de equipo. Jugué un papel destacado en la organización del equipo, así como en la comunicación entre otros miembros de áreas como frontend y UX.",
        "picture": "/sbt-icon.png",
        "highlights": ["#2024", "NoCountry"],
        "url": "https://github.com/No-Country/s13-11-m-java"
      },
      {
        "name": "Aplicación de gestión de datos",
        "isActive": true,
        "startDate": null,
        "endDate": null,
        "description": "Proyecto personal en el que, a través de la API de Google Gemini, creo funciones para analizar una base de datos basada en instrucciones de entrada del usuario y ejecutar acciones en consecuencia.",
        "picture": null,
        "highlights": ["#2024"],
        "url": null
      },
      {
        "name": "Xepelin",
        "isActive": false,
        "startDate": null,
        "endDate": null,
        "description": "Proyecto destinado a clonar las principales funcionalidades de una aplicación real. Fue un proyecto multidisciplinario en el que mi rol fue como product manager. Tuve que realizar una evaluación detallada de las principales funcionalidades y organizar y coordinar equipos, así como implementar metodologías de trabajo ágiles como Scrum y el uso de herramientas como Trello.",
        "picture": "/xepelin-logo.png",
        "highlights": ["#2023", "NoCountry"],
        "url": "https://github.com/No-Country/s8-04-m-node-react-xepelin"
      },
      {
        "name": "Lumini",
        "isActive": false,
        "startDate": null,
        "endDate": null,
        "description": "Proyecto de cinco semanas. Uno de mis primeros proyectos colaborativos multidisciplinarios. Mi rol se centró no solo en el desarrollo del código, sino también en fortalecer el grupo, apoyar la gestión de tareas y analizar los requisitos del proyecto.",
        "picture": "/noCountry-logo.jpg",
        "highlights": ["#2022", "NoCountry"],
        "url": "https://github.com/No-Country/C9-G34"
      }
    ]
  }
};

const languages = {
  spanish: "es",
  english: "en"
};
const defaultLang = "en";
const ui = {
  es: {
    "title.about": "Sobre mi",
    "title.lang": "Idiomas",
    "title.experience": "Mi experiencia",
    "title.project": "Proyectos",
    "title.skill": "Conocimientos tecnicos",
    "title.education": "Educación",
    "nav.contact": "contacto",
    "footer.text": "Contáctame",
    "header.language": "Idioma",
    "404Title": "",
    "404Description": "",
    "404Advice": "",
    "404Redirect": "",
    "project.inProgress": "En progreso",
    "go-site": "ir a"
  },
  en: {
    "title.about": "About me",
    "title.lang": "Languages",
    "title.experience": "My experience",
    "title.project": "My projects",
    "title.skill": "My Skills",
    "title.education": "Education",
    "nav.contact": "contact",
    "footer.text": "Contact me",
    "404Title": "The address you are looking for has not been found",
    "404Advice": " You can return to the beginning through the following link ",
    "404Description": "",
    "404Redirect": "return to the start",
    "header.language": "Language",
    "project.inProgress": "In progress",
    "go-site": "go to"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
function getResume(lang) {
  let resume = RESUME.en;
  if (lang === "es")
    resume = RESUME.es;
  return resume;
}

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const lang = getLangFromUrl(Astro2.url);
  const translate = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "ErrorLayout", $$ErrorLayout, { "title": "Error 404", ",": true, "description": translate("404Description"), "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="error_container border border-gray-300 rounded-xl" data-astro-cid-zetdm5md> <div class="flex gap-x-4" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md> <img src="/sentiment_sad_FILL0_wght400_GRAD0_opsz24.svg" alt="" data-astro-cid-zetdm5md> </span> <h3 class="text-left text-2xl" data-astro-cid-zetdm5md> ${translate("404Title")} </h3> <span data-astro-cid-zetdm5md><i data-astro-cid-zetdm5md> <img src="/info_FILL0_wght400_GRAD0_opsz24.svg" alt="info" data-astro-cid-zetdm5md> </i></span> </div> <div class="ml-9 mt-3 flex justify-start items-end gap-x-3" data-astro-cid-zetdm5md> <small data-astro-cid-zetdm5md> ${translate("404Advice")} </small> <img class="mt-1" src="/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg" alt="" data-astro-cid-zetdm5md> <a class="text-blue-700 text-base" href="./" data-astro-cid-zetdm5md>${translate("404Redirect")}</a> </div> </div> ` })} `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ErrorLayout as $, RESUME as R, _404 as _, getResume as a, useTranslatedPath as b, $$ViewTransitions as c, getLangFromUrl as g, languages as l, useTranslations as u };
