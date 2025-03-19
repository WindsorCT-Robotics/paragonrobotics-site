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
		client: {start:"_app/immutable/entry/start.JtnIwXtM.js",app:"_app/immutable/entry/app.D35I3FJj.js",imports:["_app/immutable/entry/start.JtnIwXtM.js","_app/immutable/chunks/BxJvnzup.js","_app/immutable/chunks/ffY1Snt6.js","_app/immutable/chunks/BLIQICtd.js","_app/immutable/chunks/DC1pPFTa.js","_app/immutable/entry/app.D35I3FJj.js","_app/immutable/chunks/ffY1Snt6.js","_app/immutable/chunks/Bb99phst.js","_app/immutable/chunks/C29BUe4J.js","_app/immutable/chunks/BjIPQ6ib.js","_app/immutable/chunks/BLIQICtd.js","_app/immutable/chunks/DC1pPFTa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
