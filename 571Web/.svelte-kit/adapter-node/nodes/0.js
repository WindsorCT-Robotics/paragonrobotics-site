import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D4I_ADP0.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/CUlyeBF6.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BYGd4c0v.js"];
export const stylesheets = ["_app/immutable/assets/0.82O8nP0a.css"];
export const fonts = [];
