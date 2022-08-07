export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/fotoprofil.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-69746143.js","imports":["_app/immutable/start-69746143.js","_app/immutable/chunks/index-de80af4f.js","_app/immutable/chunks/index-c19beea7.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
