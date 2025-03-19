import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["app/immutable/nodes/0.B8X9H8ke.js","app/immutable/chunks/DfGFxowE.js","app/immutable/chunks/DIAvq5ou.js"];
export const stylesheets = ["app/immutable/assets/0.CeQFiKF4.css"];
export const fonts = [];
