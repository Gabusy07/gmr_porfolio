/* empty css                                      */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, i as renderComponent, f as renderSlot, o as Fragment, g as renderTransition, h as renderHead, j as fade } from '../astro_C5HHWdbc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getLangFromUrl, a as getResume, u as useTranslations, R as RESUME, l as languages, b as useTranslatedPath, c as $$ViewTransitions } from './404_BXG42Y0R.mjs';
/* empty css                          */
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                                      */
/* empty css                          */

const $$Astro$z = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$About;
  const lang = getLangFromUrl(Astro2.url);
  const { basics } = getResume(lang);
  return renderTemplate`${maybeRenderHead()}<div class="text-base font-normal text-pretty"> <p>${basics?.summary}</p> </div>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/About.astro", void 0);

const $$Astro$y = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Education;
  const lang = getLangFromUrl(Astro2.url);
  const education = getResume(lang).education;
  return renderTemplate`${maybeRenderHead()}<div class="font-normal text-pretty"> ${education.map((edu) => {
    return renderTemplate`<article> <h2 class="text-lg mb-3"> ${` ${edu.studyType} in ${edu.area}`}</h2> <h4 class="text-base ">${`${lang === "en" ? "at" : "en"} ${edu.institution}`}</h4> </article>`;
  })} </div>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Education.astro", void 0);

const $$Astro$x = createAstro();
const $$Higlight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Higlight;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="text-sm font-extralight bg-blue-100 border border rounded-xl text-gray-700 text-base font-semibold lowercase px-4 py-1" data-astro-cid-z3hdeghq> ${text} </span> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Higlight.astro", void 0);

const $$Astro$w = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Experience;
  const avlaWorkCase = ["techforb", "avla"];
  const lang = getLangFromUrl(Astro2.url);
  const EXPERIENCE = getResume(lang).work;
  const translate = useTranslations(lang);
  EXPERIENCE.sort((a, b) => {
    const startDateA = new Date(a.startDate);
    const startDateB = new Date(b.startDate);
    return startDateB - startDateA;
  });
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-xpq65ryk> ${EXPERIENCE.map((exp) => {
    const fullStartDate = new Date(exp.startDate);
    const fullEndDate = exp.endDate ? new Date(exp.endDate) : /* @__PURE__ */ new Date();
    const startDate = +fullStartDate.getFullYear().toString() + "/" + (fullStartDate.getMonth() + 1).toString();
    const endDate = +fullEndDate.getFullYear().toString() + "/" + (fullEndDate.getMonth() + 1).toString();
    return renderTemplate`<li class="mb-12" data-astro-cid-xpq65ryk> <article data-astro-cid-xpq65ryk> <header class="flex text-lg justify-between items-start mb-3 font-bold text-gray-500" data-astro-cid-xpq65ryk> <div data-astro-cid-xpq65ryk> <h1 class="h1" data-astro-cid-xpq65ryk>${exp.position}</h1> <h2 class="h2" data-astro-cid-xpq65ryk>${exp.name}</h2> </div> <time class="text-base font-bold text-gray-400" data-astro-cid-xpq65ryk> ${startDate} - ${exp.endDate ? endDate : "until now"} </time> </header> <footer class="text-base text-black-700" data-astro-cid-xpq65ryk> <summary class="mb-2" data-astro-cid-xpq65ryk>${exp.summary}</summary> ${exp.urls.map((url, index) => {
      return renderTemplate`<small data-astro-cid-xpq65ryk> ${translate("go-site")} <a class="text-blue-500 font-semibold mr-4"${addAttribute(url, "href")} target="_blank" data-astro-cid-xpq65ryk> ${exp.name.toLowerCase() === "techforb - avla" ? avlaWorkCase[index] : exp.name} </a> </small>`;
    })} <ul class="flex flex-wrap gap-3 mt-5" data-astro-cid-xpq65ryk> ${exp.highlights.map((highlight) => renderTemplate`${renderComponent($$result, "Highlight", $$Higlight, { "text": highlight, "data-astro-cid-xpq65ryk": true })}`)} </ul> </footer> </article> </li>`;
  })} </ul> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Experience.astro", void 0);

const $$Astro$v = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Footer;
  const { email, github, linkedIn, phone } = RESUME.en.basics;
  const { id } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const translate = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(id, "id")} class="p-4 w-full h-[14rem] md:h-[45vh] mb-0 mt-5 flex flex-col md:flex-row items-end  bg-black" data-astro-cid-sz7xmlte> <div class="md:w-1/2" data-astro-cid-sz7xmlte> <p class="md:text-xl text-white mb-2 md:mb-0 font-bold hidden md:block" data-astro-cid-sz7xmlte>${translate("footer.text")}</p> </div> <div class="mt-14 links_container flex flex-col md:flex-row md:space-x-5 md:justify-end md:items-center w-full" data-astro-cid-sz7xmlte> <a${addAttribute(email, "href")} target="_blank" class="footer-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-envelope" viewBox="0 0 16 16" data-astro-cid-sz7xmlte> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" data-astro-cid-sz7xmlte></path> </svg> </a> <a${addAttribute(github, "href")} target="_blank" class="footer-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-github" viewBox="0 0 16 16" data-astro-cid-sz7xmlte> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-sz7xmlte></path> </svg> </a> <a${addAttribute(linkedIn, "href")} target="_blank" class="footer-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-linkedin" viewBox="0 0 16 16" data-astro-cid-sz7xmlte> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" data-astro-cid-sz7xmlte></path> </svg> </a> <a${addAttribute(phone, "href")} target="_blank" class="footer-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-whatsapp" viewBox="0 0 16 16" data-astro-cid-sz7xmlte> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" data-astro-cid-sz7xmlte></path> </svg> </a> </div> </footer> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Footer.astro", void 0);

const $$Astro$u = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, label, location, image } = RESUME.en.basics;
  const { country, region } = location;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-[50px] lg:flex-row items-center" data-astro-cid-bbe6dxrz> <div class="lg:mr-auto mb-4 lg:mb-0 lg:pr-4" data-astro-cid-bbe6dxrz> <h1 class="text-2xl lg:text-3xl font-bold mb-2" data-astro-cid-bbe6dxrz>${name}</h1> <h2 class="text-lg lg:text-xl font-semibold mb-2" data-astro-cid-bbe6dxrz>${label}</h2> <span class="text-xs lg:text-base" data-astro-cid-bbe6dxrz>${region != null ? region + "," : ""} ${country}</span> </div> <figure data-astro-cid-bbe6dxrz> <img class="img max-w-[130px] rounded-md"${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-bbe6dxrz> </figure> </div> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Hero.astro", void 0);

