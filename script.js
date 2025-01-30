let x = 0;
let y = 111;

while (x <= y) {
	x = x + 1;

	let gridBackground = document.getElementById("grid");
	let gridItem = document.createElement("div");
	gridItem.className = `grid-item`;
	gridItem.id = `gridIdentifier${x}`;
	gridBackground.appendChild(gridItem);
}
