let x = 0;
let y = 108;

while (x <= y) {
	x = x;
	y = 96;

	let gridBackground = document.getElementById("grid");
	let gridBehaviour = '<div class="grid-item"></div>'.repeat(x + 1);

	gridBackground.innerHTML = gridBehaviour;

	// gridItem = document.getElementsByClassName("grid-item");
	// gridItem.addID(`gridIdentifier${x}`);
}
