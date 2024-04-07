// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	ip: '192.168.10.100',
	apiVersion: 'v2',
	// domain: "http://localhost:4200",
	// host: "http://localhost:8000/",
	version: 'v3.0',
	host: "https://portal.usher.ph/grph/",

	dirAnnounce: "https://portal.usher.ph/grph/storage/gallery/announcement/",
	dirProject: "https://portal.usher.ph/grph/storage/gallery/",
	dirProfile: "https://portal.usher.ph/grph/storage/gallery/profile/",

	dirAttach: "https://portal.usher.ph/grph/storage/gallery/attachment/",

	dirVideo: "https://portal.usher.ph/grph/storage/gallery_video/",


	// host: "http://localhost/grphapi/",

	// dirAnnounce: "http://localhost/grphapi/public/storage/gallery/announcement/",
	// dirProject: "http://localhost/grphapi/public/storage/gallery/",
	// dirProfile: "http://localhost/grphapi/public/storage/gallery/profile/",

	// dirAttach: "http://localhost/grphapi/public/storage/gallery/attachment/",

	// dirVideo: "http://localhost/grphapi/public/storage/gallery_video/",


	socketServer: "localhost",
	socketPort: 3003,
	ssl: "http"
	// firebaseConfig : {
	// 	apiKey: "AIzaSyBEB2T4IgzMNgCWqpYfBk0POTKj2KrQr-s",
	// 	authDomain: "ushertech01-33013.firebaseapp.com",
	// 	databaseURL: "https://ushertech01-33013.firebaseio.com",
	// 	projectId: "ushertech01-33013",
	// 	storageBucket: "ushertech01-33013.appspot.com",
	// 	messagingSenderId: "935917852687",
	// 	appId: "1:935917852687:web:15a3890ce8f4eee31aab7a",
	// 	measurementId: "G-DG8LZPL77F"
	// }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
