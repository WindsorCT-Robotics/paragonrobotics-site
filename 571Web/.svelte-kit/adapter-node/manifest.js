export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CwvZfKsE.js",app:"_app/immutable/entry/app.CEMe4a_1.js",imports:["_app/immutable/entry/start.CwvZfKsE.js","_app/immutable/chunks/DJpDcJCi.js","_app/immutable/chunks/CUlyeBF6.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/2kYrV3dO.js","_app/immutable/chunks/Ptk_Feny.js","_app/immutable/entry/app.CEMe4a_1.js","_app/immutable/chunks/CUlyeBF6.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Cy_FIeFC.js","_app/immutable/chunks/BYGd4c0v.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/BlQ9Av38.js","_app/immutable/chunks/2kYrV3dO.js","_app/immutable/chunks/Ptk_Feny.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/pages/contact","/pages/home","/pages/robots"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set(["/","/pages/contact","/pages/home","/pages/robots"]);

export const base = "";