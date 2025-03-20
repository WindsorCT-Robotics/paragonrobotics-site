import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["app/immutable/nodes/0.DOr1q5uW.js","app/immutable/chunks/CZmaKrcj.js","app/immutable/chunks/CEH69qn2.js","app/immutable/chunks/DM-Auk7D.js","app/immutable/chunks/ChxYaKpO.js","app/immutable/chunks/yOH2LpPj.js"];
export const stylesheets = ["app/immutable/assets/0.R0FfaMC7.css"];
export const fonts = [];
