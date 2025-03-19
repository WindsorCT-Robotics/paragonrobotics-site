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
		client: {start:"_app/immutable/entry/start.CDJLLruU.js",app:"_app/immutable/entry/app.Du_Bv9If.js",imports:["_app/immutable/entry/start.CDJLLruU.js","_app/immutable/chunks/F_ycu0mN.js","_app/immutable/chunks/DIAvq5ou.js","_app/immutable/chunks/nSIvxWft.js","_app/immutable/chunks/2Mg8ALtu.js","_app/immutable/entry/app.Du_Bv9If.js","_app/immutable/chunks/DIAvq5ou.js","_app/immutable/chunks/B2BErmd9.js","_app/immutable/chunks/DfGFxowE.js","_app/immutable/chunks/BNlucBsJ.js","_app/immutable/chunks/nSIvxWft.js","_app/immutable/chunks/2Mg8ALtu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/pages/contact","/pages/robots"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
