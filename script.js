document.addEventListener("DOMContentLoaded", function () {
	initializeGrid();
	trackItems();
});

window.addEventListener("resize", function () {
	console.log("Window Resized");
	trackItems();
});

function initializeGrid() {
	let x = 0;
	let y = 111;

	while (x <= y) {
		x = x + 1;

		let gridBackground = document.getElementById("grid");
		let gridItem = document.createElement("div");
		gridItem.className = `grid-item`;
		gridItem.id = `gridIDNumber${x}`;
		gridBackground.appendChild(gridItem);

		// document.getElementById(`gridIdentifier${x}`).style.borderBottomColor =
		// 	"blue";
	}
}

//grid items start at multiples of 14
function trackItems() {
	let gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((item) => {
		let rect = item.getBoundingClientRect();
		console.log(
			`ID: ${item.id}\nHeight: ${rect.height}\nWidth: ${rect.width}\nTop: ${rect.top}\nLeft: ${rect.left}`
		);
	});
}
