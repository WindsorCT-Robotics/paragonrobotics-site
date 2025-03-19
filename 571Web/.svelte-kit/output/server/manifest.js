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
		client: {start:"app/immutable/entry/start.tMCpLNw6.js",app:"app/immutable/entry/app.D8KJ-fIs.js",imports:["app/immutable/entry/start.tMCpLNw6.js","app/immutable/chunks/Bc8hA1u1.js","app/immutable/chunks/ffY1Snt6.js","app/immutable/chunks/BLIQICtd.js","app/immutable/chunks/D-8c7onk.js","app/immutable/chunks/DC1pPFTa.js","app/immutable/entry/app.D8KJ-fIs.js","app/immutable/chunks/ffY1Snt6.js","app/immutable/chunks/Bb99phst.js","app/immutable/chunks/C29BUe4J.js","app/immutable/chunks/BjIPQ6ib.js","app/immutable/chunks/BLIQICtd.js","app/immutable/chunks/DC1pPFTa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/paragonrobotics-site/","/paragonrobotics-site/pages/contact","/paragonrobotics-site/pages/robots"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