const $$Astro$t = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const projects = getResume(lang).projects;
  const currentLang = getLangFromUrl(Astro2.url) ?? "";
  const translate = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-amng4zvp> ${projects.map((project) => {
    return renderTemplate`<article class="p-3 m-1" data-astro-cid-amng4zvp> <header class="mb-3" data-astro-cid-amng4zvp> <a class="text-base text-green-700 font-semibold hover:text-lg hover:underline" title="See repository"${addAttribute(project.url ?? `/${currentLang}/inProgressProject/`, "href")} target="_blank" data-astro-cid-amng4zvp> <h3 class="inline text-lg" data-astro-cid-amng4zvp>${project.name}</h3> </a> ${project.isActive && renderTemplate`<span class="ml-3 text-blue-600 text-xs font-semibold" data-astro-cid-amng4zvp>
&bull; ${translate("project.inProgress")} </span>`} </header> <div class="mb-3 text-thin" data-astro-cid-amng4zvp> <figure class="mb-5" data-astro-cid-amng4zvp> <a${addAttribute(project.url ?? `/${currentLang}/inProgressProject/`, "href")} target="_blank inline-link" data-astro-cid-amng4zvp> <img class="img w-[40%] min-w-[200px] rounded-md"${addAttribute(project.picture, "src")} alt="" data-astro-cid-amng4zvp> </a> </figure> <p class="font-thin opacity-75" data-astro-cid-amng4zvp>${project.description}</p> </div> <footer data-astro-cid-amng4zvp> <ul class="flex flex-wrap gap-3 mt-5" data-astro-cid-amng4zvp> ${project.highlights.map((highlight) => {
      return renderTemplate`${renderComponent($$result, "Highlight", $$Higlight, { "text": highlight, "data-astro-cid-amng4zvp": true })}`;
    })} </ul> </footer> </article>`;
  })} </ul> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Projects.astro", void 0);

const $$Astro$s = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { id, title, icon, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`p-5 border border-gray-300 rounded-xl shadow-xl ${className}`, "class")} data-astro-cid-tdne747l> <div class="container m-2 flex justify-between" data-astro-cid-tdne747l> <h2 class="text-xl font-bold mb-5 opacity-60" data-astro-cid-tdne747l> ${title} </h2> ${icon ? renderTemplate`<img class="w-[1.5rem] h-[1.5rem]"${addAttribute(icon, "src")} data-astro-cid-tdne747l>` : null} </div> <div class="ml-2" data-astro-cid-tdne747l> ${renderSlot($$result, $$slots["default"])} </div> </section> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$r = createAstro();
const $$Angular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Angular;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"${addAttribute(width, "width")}${addAttribute(height, "height")}><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Angular.astro", void 0);

const $$Astro$q = createAstro();
const $$Git = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Git;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg data-testid="geist-icon"${addAttribute(height, "height")} stroke-linejoin="round" viewBox="0 0 16 16"${addAttribute(width, "width")} style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 1.75V1H3.25V1.75V9.09451C1.95608 9.42754 1 10.6021 1 12C1 13.6569 2.34315 15 4 15C5.42051 15 6.61042 14.0127 6.921 12.6869C8.37102 12.4872 9.7262 11.8197 10.773 10.773C11.8197 9.7262 12.4872 8.37102 12.6869 6.921C14.0127 6.61042 15 5.42051 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.37069 9.91924 6.52667 11.1749 6.8851C10.9929 7.94904 10.4857 8.9389 9.71231 9.71231C8.9389 10.4857 7.94904 10.9929 6.8851 11.1749C6.59439 10.1565 5.77903 9.35937 4.75 9.09451V1.75ZM13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4ZM4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5Z" fill="currentColor"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Git.astro", void 0);

const $$Astro$p = createAstro();
const $$EmptyIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$EmptyIcon;
  return renderTemplate``;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/EmptyIcon.astro", void 0);

const $$Astro$o = createAstro();
const $$CSS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$CSS;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"${addAttribute(width, "width")}${addAttribute(height, "height")}><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/CSS.astro", void 0);

const $$Astro$n = createAstro();
const $$Java = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Java;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346"${addAttribute(width, "width")}${addAttribute(height, "height")}> <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"></path> <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"></path> <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"></path> <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"></path> <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"></path> </svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Java.astro", void 0);

const $$Astro$m = createAstro();
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Tailwind;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 154"${addAttribute(width, "width")}${addAttribute(height, "height")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="a"><stop stop-color="#2298BD" offset="0%"></stop><stop stop-color="#0ED7B5" offset="100%"></stop></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#a)"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Tailwind.astro", void 0);

const $$Astro$l = createAstro();
const $$SCSS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SCSS;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"${addAttribute(width, "width")}${addAttribute(height, "height")}><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M301.8 378.9c-.3 .6-.6 1.1 0 0zm249.1-87a131.2 131.2 0 0 0 -58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9a122.8 122.8 0 0 0 -5.3 19.1c-2.3 11.7-25.8 53.5-39.1 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.9 77.3-42.1 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4 .8-.7 1.3-.9 1.7 .3-.5 .5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4 .3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.4-42.4c-18.4 0-44 20.2-56.6 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.8-38.2-101.9-65.2-99.1-116.5 1-18.7 7.5-67.8 127.1-127.4 98-48.8 176.4-35.4 189.8-5.6 19.4 42.5-41.9 121.6-143.7 133-38.8 4.3-59.2-10.7-64.3-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.8 28.9 18.7 6.1 64.2 9.5 119.2-11.8 61.8-23.8 109.9-90.1 95.8-145.6C386.5 18.3 293-.2 204.6 31.2c-52.7 18.7-109.7 48.1-150.7 86.4-48.7 45.6-56.5 85.3-53.3 101.9 11.4 58.9 92.6 97.3 125.1 125.7-1.6 .9-3.1 1.7-4.5 2.5-16.3 8.1-78.2 40.5-93.7 74.7-17.5 38.8 2.9 66.6 16.3 70.4 41.8 11.6 84.6-9.3 107.6-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.3-4.9 16.4-9.4 23.5-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.5 5 15.4 5 13.8 0 20-11.4 26.9-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.4 0 18.8-12.1 23-18.3v.1s.2-.4 .7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.6-46 16.2-31.8 31.7-71.5 31.7-71.5a201.2 201.2 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.3 .3 0 0 0 .1 .2c-3 4-6.4 8.3-9.9 12.5-12.8 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.7 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.2-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.7 450.1 270 450.1 270a201.2 201.2 0 0 0 6.2 25.8c2.4 8.1 7.1 17 11.4 25.7-18.6 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.5 79.5 0 0 0 21.6-11.1c12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.2-11.8 30.3-38.7 1.6-34-31.1-71.4-89-71.1zm-429.2 144.7c-18.4 20.1-44.2 27.7-55.3 21.3C54.6 451 59.3 421.4 82 400c13.8-13 31.6-25 43.4-32.4 2.7-1.6 6.6-4 11.4-6.9 .8-.5 1.2-.7 1.2-.7 .9-.6 1.9-1.1 2.9-1.7 8.3 30.4 .3 57.2-19.1 78.3zm134.4-91.4c-6.4 15.7-19.9 55.7-28.1 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.1-11.3 21.2-14.9 23.8-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.9-13.9 0 .5 .1 1 .1 1.6-.1 17.9-17.3 30-25.1 34.8zm85.6-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.6-15.3 19-24.5a36.2 36.2 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.9 34.4z"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/SCSS.astro", void 0);

