import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["app/immutable/nodes/2.DUWc2-2_.js","app/immutable/chunks/DfGFxowE.js","app/immutable/chunks/DIAvq5ou.js","app/immutable/chunks/DueHV8WN.js","app/immutable/chunks/BAsPYwi1.js","app/immutable/chunks/B2BErmd9.js","app/immutable/chunks/BNlucBsJ.js","app/immutable/chunks/nSIvxWft.js","app/immutable/chunks/CN0IuzBl.js"];
export const stylesheets = ["app/immutable/assets/Navbar.BqUs8lx0.css"];
export const fonts = [];
