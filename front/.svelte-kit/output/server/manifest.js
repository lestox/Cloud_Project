export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo_white.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.fb9aaa51.js","imports":["_app/immutable/entry/start.fb9aaa51.js","_app/immutable/chunks/index.20636c0b.js","_app/immutable/chunks/singletons.cec3caf5.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.27e558a2.js","imports":["_app/immutable/entry/app.27e558a2.js","_app/immutable/chunks/index.20636c0b.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