const $$Astro$k = createAstro();
const $$Typescript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Typescript;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 256"${addAttribute(width, "width")}${addAttribute(height, "height")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Typescript.astro", void 0);

const $$Astro$j = createAstro();
const $$Spring = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Spring;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")}><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Spring.astro", void 0);

const $$Astro$i = createAstro();
const $$Python = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Python;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} fill="none" viewBox="0 0 64 64"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"></path><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"></path><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"></stop><stop offset="1" stop-color="#FFC331"></stop></linearGradient></defs></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Python.astro", void 0);

const $$Astro$h = createAstro();
const $$Postman = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Postman;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 256"${addAttribute(width, "width")}${addAttribute(height, "height")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7Z" fill="#FF6C37"></path><path d="m174.2 82.184-54.007 54.007-15.229-15.23c53.11-53.11 58.358-48.503 69.236-38.777Z" fill="#FFF"></path><path d="M120.193 137.47c-.384 0-.64-.128-.895-.384l-15.358-15.229a1.237 1.237 0 0 1 0-1.792c54.007-54.006 59.638-48.887 71.028-38.649.255.256.383.512.383.896s-.128.64-.383.896l-54.007 53.878c-.128.256-.512.384-.768.384Zm-13.437-16.509 13.437 13.438 52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65Z" fill="#FF6C37"></path><path d="m135.679 151.676-14.718-14.718 54.007-54.006c14.46 14.59-7.167 38.265-39.29 68.724Z" fill="#FFF"></path><path d="M135.679 152.956c-.384 0-.64-.128-.896-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896s.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.791 0 15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614-.383.256-.767.384-1.023.384Zm-12.926-15.998c8.19 8.319 11.646 11.646 12.926 12.926 21.5-20.476 42.36-41.464 42.488-55.926.128-3.327-1.152-6.655-3.327-9.214l-52.087 52.214Z" fill="#FF6C37"></path><path d="m105.22 121.345 10.878 10.878c.256.256.256.512 0 .768-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.175-.64-2.431-1.791-.128-.64.128-1.28.512-1.664l13.053-13.054c.256-.256.64-.384.768-.128Z" fill="#FFF"></path><path d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455 0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128Zm11.902-16.51-12.542 12.543c-.256.256-.383.64-.128 1.024.128.383.512.511.896.383l21.116-4.607-9.342-9.342Z" fill="#FF6C37"></path><path d="M202.739 52.238c-8.191-7.935-21.373-7.679-29.307.64-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.155 85l-14.59-14.59 18.174-18.172Z" fill="#FFF"></path><path d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012 0-12.158 9.854-22.012 22.012-22.012 5.631 0 11.134 2.176 15.23 6.143.255.256.383.512.383.896s-.128.64-.384.895L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.327 2.047-7.295 3.199-11.262 3.199Zm0-41.337c-10.75 0-19.452 8.703-19.324 19.453 0 10.75 8.702 19.452 19.452 19.324 2.944 0 5.887-.64 8.575-2.047l-13.438-13.31c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.479-12.414-4.479Z" fill="#FF6C37"></path><path d="m203.122 52.622-.255-.256-18.301 18.044 14.461 14.462c1.408-.896 2.816-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178Z" fill="#FFF"></path><path d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.589-14.59c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l18.173-18.173a1.237 1.237 0 0 1 1.791 0l.384.256c8.575 8.574 8.575 22.396.128 31.098-1.28 1.28-2.687 2.432-4.223 3.328-.384.128-.64.256-.768.256Zm-12.798-15.87 12.926 12.926c1.024-.64 2.048-1.536 2.816-2.304 7.294-7.294 7.678-19.196.64-26.875L186.357 70.41Z" fill="#FF6C37"></path><path d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247 8.063 8.063 51.062-44.792c3.328-2.816 3.584-7.807.768-11.134-.256-.128-.384-.256-.512-.384Z" fill="#FFF"></path><path d="M124.929 142.077c-.384 0-.64-.128-.896-.383l-8.063-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0 9.115 9.115 0 0 1 0 12.926l-.384.384-51.063 44.792c-.128.255-.384.383-.767.383Zm-6.143-9.342 6.27 6.271 50.167-44.024c2.816-2.304 3.072-6.527.768-9.342-2.303-2.816-6.526-3.072-9.342-.768-.128.128-.256.256-.512.384l-47.351 47.48Z" fill="#FF6C37"></path><path d="M80.009 187.637c-.512.256-.768.768-.64 1.28l2.175 9.214c.512 1.28-.256 2.816-1.663 3.2-1.024.384-2.176 0-2.816-.768l-14.077-13.95 45.943-45.943 15.87.256 10.75 10.75c-2.56 2.175-18.045 17.149-55.542 35.961Z" fill="#FFF"></path><path d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.896 0-.383.128-.64.384-.895l45.944-45.944c.256-.256.64-.384.895-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.895.767c-13.566 11.902-31.995 23.804-54.902 35.194l2.175 9.086c.384 1.664-.384 3.456-1.92 4.352-.767.384-1.407.512-2.047.512Zm-14.078-15.997 13.182 13.054c.384.64 1.152.896 1.792.512.64-.384.896-1.152.512-1.792l-2.176-9.214c-.256-1.152.256-2.176 1.28-2.688 22.652-11.39 40.952-23.163 54.39-34.81l-9.47-9.47-14.718-.256-44.792 44.664Z" fill="#FF6C37"></path><path d="m52.11 197.62 11.006-11.007 16.38 16.381-26.107-1.791c-1.151-.128-1.92-1.152-1.791-2.304 0-.512.128-1.024.512-1.28Z" fill="#FFF"></path><path d="m79.497 204.146-26.236-1.791c-1.92-.128-3.199-1.792-3.071-3.712.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.792 0l16.38 16.38c.385.385.512.897.257 1.408-.256.512-.64.768-1.152.768Zm-16.381-15.74-10.11 10.11c-.384.255-.384.895 0 1.151.127.128.255.256.511.256l22.652 1.536-13.053-13.054ZM104.452 146.557c-.768 0-1.28-.64-1.28-1.28 0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-20.477 4.352h-.256Zm12.414-11.902-8.446 8.446 13.821-2.943-5.375-5.503Z" fill="#FF6C37"></path><path d="m124.8 140.926-14.077 3.071c-1.024.256-2.048-.384-2.303-1.408-.128-.64 0-1.28.511-1.791l7.807-7.807 8.063 7.935Z" fill="#FFF"></path><path d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.385-1.663.897-2.303l7.806-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-14.078 3.072h-.64Zm6.399-10.622-6.91 6.91c-.257.257-.257.512-.129.768s.384.384.768.384l11.774-2.56-5.503-5.502ZM203.25 64.907c-.256-.767-1.151-1.151-1.92-.895-.767.255-1.151 1.151-.895 1.92 0 .127.128.255.128.383.768 1.536.512 3.455-.512 4.863-.512.64-.384 1.536.128 2.048.64.512 1.536.384 2.048-.256 1.92-2.432 2.303-5.503 1.023-8.063Z" fill="#FF6C37"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Postman.astro", void 0);

