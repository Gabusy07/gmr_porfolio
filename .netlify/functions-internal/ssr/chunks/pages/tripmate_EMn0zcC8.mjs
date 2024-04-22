/* empty css                                      */
import { c as createAstro, d as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_C5HHWdbc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './index_BTaLXzkr.mjs';

const $$Astro = createAstro();
const $$Tripmate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tripmate;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Layout, { "title": title, ",": true, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>title</h1> <p>
Ver <a class="text-blue-700 bolder text-lg" href="https://github.com/No-Country/s7-09-T-JavaReact" target="_blank">repositorio</a> </p> ` })}`;
}, "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/tripmate.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/dev/porfolio/src/pages/tripmate.astro";
const $$url = "/tripmate";

export { $$Tripmate as default, $$file as file, $$url as url };
