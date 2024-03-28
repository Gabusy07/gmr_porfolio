import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CpY2pXq3.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Gs-0FT1M.js"}],"styles":[{"type":"external","src":"/_astro/index.C6MBoTl2.css"},{"type":"inline","content":".error_container[data-astro-cid-zetdm5md]{padding:10%;margin:10% 5%}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Gs-0FT1M.js"}],"styles":[{"type":"external","src":"/_astro/index.C6MBoTl2.css"}],"routeData":{"route":"/lumini","isIndex":false,"type":"page","pattern":"^\\/lumini\\/?$","segments":[[{"content":"lumini","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lumini.astro","pathname":"/lumini","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Gs-0FT1M.js"}],"styles":[{"type":"external","src":"/_astro/index.C6MBoTl2.css"}],"routeData":{"route":"/tripmate","isIndex":false,"type":"page","pattern":"^\\/tripmate\\/?$","segments":[[{"content":"tripmate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tripmate.astro","pathname":"/tripmate","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CdGNJc5O.js"}],"styles":[{"type":"external","src":"/_astro/index.C6MBoTl2.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Onest:wght@300&display=swap\";footer[data-astro-cid-sz7xmlte]{-webkit-mask-image:url(\"/Hannah-Green-Therapy-Wave-Background%20(1)%20(1).svg\");mask-image:url(\"/Hannah-Green-Therapy-Wave-Background%20(1)%20(1).svg\");background-size:cover}footer[data-astro-cid-sz7xmlte] p[data-astro-cid-sz7xmlte]{color:#fff;font-size:2rem}.links_container[data-astro-cid-sz7xmlte]{display:flex;gap:5px}footer[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]{width:25px;fill:#d3d3d3;transition:width,transform,filter .5s}footer[data-astro-cid-sz7xmlte] .footer-link[data-astro-cid-sz7xmlte]:hover{width:35px;transition-delay:.1s;transform:translateY(-5px);filter:brightness(2.5)}section[data-astro-cid-tdne747l]{flex-direction:row;min-width:275px;max-width:55vw;margin:0 auto 72px}span[data-astro-cid-z3hdeghq]{position:relative;overflow:hidden}span[data-astro-cid-z3hdeghq]:after{content:\"\";position:absolute;top:0;left:-50%;width:25%;height:100%;background:linear-gradient(to right,rgba(255,255,255,.5),transparent)}span[data-astro-cid-z3hdeghq]:hover:after{animation:slide .5s ease-in-out}@keyframes slide{0%{left:-50%}to{left:100%}}summary[data-astro-cid-xpq65ryk]{word-wrap:break-word}.img[data-astro-cid-bbe6dxrz]{aspect-ratio:1 / 1;-o-object-fit:cover;object-fit:cover;transition:filter,transform,filter .5s}.img[data-astro-cid-bbe6dxrz]:hover{filter:brightness(105%);transform:scale(1.15)}header[data-astro-cid-amng4zvp]{flex:1}article[data-astro-cid-amng4zvp]{border-bottom:1px solid gray;height:100%}.img[data-astro-cid-amng4zvp]{aspect-ratio:10 / 9;-o-object-fit:cover;object-fit:cover}.inline-link[data-astro-cid-amng4zvp]{display:inline-flex}li[data-astro-cid-ab4ihpzs] span[data-astro-cid-ab4ihpzs]{transition:filter,transform,filter .5s}li[data-astro-cid-ab4ihpzs] span[data-astro-cid-ab4ihpzs]:hover{filter:brightness(150%);transform:scale(1.1)}:root{--color-violet: rgb(73 35 242);--z-high-priority: 1000;--z-priority: 10;--z-base: 1;--z-lower: 0}html{font-family:Onest,sans-serif}body{min-height:100vh;color-scheme:light dark;margin:0;padding:0}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;max-width:calc(100% - 2rem);font-size:20px;line-height:1.6}.header[data-astro-cid-j7pv25f6]{position:fixed;top:0;right:0;margin-bottom:5rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/Desktop/dev/porfolio/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Usuario/Desktop/dev/porfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Usuario/Desktop/dev/porfolio/src/pages/lumini.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Usuario/Desktop/dev/porfolio/src/pages/tripmate.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Usuario/Desktop/dev/porfolio/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/lumini@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tripmate@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_C7capHwM.mjs","/src/pages/index.astro":"chunks/pages/index_BxMZOU8n.mjs","/src/pages/lumini.astro":"chunks/pages/lumini_CdXUxf71.mjs","/src/pages/tripmate.astro":"chunks/pages/tripmate_C-t1uBZC.mjs","\u0000@astrojs-manifest":"manifest_C02FUami.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CBIy3k8H.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_lVfAR3-g.mjs","\u0000@astro-page:src/pages/lumini@_@astro":"chunks/lumini_D2lHiGTy.mjs","\u0000@astro-page:src/pages/tripmate@_@astro":"chunks/tripmate_BSfl-owA.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_AyFiAonV.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CdGNJc5O.js","/astro/hoisted.js?q=1":"_astro/hoisted.Gs-0FT1M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.C6MBoTl2.css","/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg","/construction.svg","/contact.svg","/favicon.svg","/Hannah-Green-Therapy-Wave-Background (1) (1).svg","/info_FILL0_wght400_GRAD0_opsz24.svg","/language.svg","/noCountry-logo.jpg","/person_check.svg","/photo.jpg","/sbt-icon.png","/school.svg","/sentiment_sad_FILL0_wght400_GRAD0_opsz24.svg","/site-jupiter-logo.png","/spain-flag.png","/tripmate-logo.png","/us-flag.png","/work.svg","/xepelin-logo.png","/_astro/hoisted.CdGNJc5O.js","/_astro/hoisted.Gs-0FT1M.js"],"buildFormat":"directory"});

export { manifest };
