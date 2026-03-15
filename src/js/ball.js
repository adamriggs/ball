import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
const ball = new PIXI.Graphics();
const contentElem = document.getElementById('content');

const initApp = async() => {
	await app.init({
		width: '100vw',
		height: '100vh',
		backgroundColor: 0x1A05A2,
		resizeTo: window,
	});

	contentElem.appendChild(app.canvas);
}

const initBall = () => {
	ball.circle(0, 0, 50);
	ball.fill(0xFF4400);
	ball.x = 100;
	ball.y = 100;

	app.stage.addChild(ball);
}

window.addEventListener('load', () => {
	initApp();
	initBall();
});