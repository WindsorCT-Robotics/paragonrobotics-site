import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["app/immutable/nodes/2.B7J15mxM.js","app/immutable/chunks/CZmaKrcj.js","app/immutable/chunks/CEH69qn2.js","app/immutable/chunks/DM-Auk7D.js","app/immutable/chunks/tAYJIEgE.js","app/immutable/chunks/DCQWgzrF.js","app/immutable/chunks/ChxYaKpO.js","app/immutable/chunks/DQkaM0Tm.js","app/immutable/chunks/C7pPJbvW.js"];
export const stylesheets = ["app/immutable/assets/Navbar.BqUs8lx0.css"];
export const fonts = [];
