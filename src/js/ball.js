import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
const ball = new PIXI.Graphics();
const contentElem = document.getElementById('content');
const backgroundColor = 0xABDADC;
const ballColor = 0xFF4400;

const initApp = async() => {
	await app.init({
		width: '100vw',
		height: '100vh',
		backgroundColor: backgroundColor,
		resizeTo: window,
	});

	contentElem.appendChild(app.canvas);
}

const initBall = () => {
	ball.circle(0, 0, 50);
	ball.fill(ballColor);
	ball.x = 100;
	ball.y = 100;

	app.stage.addChild(ball);
}

window.addEventListener('load', () => {
	initApp();
	initBall();
});