document.addEventListener("DOMContentLoaded", function () {
	let { gridIDs, count } = initializeGridDown();
});

$(document).ready(function () {
	$(".svg").animate({ left: window.innerWidth - 20 }, 2500);
});

window.addEventListener("resize", function () {
	console.log("Window Resized");
	console.log(
		`Width: ${this.window.innerWidth}, Height: ${this.window.innerHeight}`
	);
});

function initializeGridDown() {
	let x = 0;
	let y = 180;
	let gridIDs = [];

	while (x <= y) {
		let gridBackground = document.getElementById("grid");
		let gridItem = document.createElement("div");
		gridItem.className = `grid-item`;
		gridItem.id = `${x}`;
		gridItem.style.width = "60px";
		gridItem.style.height = "60px";
		gridBackground.appendChild(gridItem);

		x = x + 1;

		// $("#1").animate({ left: "500px" });

		gridIDs.push(gridItem.id);
	}

	return { gridIDs, count: x };
}

console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