const $$Astro$g = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Github;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg data-testid="geist-icon"${addAttribute(height, "height")} stroke-linejoin="round" viewBox="0 0 16 16"${addAttribute(width, "width")} style="color: currentcolor;"><g clip-path="url(#clip0_872_3147)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path> </g> <defs> <clipPath id="clip0_872_3147"> <rect width="16" height="16" fill="white"></rect> </clipPath> </defs></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Github.astro", void 0);

const $$Astro$f = createAstro();
const $$Bootstrap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Bootstrap.astro", void 0);

const $$Astro$e = createAstro();
const $$Firebase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Firebase;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 351"${addAttribute(width, "width")}${addAttribute(height, "height")} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><path d="m0 282.998 2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z" fill="#FFC24A"></path><use fill="#FFA712" fill-rule="evenodd" xlink:href="#a"></use><use filter="url(#b)" xlink:href="#a"></use><path d="m135.005 150.38 32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z" fill="#F4BD62"></path><use fill="#FFA50E" fill-rule="evenodd" xlink:href="#c"></use><use filter="url(#d)" xlink:href="#c"></use><path fill="#F6820C" d="m0 282.998.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"></path><path d="m139.121 347.551 116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005" fill="#FDE068"></path><path d="M254.354 282.16 221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z" fill="#FCCA3F"></path><path d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689Z" fill="#EEAB37"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Firebase.astro", void 0);

const $$Astro$d = createAstro();
const $$Mysql = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Mysql;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"${addAttribute(width, "width")}${addAttribute(height, "height")}> <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"></path> <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"></path> </svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Mysql.astro", void 0);

const $$Astro$c = createAstro();
const $$Docker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Docker;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"${addAttribute(width, "width")}${addAttribute(height, "height")}><path fill="#2395ec" d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"></path><path fill="#2395ec" d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"></path><path fill="#2395ec" d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"></path><path fill="#2395ec" d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"></path><path fill="#2395ec" d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"></path><path fill="#2395ec" d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"></path><path fill="#2395ec" d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"></path><path fill="#2395ec" d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"></path><path fill="#2395ec" d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"></path><path fill="#2395ec" d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Docker.astro", void 0);

const $$Astro$b = createAstro();
const $$Postgress = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Postgress;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264"${addAttribute(width, "width")}${addAttribute(height, "height")}> <path d="M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26"></path> <path d="M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13" fill="#336791"></path> <path d="M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3" fill="#FFF"></path> <path d="M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z" fill="#FFF"></path> </svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Postgress.astro", void 0);

const $$Astro$a = createAstro();
const $$Mongo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Mongo;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="8.738 -5.03622834 17.45992422 39.40619484"${addAttribute(width, "width")}${addAttribute(height, "height")} xmlns="http://www.w3.org/2000/svg"><path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" fill="#599636"></path><path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"></path><path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Mongo.astro", void 0);

