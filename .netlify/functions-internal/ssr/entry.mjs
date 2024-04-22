import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CLg4LI_8.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BVXZLHIZ.mjs');
const _page1 = () => import('./chunks/404_D7o2Zxc_.mjs');
const _page2 = () => import('./chunks/inProgressProject_HElWg06j.mjs');
const _page3 = () => import('./chunks/index_7V1x60Gg.mjs');
const _page4 = () => import('./chunks/inProgressProject_B2Glmu_F.mjs');
const _page5 = () => import('./chunks/lumini_CJCN3xV3.mjs');
const _page6 = () => import('./chunks/tripmate_Q_1OgiAf.mjs');
const _page7 = () => import('./chunks/index_KzOQHkrU.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/es/inProgressProject.astro", _page2],
    ["src/pages/es/index.astro", _page3],
    ["src/pages/inProgressProject.astro", _page4],
    ["src/pages/lumini.astro", _page5],
    ["src/pages/tripmate.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4f670dc0-b00d-4476-9d82-2f47916c6718"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
