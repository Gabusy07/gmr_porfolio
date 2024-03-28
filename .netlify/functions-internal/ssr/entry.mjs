import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C02FUami.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CBIy3k8H.mjs');
const _page1 = () => import('./chunks/404_lVfAR3-g.mjs');
const _page2 = () => import('./chunks/lumini_D2lHiGTy.mjs');
const _page3 = () => import('./chunks/tripmate_BSfl-owA.mjs');
const _page4 = () => import('./chunks/index_AyFiAonV.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/lumini.astro", _page2],
    ["src/pages/tripmate.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3eb1a9ad-5b00-4222-ae9d-d1546dc21e7a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