const $$Astro$9 = createAstro();
const $$Linux = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Linux;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg enable-background="new 0 2 48 48" viewBox="0 2 48 48"${addAttribute(width, "width")}${addAttribute(height, "height")} xmlns="http://www.w3.org/2000/svg"><path d="m20.1 18.2.1 2.3-1.6 3-2.5 4.9-.5 4.1 1.8 5.8 4.1 2.3h6.2l5.8-4.4 2.6-6.9-6-7.3-1.7-4.1z" fill="#eceff1"></path><path d="m34.3 23.9c-1.6-2.3-2.9-3.7-3.6-6.6s.2-2.1-.4-4.6c-.3-1.3-.8-2.2-1.3-2.9-.6-.7-1.3-1.1-1.7-1.2-.9-.5-3-1.3-5.6.1-2.7 1.4-2.4 4.4-1.9 10.5 0 .4-.1.9-.3 1.3-.4.9-1.1 1.7-1.7 2.4-.7 1-1.4 2-1.9 3.1-1.2 2.3-2.3 5.2-2 6.3.5-.1 6.8 9.5 6.8 9.7.4-.1 2.1-.1 3.6-.1 2.1-.1 3.3-.2 5 .2 0-.3-.1-.6-.1-.9 0-.6.1-1.1.2-1.8.1-.5.2-1 .3-1.6-1 .9-2.8 1.9-4.5 2.2-1.5.3-4-.2-5.2-1.7.1 0 .3 0 .4-.1.3-.1.6-.2.7-.4.3-.5.1-1-.1-1.3s-1.7-1.4-2.4-2-1.1-.9-1.5-1.3c0 0-.6-.6-.8-.8s-.3-.4-.4-.5c-.2-.5-.3-1.1-.2-1.9.1-1.1.5-2 1-3 .2-.4.7-1.2.7-1.2s-1.7 4.2-.8 5.5c0 0 .1-1.3.5-2.6.3-.9.8-2.2 1.4-2.9s2.1-3.3 2.2-4.9c0-.7.1-1.4.1-1.9-.4-.4 6.6-1.4 7-.3.1.4 1.5 4 2.3 5.9.4.9.9 1.7 1.2 2.7.3 1.1.5 2.6.5 4.1 0 .3 0 .8-.1 1.3.2 0 4.1-4.2-.5-7.7 0 0 2.8 1.3 2.9 3.9.1 2.1-.8 3.8-1 4.1.1 0 2.1.9 2.2.9.4 0 1.2-.3 1.2-.3.1-.3.4-1.1.4-1.4.7-2.3-1-6-2.6-8.3z" fill="#263238"></path><ellipse cx="21.6" cy="15.3" fill="#eceff1" rx="1.3" ry="2"></ellipse><ellipse cx="26.1" cy="15.2" fill="#eceff1" rx="1.7" ry="2.3"></ellipse><ellipse cx="21.7" cy="15.5" fill="#212121" rx="1.2" ry=".7" transform="matrix(-.1254 -.9921 .9921 -.1254 8.9754 38.9969)"></ellipse><ellipse cx="26" cy="15.6" fill="#212121" rx="1" ry="1.3"></ellipse><g fill="#ffc107"><path d="m39.3 37.6c-.4-.2-1.1-.5-1.7-1.4-.3-.5-.2-1.9-.7-2.5-.3-.4-.7-.2-.8-.2-.9.2-3 1.6-4.4 0-.2-.2-.5-.5-1-.5s-.7.2-.9.6-.2.7-.2 1.7c0 .8 0 1.7-.1 2.4-.2 1.7-.5 2.7-.5 3.7 0 1.1.3 1.8.7 2.1.3.3.8.5 1.9.5s1.8-.4 2.5-1.1c.5-.5.9-.7 2.3-1.7 1.1-.7 2.8-1.6 3.1-1.9.2-.2.5-.3.5-.9 0-.5-.4-.7-.7-.8z"></path><path d="m19.2 37.9c-1-1.6-1.1-1.9-1.8-2.9-.6-1-1.9-2.9-2.7-2.9-.6 0-.9.3-1.3.7s-.8 1.3-1.5 1.8c-.6.5-2.3.4-2.7 1s.4 1.5.4 3c0 .6-.5 1-.6 1.4-.1.5-.2.8 0 1.2.4.6.9.8 4.3 1.5 1.8.4 3.5 1.4 4.6 1.5s3 0 3-2.7c.1-1.6-.8-2-1.7-3.6z"></path><path d="m21.1 19.8c-.6-.4-1.1-.8-1.1-1.4s.4-.8 1-1.3c.1-.1 1.2-1.1 2.3-1.1s2.4.7 2.9.9c.9.2 1.8.4 1.7 1.1-.1 1-.2 1.2-1.2 1.7-.7.2-2 1.3-2.9 1.3-.4 0-1 0-1.4-.1-.3-.1-.8-.6-1.3-1.1z"></path></g><path d="m20.9 19c.2.2.5.4.8.5.2.1.5.2.5.2h.9c.5 0 1.2-.2 1.9-.6.7-.3.8-.5 1.3-.7.5-.3 1-.6.8-.7s-.4 0-1.1.4c-.6.4-1.1.6-1.7.9-.3.1-.7.3-1 .3s-.6 0-.9 0-.5-.1-.8-.2c-.2-.1-.3-.2-.4-.2-.2-.1-.6-.5-.8-.6 0 0-.2 0-.1.1.3.3.4.4.6.6z" fill="#634703"></path><path d="m23.9 16.8c.1.2.3.2.4.3s.2.1.2.1c.1-.1 0-.3-.1-.3 0-.2-.5-.2-.5-.1z" fill="#634703"></path><path d="m22.3 17c0 .1.2.2.2.1.1-.1.2-.2.3-.2.2-.1.1-.2-.2-.2-.2.1-.2.2-.3.3z" fill="#634703"></path><path d="m32 34.7v.3c.2.4.7.5 1.1.5.6 0 1.2-.4 1.5-.8 0-.1.1-.2.2-.3.2-.3.3-.5.4-.6 0 0-.1-.1-.1-.2-.1-.2-.4-.4-.8-.5-.3-.1-.8-.2-1-.2-.9-.1-1.4.2-1.7.5 0 0 .1 0 .1.1.2.2.3.4.3.7.1.2 0 .3 0 .5z" fill="#455a64"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Linux.astro", void 0);

const $$Astro$8 = createAstro();
const $$Jira = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Jira;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(height, "height")} preserveAspectRatio="xMidYMid"${addAttribute(width, "width")} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -30.632388516510233 255.324 285.95638851651023"><linearGradient id="a"><stop offset=".18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient><linearGradient id="b" x1="98.031%" x2="58.888%" xlink:href="#a" y1=".161%" y2="40.766%"></linearGradient><linearGradient id="c" x1="100.665%" x2="55.402%" xlink:href="#a" y1=".455%" y2="44.727%"></linearGradient><path d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z" fill="#2684ff"></path><path d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z" fill="url(#b)"></path><path d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667z" fill="url(#c)"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/Jira.astro", void 0);

