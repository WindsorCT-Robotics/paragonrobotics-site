

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f7vsPlp7.js","_app/immutable/chunks/Cy4Xv3wy.js","_app/immutable/chunks/B_2oS78X.js"];
export const stylesheets = ["_app/immutable/assets/0.h4p8dGuS.css"];
export const fonts = [];
