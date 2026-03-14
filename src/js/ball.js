import * as PIXI from 'pixi.js';

// async const Ball = () => {

// 	// this.app = new PIXI.Application();
// 	// this.app.init({
// 	// 	background: 0xffffff,
// 	// 	resizeTo: window,
// 	// });
// };

const app = new PIXI.Application();
await app.init({
	width: '100vw',
	height: '100vh',
	backgroundColor: 0x1099bb, // Hex color code
	resizeTo: window, // Optional: automatically resize to the window
});

const contentElem = document.getElementById('content');

contentElem.appendChild(app.canvas);

window.addEventListener('load', () => {
	// const game = new Game();

	
});