const $$Astro$7 = createAstro();
const $$AstroIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="45.15333333333334 4.083333333333334 197.69 280.67333333333335" xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")}><g fill="none" stroke-width="2"><path d="M219.46 117c-1.46.82-.27-3.13-1.7-1.57-.72.79-.2 2.52.42 3.21a1.09 1.07-62.3 0 1 .25.84q-.14 1.21.63 2a1.28.94-73.7 0 1 .3.83l.01 1.67a.68.52 84.7 0 1-.4.63c-2.91.69-2.49-2.42-4.47-3.66q-.38-.24-.63-.7c-1.46-2.72-3.63 1.39-5.82-1.67a.61.58-28.8 0 0-.72-.19q-1.68.71-3.02-.52a1.42 1.36-21.1 0 0-.86-.36q-1.41-.08-2.27-1.31a.82.67 64.4 0 0-.75-.35q-1.21.24-1.92 1.14a.67.61-59.6 0 1-.74.23q-2.49-1.01-4.2-3.05a1.13.86 64.1 0 0-.81-.41q-1.29.04-2.06 1.01a.4.39 41.3 0 1-.59.03l-1.92-1.91a1.13.82-22.7 0 0-.89-.21q-2.59.45-5.12-.57a1.51 1.32-39.9 0 0-.93-.02q-3.55 1.08-5.05-2.44a1.5.96 82.7 0 0-.6-.72q-.9-.46-1.98-.18a.79.74-26.2 0 1-.78-.24q-2.16-2.56-5.17-.98a.63.57-31.7 0 1-.76-.14l-.91-1.23a.61.57-29.7 0 0-.71-.17c-2.54 1.1-4.21-7.79-4.75-9.5q-.16-.51-.36-.02c-.98 2.36 1.08 3.2.28 5.28" stroke="#0b021e"></path><path d="M130.71 90.98q-1.92 1.62-2.62 4.06-.05.19-.01 0 .51-2.72-1.2-4.46a1.07.86-23.3 0 0-.85-.24q-2.29.38-2.72-1.53-.09-.42-.39-.11-1.62 1.74-3.39-.09a.43.4-45.5 0 0-.6.03q-.44.48-1.12.16a.8.76 39.3 0 0-.8.06q-1.07.76-2.23.3a1.53.96 76.3 0 1-.68-.66q-1.8-3.27-5.58-3.48a1.61 1.05 56.9 0 1-.84-.37q-.6-.49-1.51-.59a.63.59 87.4 0 1-.54-.52q-.2-1.22-1.33-1.5a.87.71-60.5 0 0-.79.31q-.92 1.15-2.3 1.81a.65.57 57.9 0 1-.74-.22l-.88-1.15a1.12.92-15 0 0-.81-.37q-2.94-.02-5.43-1.44c-.76-.43-.83-1.37-2.07-1.15a1.24.95-26.5 0 1-.87-.17q-1.6-1.14-3.23-.21a1.04.72-40.9 0 1-.89.1l-1.67-.91a.54.5 30.9 0 0-.67.14q-.65.95-1.67 1.03a.4.35-84.3 0 1-.35-.5l2.22-9.01q.13-.53-.35-.27l-.8.43" stroke="#0c021e"></path><path d="M122 210.54l-1.02.54a.54.53 62.9 0 0-.22.7c1.25 2.65 3.13 3.12 5.74 4.06 3.26 1.17 5.92 3.03 9.17 4.27 1.37.52 2.29 1.7 3.83 2.25 5.06 1.78 9.78 4.43 12.32 5.55q10.07 4.47 15.64 7.49c1.4.77 2.89.54 4.32 1.44 2.13 1.36 6.37 4.94 8.77 2.8a.64.29 31.4 0 1 .59.07l.49.25" stroke="#ff5a04"></path><path d="M188.29 231.25q-.38-.99 0-2.03a.47.46-70.6 0 0-.28-.61c-1.2-.39-2.1-1.17-3.31-1.4-4-.75-7.53-3.46-10.24-4.66Q163.77 217.79 161 216q-1.87-1.19-3.64-1.44c-2.46-.35-4.22-1.03-6.36-1.27" stroke="#ff510b"></path></g><path d="M219.46 117c-1.46.82-.27-3.13-1.7-1.57-.72.79-.2 2.52.42 3.21a1.09 1.07-62.3 0 1 .25.84q-.14 1.21.63 2a1.28.94-73.7 0 1 .3.83l.01 1.67a.68.52 84.7 0 1-.4.63c-2.91.69-2.49-2.42-4.47-3.66q-.38-.24-.63-.7c-1.46-2.72-3.63 1.39-5.82-1.67a.61.58-28.8 0 0-.72-.19q-1.68.71-3.02-.52a1.42 1.36-21.1 0 0-.86-.36q-1.41-.08-2.27-1.31a.82.67 64.4 0 0-.75-.35q-1.21.24-1.92 1.14a.67.61-59.6 0 1-.74.23q-2.49-1.01-4.2-3.05a1.13.86 64.1 0 0-.81-.41q-1.29.04-2.06 1.01a.4.39 41.3 0 1-.59.03l-1.92-1.91a1.13.82-22.7 0 0-.89-.21q-2.59.45-5.12-.57a1.51 1.32-39.9 0 0-.93-.02q-3.55 1.08-5.05-2.44a1.5.96 82.7 0 0-.6-.72q-.9-.46-1.98-.18a.79.74-26.2 0 1-.78-.24q-2.16-2.56-5.17-.98a.63.57-31.7 0 1-.76-.14l-.91-1.23a.61.57-29.7 0 0-.71-.17c-2.54 1.1-4.21-7.79-4.75-9.5q-.16-.51-.36-.02c-.98 2.36 1.08 3.2.28 5.28q-5.91-19.23-11.52-38.54c-1.05-3.61-2.96-7.95-7.29-5.06q-1.55 1.03-2.26 3.49-4.25 14.71-8.68 29.34-1.92 1.62-2.62 4.06-.05.19-.01 0 .51-2.72-1.2-4.46a1.07.86-23.3 0 0-.85-.24q-2.29.38-2.72-1.53-.09-.42-.39-.11-1.62 1.74-3.39-.09a.43.4-45.5 0 0-.6.03q-.44.48-1.12.16a.8.76 39.3 0 0-.8.06q-1.07.76-2.23.3a1.53.96 76.3 0 1-.68-.66q-1.8-3.27-5.58-3.48a1.61 1.05 56.9 0 1-.84-.37q-.6-.49-1.51-.59a.63.59 87.4 0 1-.54-.52q-.2-1.22-1.33-1.5a.87.71-60.5 0 0-.79.31q-.92 1.15-2.3 1.81a.65.57 57.9 0 1-.74-.22l-.88-1.15a1.12.92-15 0 0-.81-.37q-2.94-.02-5.43-1.44c-.76-.43-.83-1.37-2.07-1.15a1.24.95-26.5 0 1-.87-.17q-1.6-1.14-3.23-.21a1.04.72-40.9 0 1-.89.1l-1.67-.91a.54.5 30.9 0 0-.67.14q-.65.95-1.67 1.03a.4.35-84.3 0 1-.35-.5l2.22-9.01q.13-.53-.35-.27l-.8.43Q96 26.8 99.45 16.98c2.92-8.29 9.77-12.24 18.39-12.45q23.86-.59 47.71-.16c14.24.26 20.26 2.97 24.4 16.36q14.89 48.09 29.51 96.27z" fill="#07011a"></path><path d="M130.71 90.98l-23.78 80.97a1.25 1.25-86.6 0 1-.99.88q-31.46 5.55-60.19 20.21-.67.35-.45-.37L83 70.46l.8-.43q.48-.26.35.27l-2.22 9.01a.4.35-84.3 0 0 .35.5q1.02-.08 1.67-1.03a.54.5 30.9 0 1 .67-.14l1.67.91a1.04.72-40.9 0 0 .89-.1q1.63-.93 3.23.21a1.24.95-26.5 0 0 .87.17c1.24-.22 1.31.72 2.07 1.15q2.49 1.42 5.43 1.44a1.12.92-15 0 1 .81.37l.88 1.15a.65.57 57.9 0 0 .74.22q1.38-.66 2.3-1.81a.87.71-60.5 0 1 .79-.31q1.13.28 1.33 1.5a.63.59 87.4 0 0 .54.52q.91.1 1.51.59a1.61 1.05 56.9 0 0 .84.37q3.78.21 5.58 3.48a1.53.96 76.3 0 0 .68.66q1.16.46 2.23-.3a.8.76 39.3 0 1 .8-.06q.68.32 1.12-.16a.43.4-45.5 0 1 .6-.03q1.77 1.83 3.39.09.3-.31.39.11.43 1.91 2.72 1.53a1.07.86-23.3 0 1 .85.24q1.71 1.74 1.2 4.46-.04.19.01 0 .7-2.44 2.62-4.06z" fill="#100322"></path><path d="M219.46 117l23.25 75.78q.2.65-.41.34-28.56-14.62-60.16-20.29a1.01 1 86.5 0 1-.78-.7l-20.9-70.38c.8-2.08-1.26-2.92-.28-5.28q.2-.49.36.02c.54 1.71 2.21 10.6 4.75 9.5a.61.57-29.7 0 1 .71.17l.91 1.23a.63.57-31.7 0 0 .76.14q3.01-1.58 5.17.98a.79.74-26.2 0 0 .78.24q1.08-.28 1.98.18a1.5.96 82.7 0 1 .6.72q1.5 3.52 5.05 2.44a1.51 1.32-39.9 0 1 .93.02q2.53 1.02 5.12.57a1.13.82-22.7 0 1 .89.21l1.92 1.91a.4.39 41.3 0 0 .59-.03q.77-.97 2.06-1.01a1.13.86 64.1 0 1 .81.41q1.71 2.04 4.2 3.05a.67.61-59.6 0 0 .74-.23q.71-.9 1.92-1.14a.82.67 64.4 0 1 .75.35q.86 1.23 2.27 1.31a1.42 1.36-21.1 0 1 .86.36q1.34 1.23 3.02.52a.61.58-28.8 0 1 .72.19c2.19 3.06 4.36-1.05 5.82 1.67q.25.46.63.7c1.98 1.24 1.56 4.35 4.47 3.66a.68.52 84.7 0 0 .4-.63l-.01-1.67a1.28.94-73.7 0 0-.3-.83q-.77-.79-.63-2a1.09 1.07-62.3 0 0-.25-.84c-.62-.69-1.14-2.42-.42-3.21 1.43-1.56.24 2.39 1.7 1.57z" fill="#0f0321"></path><path d="M122 210.54l-1.02.54a.54.53 62.9 0 0-.22.7c1.25 2.65 3.13 3.12 5.74 4.06 3.26 1.17 5.92 3.03 9.17 4.27 1.37.52 2.29 1.7 3.83 2.25 5.06 1.78 9.78 4.43 12.32 5.55q10.07 4.47 15.64 7.49c1.4.77 2.89.54 4.32 1.44 2.13 1.36 6.37 4.94 8.77 2.8a.64.29 31.4 0 1 .59.07l.49.25q-7.96 6.42-16.56 11.96c-11.86 7.63-16.28 18.13-10.33 32.13q.36.84-.47.44-15.3-7.46-18.84-23.45c-1.84-8.35 1.99-22.91-8.43-26.51-8.51-2.93-17.11 2.4-18.43 11.57q-.16 1.11-.89.26c-11.95-13.83-14.67-31.97-10.12-49.39q.22-.83.71-.12c5.2 7.55 15.16 11.42 23.73 13.69z" fill="#ff5d01"></path><path d="M188.29 231.25q-.38-.99 0-2.03a.47.46-70.6 0 0-.28-.61c-1.2-.39-2.1-1.17-3.31-1.4-4-.75-7.53-3.46-10.24-4.66Q163.77 217.79 161 216q-1.87-1.19-3.64-1.44c-2.46-.35-4.22-1.03-6.36-1.27 13.56-.25 29.17-3.26 40.33-11.47a.47.47-26 0 1 .73.25q4.25 15.74-3.77 29.18z" fill="#ff4c0e"></path><path d="M122 210.54q14.31 3.36 29 2.75c2.14.24 3.9.92 6.36 1.27q1.77.25 3.64 1.44 2.77 1.79 13.46 6.55c2.71 1.2 6.24 3.91 10.24 4.66 1.21.23 2.11 1.01 3.31 1.4a.47.46-70.6 0 1 .28.61q-.38 1.04 0 2.03-2.77 4.72-6.66 8.71l-.49-.25a.64.29 31.4 0 0-.59-.07c-2.4 2.14-6.64-1.44-8.77-2.8-1.43-.9-2.92-.67-4.32-1.44q-5.57-3.02-15.64-7.49c-2.54-1.12-7.26-3.77-12.32-5.55-1.54-.55-2.46-1.73-3.83-2.25-3.25-1.24-5.91-3.1-9.17-4.27-2.61-.94-4.49-1.41-5.74-4.06a.54.53 62.9 0 1 .22-.7z" fill="#ff5607"></path></svg>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/icons/AstroIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Skills;
  const ICONS = {
    Angular: $$Angular,
    CSS: $$CSS,
    Java: $$Java,
    Git: $$Git,
    Tailwind: $$Tailwind,
    SCSS: $$SCSS,
    Typescript: $$Typescript,
    Springboot: $$Spring,
    Python: $$Python,
    Github: $$Github,
    Postman: $$Postman,
    Firebase: $$Firebase,
    Bootstrap: $$Bootstrap,
    Mysql: $$Mysql,
    Postgresql: $$Postgress,
    Docker: $$Docker,
    MongoDB: $$Mongo,
    Linux: $$Linux,
    Jira: $$Jira,
    AstroIcon: $$AstroIcon
  };
  const lang = getLangFromUrl(Astro2.url);
  const skills = getResume(lang).skills;
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-wrap gap-3 items-center justify-center" data-astro-cid-ab4ihpzs> ${skills.map((skill) => {
    const skillName = skill.name === "Astro.js" ? "AstroIcon" : skill.name;
    const Icon = ICONS[skillName] ? ICONS[skillName] : $$EmptyIcon;
    return renderTemplate`<li data-astro-cid-ab4ihpzs> <span class="flex items-center justify-center gap-x-3 bg-gray-200 border border rounded-xl text-blue-700 text-base font-semibold lowercase p-5 bg-opacity-50 min-w-[180px]" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", Icon, { "height": "25", "width": "25", "data-astro-cid-ab4ihpzs": true })} <p data-astro-cid-ab4ihpzs>${skill.name}</p> </span> </li>`;
  })} </ul> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Skills.astro", void 0);

