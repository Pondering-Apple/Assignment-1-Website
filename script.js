// document.addEventListener("DOMContentLoaded", function () {
// 	let { gridIDs, count } = initializeGridDown();
// });

// $(document).ready(function () {
// 	$(".svg").animate({ left: window.innerWidth - 20 }, 2500);
// });

// window.addEventListener("resize", function () {
// 	console.log("Window Resized");
// 	console.log(
// 		`Width: ${this.window.innerWidth}, Height: ${this.window.innerHeight}`
// 	);
// });

// function initializeGridDown() {
// 	let x = 0;
// 	let y = 180;
// 	let gridIDs = [];

// 	while (x <= y) {
// 		let gridBackground = document.getElementById("grid");
// 		let gridItem = document.createElement("div");
// 		gridItem.className = `grid-item`;
// 		gridItem.id = `${x}`;
// 		gridItem.style.width = "60px";
// 		gridItem.style.height = "60px";
// 		gridBackground.appendChild(gridItem);

// 		x = x + 1;

// 		// $("#1").animate({ left: "500px" });

// 		gridIDs.push(gridItem.id);
// 	}

// 	return { gridIDs, count: x };
// }

// console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);

document.addEventListener("DOMContentLoaded", function () {
	const triangle = createTriangle(colors[0]);
	move(triangle);
});
const gridSize = 40;
const colors = [
	"white", //White
	"#DF5C53", //Red
	"#5D80DF", //Blue
	"#8ADF75", //Green
	"#E9DA78", //Yellow
	"#E09259", //Orange
	"#A767DF", //Purple
	"#63D8DF", //Cyan
];
const triangles = [];

function createTriangle(color) {
	const triangle = document.createElement("div");
	triangle.className = "triangle";
	triangle.style.borderBottomColor = color;
	document.body.appendChild(triangle);
	return {
		element: triangle,
		x: Math.floor(Math.random() * (window.innerWidth / gridSize)) * gridSize,
		y: Math.floor(Math.random() * (window.innerHeight / gridSize)) * gridSize,
		direction: Math.floor(Math.random() * 4),
		color: color,
	};
}

function createTrail(px, py, color) {
	const trail = document.createElement("div");
	trail.className = "trail";
	trail.style.backgroundColor = color;
	trail.style.left = `${px + 2}px`;
	trail.style.top = `${py + 2}px`;
	document.body.appendChild(trail);
	setTimeout(() => (trail.style.opacity = "0"), 100);
	setTimeout(() => trail.remove(), 1000);
}

function updatePosition(triangleObj) {
	triangleObj.element.style.left = `${triangleObj.x}px`;
	triangleObj.element.style.top = `${triangleObj.y}px`;
	triangleObj.element.style.tranform = `rotate(${
		triangleObj.direction * 90
	}deg)`;
}

function move(triangleObj) {
	createTrail(triangleObj.x, triangleObj.y, triangleObj.color);
	const choices = [-1, 0, 1]; //Left, Forward and Right
	triangleObj.direction =
		(triangleObj.direction + choices[Math.floor(Math.random() * 3)] + 4) % 4;

	if (triangleObj.direction === 0) triangleObj.y -= gridSize;
	else if (triangleObj.direction === 1) triangleObj.x += gridSize;
	else if (triangleObj.direction === 2) triangleObj.y += gridSize;
	else if (triangleObj.direction === 3) triangleObj.x -= gridSize;

	triangleObj.x = Math.round(triangleObj.x / gridSize) * gridSize;
	triangleObj.y = Math.round(triangleObj.y / gridSize) * gridSize;

	if (triangleObj.x < 0 || triangleObj.x >= window.innerWidth - gridSize) {
		triangleObj.direction = (triangleObj.direction + 2) % 4;
		triangleObj.x = Math.max(
			0,
			Math.min(triangleObj.x, window.innerWidth - gridSize)
		);
	}
	if (triangleObj.y < 0 || triangleObj.y >= window.innerHeight - gridSize) {
		triangleObj.direction = (triangleObj.direction + 2) % 4;
		triangleObj.y = Math.max(
			0,
			Math.min(triangleObj.y, window.innerHeight - gridSize)
		);
	}
	updatePosition(triangleObj);

	for (let i = 0; i < 8; i++) {
		triangles.push(createTriangle(colors[i]));
		updatePosition(triangles[i]);
		setInterval(() => move(triangles[i]), 600);
	}
}
