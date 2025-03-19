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
		client: {start:"app/immutable/entry/start.C698uhPj.js",app:"app/immutable/entry/app.DJMk9z-q.js",imports:["app/immutable/entry/start.C698uhPj.js","app/immutable/chunks/BHKe2K0Y.js","app/immutable/chunks/DIAvq5ou.js","app/immutable/chunks/nSIvxWft.js","app/immutable/chunks/CN0IuzBl.js","app/immutable/chunks/2Mg8ALtu.js","app/immutable/entry/app.DJMk9z-q.js","app/immutable/chunks/DIAvq5ou.js","app/immutable/chunks/B2BErmd9.js","app/immutable/chunks/DfGFxowE.js","app/immutable/chunks/BNlucBsJ.js","app/immutable/chunks/nSIvxWft.js","app/immutable/chunks/2Mg8ALtu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pages/contact",
				pattern: /^\/pages\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/pages/robots",
				pattern: /^\/pages\/robots\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
