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
		client: {start:"_app/immutable/entry/start.DCqxA2zu.js",app:"_app/immutable/entry/app.DgRZuIGd.js",imports:["_app/immutable/entry/start.DCqxA2zu.js","_app/immutable/chunks/X6GmlsIw.js","_app/immutable/chunks/DIAvq5ou.js","_app/immutable/chunks/nSIvxWft.js","_app/immutable/chunks/2Mg8ALtu.js","_app/immutable/entry/app.DgRZuIGd.js","_app/immutable/chunks/DIAvq5ou.js","_app/immutable/chunks/B2BErmd9.js","_app/immutable/chunks/DfGFxowE.js","_app/immutable/chunks/BNlucBsJ.js","_app/immutable/chunks/nSIvxWft.js","_app/immutable/chunks/2Mg8ALtu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
