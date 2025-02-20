document.addEventListener("DOMContentLoaded", function () {
	// Loop for creating amount of triangles
	let amount = colors.length;
	console.log(`${amount} Triangles floating in space`);
	for (let i = 0; i < amount; i++) {
		triangles.push(createTriangle(colors[i]));
		updatePosition(triangles[i]);
		setInterval(() => move(triangles[i]), 600); // Move each triangle every 600ms
	}
});

const gridSize = 40;
const triangleMiddle = 10;
const colors = [
	"white", // White
	"#DF5C53", // Red
	"#5D80DF", // Blue
	"#8ADF75", // Green
	"#E9DA78", // Yellow
	"#E09259", // Orange
	"#A767DF", // Purple
	"#63D8DF", // Cyan
	"#B5DF4E", // Lime
	"#DF709E", // Pink
	"#A05A2C", // Brown
];
const triangles = [];

function createTriangle(color) {
	const triangle = document.createElement("div");
	triangle.className = "triangle";
	triangle.style.borderBottomColor = color;
	document.body.appendChild(triangle);
	return {
		element: triangle,
		x:
			Math.floor(Math.random() * (window.innerWidth / gridSize)) *
			(gridSize - triangleMiddle), // Random x position
		y:
			Math.floor(Math.random() * (window.innerHeight / gridSize)) *
			(gridSize - triangleMiddle), // Random y position
		direction: Math.floor(Math.random() * 4), // Random initial direction
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
	setTimeout(() => (trail.style.opacity = "0"), 100); // Fade out trail
	setTimeout(() => trail.remove(), 1000); // Remove trail after 1 second
}

function updatePosition(triangleObj) {
	triangleObj.element.style.left = `${triangleObj.x}px`;
	triangleObj.element.style.top = `${triangleObj.y}px`;
	triangleObj.element.style.transform = `rotate(${
		triangleObj.direction * 90
	}deg)`; // Rotate triangle based on direction
}

function move(triangleObj) {
	createTrail(
		triangleObj.x + triangleMiddle / 2,
		triangleObj.y + triangleMiddle / 2,
		triangleObj.color
	); // Create trail at current position
	const choices = [-1, 0, 1]; // Left, Forward, and Right
	triangleObj.direction =
		(triangleObj.direction + choices[Math.floor(Math.random() * 3)] + 4) % 4; // Randomly change direction

	// Move triangle based on direction
	if (triangleObj.direction === 0) triangleObj.y -= gridSize - triangleMiddle;
	else if (triangleObj.direction === 1)
		triangleObj.x += gridSize - triangleMiddle;
	else if (triangleObj.direction === 2)
		triangleObj.y += gridSize - triangleMiddle;
	else if (triangleObj.direction === 3)
		triangleObj.x -= gridSize - triangleMiddle;

	// Ensure triangle stays within bounds
	triangleObj.x =
		Math.round(triangleObj.x / gridSize) * gridSize - triangleMiddle;
	triangleObj.y =
		Math.round(triangleObj.y / gridSize) * gridSize - triangleMiddle;

	if (
		triangleObj.x < 0 - triangleMiddle ||
		triangleObj.x >= window.innerWidth
	) {
		triangleObj.direction = (triangleObj.direction + 2) % 4; // Reverse direction if out of bounds
		triangleObj.x = Math.max(
			0,
			Math.min(triangleObj.x, window.innerWidth - gridSize)
		);
	}
	if (
		triangleObj.y < 0 - triangleMiddle ||
		triangleObj.y >= window.innerHeight
	) {
		triangleObj.direction = (triangleObj.direction + 2) % 4; // Reverse direction if out of bounds
		triangleObj.y = Math.max(
			0,
			Math.min(triangleObj.y, window.innerHeight - gridSize)
		);
	}
	updatePosition(triangleObj); // Update triangle position on screen
}
