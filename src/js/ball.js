import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
const contentElem = document.getElementById('content');
const backgroundColor = 0xABDADC;
const ballColor = 0xFF4400;

let floor = window.innerHeight - 50;
let cieling = 50;
let speed = 10;

const ball = new PIXI.Graphics();
const ballRadius = 50;
const ballXStart = (window.innerWidth / 2) - (ballRadius / 2);
const ballYStart = 0;

let prevTime = 0;
let reverse = false;

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
	ball.circle(0, 0, ballRadius);
	ball.fill(ballColor);
	ball.x = ballXStart;
	ball.y = ballYStart;

	app.stage.addChild(ball);
}

const animate = (timestamp) => {

	if (!prevTime) {
		prevTime = timestamp;
	}
	const deltaTime = timestamp - prevTime;
	prevTime = timestamp;

	if (reverse) {
		ball.y -= speed;
	} else {
		ball.y += speed;
	}

	if (ball.y >= floor) {
		reverse = true;
	}

	if (ball.y <= cieling) {
		reverse = false;
	}

	requestAnimationFrame(animate);
}

const updatePositions = () => {
	ball.x = (window.innerWidth / 2) - (ballRadius / 2);

	floor = window.innerHeight - 50;
}

window.addEventListener('load', () => {
	initApp();
	initBall();

	requestAnimationFrame(animate);
});

window.addEventListener('resize', () => {
	updatePositions();
});