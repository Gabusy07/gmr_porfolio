/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderSlot, g as renderComponent, F as Fragment, h as renderHead } from '../astro_CpY2pXq3.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$NavLinkCustom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavLinkCustom;
  const { linkName, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex align-items-end" data-astro-cid-s37duwgo> ${renderSlot($$result, $$slots["before"])} <a class="mx-1 name bolder hover:underline"${addAttribute(href, "href")} data-astro-cid-s37duwgo>${linkName}</a> ${renderSlot($$result, $$slots["after"])} </div> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/NavLinkCustom.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="border border-gray-100 rounded bg-opacity-75 transparent  text-black w-full bg-gray-200 p-4 lg:p-5" data-astro-cid-3ef6ksr2> <div class="block md:flex items-end justify-between mx-2 md:mx-4" data-astro-cid-3ef6ksr2> <div class="flex gap-x-5" data-astro-cid-3ef6ksr2> <nav class="hidden sm:block sm:space-x-2 md:flex md:space-x-4" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": "about", "href": "#about", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/info_FILL0_wght400_GRAD0_opsz24.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": "languages", "href": "#languages", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/language.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": "skills", "href": "#skills", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/person_check.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": "projects", "href": "#projects", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/construction.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": "experience", "href": "#experience", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/work.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} ${renderComponent($$result, "NavLinkCustom", $$NavLinkCustom, { "linkName": "contact me", "href": "#contact-me", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "before" }, { "default": ($$result3) => renderTemplate` <img class="w-7" src="/contact.svg" alt="" data-astro-cid-3ef6ksr2> ` })}` })} </nav> <div id="lenguage" class="dropdown" data-astro-cid-3ef6ksr2> <span class="dropdown-item" data-astro-cid-3ef6ksr2> Language</span> <div class="dropdown-content" data-astro-cid-3ef6ksr2> <span id="es" class="dropdown-item" data-astro-cid-3ef6ksr2>Spanish</span> <span id="en" class="dropdown-item" data-astro-cid-3ef6ksr2>English</span> </div> </div> </div> <div class="float-right mt-auto sm:mt-3" data-astro-cid-3ef6ksr2> <div class="container__switch" data-astro-cid-3ef6ksr2> <label class="switch" data-astro-cid-3ef6ksr2> <input type="checkbox" id="toggleButton" data-astro-cid-3ef6ksr2> <span class="slider" data-astro-cid-3ef6ksr2></span> </label> </div> </div> </div> </header> `;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-16"><meta name="gmr-info" content="gmr-info"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/site-jupiter-logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <div class="w-full md:w-1/2 lg:w-1/2 xl:w-full mb-[10rem]"> ${renderComponent($$result, "Header", $$Header, {})} </div> ${renderSlot($$result, $$slots["default"])}    </html>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/layouts/Layout.astro", "self");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en" data-astro-cid-zetdm5md> <head><meta charset="UTF-16"><meta name="gmr-info&quot;" content="error-404"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>no encontrada</title>${renderHead()}</head> ${renderComponent($$result, "MainLayout", $$Layout, { "title": "Error 404", ",": true, "description": "", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` <div class="error_container border rounded-2" data-astro-cid-zetdm5md> <div class="flex gap-x-4" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md> <img src="../public/icons/sentiment_sad_FILL0_wght400_GRAD0_opsz24.svg" alt="" data-astro-cid-zetdm5md> </span> <h3 class="text-left text-2xl" data-astro-cid-zetdm5md>
La dirección que buscas no ha sido encontrada
</h3> <span data-astro-cid-zetdm5md><i data-astro-cid-zetdm5md> <img src="/info_FILL0_wght400_GRAD0_opsz24.svg" alt="info" data-astro-cid-zetdm5md> </i></span> </div> <div class="ml-9 mt-3 flex justify-start items-end gap-x-3" data-astro-cid-zetdm5md> <small data-astro-cid-zetdm5md>Puedes volver al inicio a través del siguiente link </small> <img class="mt-1" src="../public/icons/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg" alt="" data-astro-cid-zetdm5md> <a class="text-blue-700 text-base" href="./" data-astro-cid-zetdm5md>volver a inicio</a> </div> </div> ` })}  </html>`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
