import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
const contentElem = document.getElementById('content');
const backgroundColor = 0xABDADC;
const ballColor = 0xFF4400;

const ball = new PIXI.Graphics();
const ballRadius = 50;
const ballXStart = (window.innerWidth / 2) - (ballRadius / 2);
const ballYStart = 0;
let ballXVelocity = 0;
let ballYVelocity = 0;

let floor = window.innerHeight - ballRadius;
let cieling = ballRadius;
let gravity = 9.81 / 100;

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

	ballYVelocity += gravity * deltaTime;
	ball.y += ballYVelocity;

	if (ball.y >= floor) {
		ball.y = floor;
		reverse = true;
		ballYVelocity -= 1;
		ballYVelocity *= -1;
	}

	if (ball.y <= cieling) {
		ball.y = cieling;
		reverse = false;
		ballYVelocity *= -1;
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