const $$Astro$5 = createAstro();
const $$Languages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Languages;
  const lang = getLangFromUrl(Astro2.url);
  const languages = getResume(lang).languages;
  return renderTemplate`${maybeRenderHead()}<div class="text-base font-normal text-pretty"> <ul class="grid grid-cols-6"> ${languages.map(({ language, fluency, level, flag }) => {
    return renderTemplate`<li class="mb-7 col-span-full md:col-span-3"> <div class="flex gap-x-3"> <h3>&bull; ${language}</h3> <span> <img class="w-6 h-6"${addAttribute(flag, "src")} alt=""></span> </div> <div class="flex"> <p>&nbsp;${level ?? level}</p> <p>&nbsp;${fluency}</p> </div> </li>`;
  })} </ul> </div>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Languages.astro", void 0);

const $$Astro$4 = createAstro();
const $$NavLinkCustom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavLinkCustom;
  const { linkName, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" flex items-center" data-astro-cid-s37duwgo> ${renderSlot($$result, $$slots["before"])} <a class="text-sm xl:text-md mx-1 name bolder hover:underline lowercase"${addAttribute(href, "href")} data-astro-cid-s37duwgo>${linkName}</a> ${renderSlot($$result, $$slots["after"])} </div> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/NavLinkCustom.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const currentLang = getLangFromUrl(Astro2.url);
  const translate = useTranslations(currentLang);
  const translatePath = useTranslatedPath(currentLang);
  return renderTemplate`${maybeRenderHead()}<header class="border border-gray-100 rounded bg-opacity-75 transparent  text-black w-full bg-gray-200 p-4 lg:p-5" data-astro-cid-3ef6ksr2> <div class="block md:flex items-end justify-between mx-2 md:mx-4" data-astro-cid-3ef6ksr2> <div class="flex gap-x-5" data-astro-cid-3ef6ksr2> <nav class="hidden md:block md:space-x-2 lg:flex lg:space-x-4" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": translate("title.about"), "href": "#about", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/info_FILL0_wght400_GRAD0_opsz24.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": translate("title.lang"), "href": "#languages", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/language.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": translate("title.skill"), "href": "#skills", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/person_check.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": translate("title.project"), "href": "#projects", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/construction.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": translate("title.experience"), "href": "#experience", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/work.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": translate("nav.contact"), "href": "#contact-me", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/contact.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} </nav> </div> <div class="float-right mt-auto sm:mt-3 flex gap-x-2" data-astro-cid-3ef6ksr2> <div id="lenguage" class="dropdown" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2> ${translate("header.language")}</span> <ul class="dropdown-content rounded-lg" data-astro-cid-3ef6ksr2> ${Object.entries(languages).filter(([label, lang]) => lang !== currentLang).map(([label, lang]) => renderTemplate`<li class="dropdown-item rounded" data-astro-cid-3ef6ksr2> <a${addAttribute(translatePath("/", lang), "href")} data-astro-cid-3ef6ksr2>${label}</a> </li>`)} </ul> </div> </div> <!-- <div class="float-right mt-auto sm:mt-3">
      <div class="container__switch">
        <label class="switch">
          <input type="checkbox" id="toggleButton" />
          <span class="slider"></span>
        </label>
      </div>
    </div> --> </div> </header> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-16"><meta name="gmr-info" content="gmr-info"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/site-jupiter-logo.png"><meta name="generator"', "><title>", "</title>", "", "</head> <body", '> <div class="w-full mb-[10rem]"> ', " </div> ", '  </body><!-- <script src="../scripts/darklightmode-control.ts"><\/script> --></html>'])), addAttribute(currentLocale, "lang"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), addAttribute(renderTransition($$result, "j4akag7t", fade({ duration: "0.4s" }), ""), "data-astro-transition-scope"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/layouts/Layout.astro", "self");

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const lang = getLangFromUrl(Astro2.url);
  const translate = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "porfolio - web software developer fullstack", ".": true, "description": "fullstack developer", "data-astro-cid-7pewbour": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-4 md:p-6 lg:p-8 xl:p-10" data-astro-cid-7pewbour> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "hero", "title": "", "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Hero", $$Hero, { "data-astro-cid-7pewbour": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "about", "title": translate("title.about"), "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "About", $$About, { "data-astro-cid-7pewbour": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "languages", "title": translate("title.lang"), "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Language", $$Languages, { "data-astro-cid-7pewbour": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experience", "title": translate("title.experience"), ",": true, "icon": "/work.svg", "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Experience", $$Experience, { "data-astro-cid-7pewbour": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "skills", "title": translate("title.skill"), ",": true, "icon": "/person_check.svg", "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Skills", $$Skills, { "data-astro-cid-7pewbour": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects", "title": translate("title.project"), "icon": "/construction.svg", "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Projects", $$Projects, { "data-astro-cid-7pewbour": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "", "title": translate("title.education"), ",": true, "icon": "/school.svg", "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Education", $$Education, { "data-astro-cid-7pewbour": true })}` })} </main> ` })} ${renderComponent($$result, "Footer", $$Footer, { "id": "contact-me", "data-astro-cid-7pewbour": true })} `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/es/index.astro", void 0);

const $$file$1 = "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/es/index.astro";
const $$url$1 = "/es";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const translate = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "porfolio - web software developer fullstack", ".": true, "description": "fullstack developer", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-4 md:p-6 lg:p-8 xl:p-10" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "hero", "title": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "about", "title": translate("title.about"), "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "About", $$About, { "data-astro-cid-j7pv25f6": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "languages", "title": translate("title.lang"), "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Language", $$Languages, { "data-astro-cid-j7pv25f6": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experience", "title": translate("title.experience"), ",": true, "icon": "/work.svg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "skills", "title": translate("title.skill"), ",": true, "icon": "/person_check.svg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects", "title": translate("title.project"), "icon": "/construction.svg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })}` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "", "title": translate("title.education"), ",": true, "icon": "/school.svg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Education", $$Education, { "data-astro-cid-j7pv25f6": true })}` })} </main> ` })} ${renderComponent($$result, "Footer", $$Footer, { "id": "contact-me", "data-astro-cid-j7pv25f6": true })} `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as a, index$1 as i };
