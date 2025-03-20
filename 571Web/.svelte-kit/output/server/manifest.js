export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "paragonrobotics-site/app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"app/immutable/entry/start.FiS2e65v.js",app:"app/immutable/entry/app.D70MegJa.js",imports:["app/immutable/entry/start.FiS2e65v.js","app/immutable/chunks/BpRNiGUG.js","app/immutable/chunks/CEH69qn2.js","app/immutable/chunks/C7pPJbvW.js","app/immutable/chunks/Gb-v23Vf.js","app/immutable/entry/app.D70MegJa.js","app/immutable/chunks/CEH69qn2.js","app/immutable/chunks/DCQWgzrF.js","app/immutable/chunks/CZmaKrcj.js","app/immutable/chunks/ChxYaKpO.js","app/immutable/chunks/Gb-v23Vf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/paragonrobotics-site/","/paragonrobotics-site/__data.json","/paragonrobotics-site/pages/contact/","/paragonrobotics-site/pages/robots/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
