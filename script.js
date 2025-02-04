document.addEventListener("DOMContentLoaded", function () {
	initializeGrid();
	let { gridIDs, count } = initializeGrid();
	gridIDs.forEach((id) => {
		let newID = removeLettersFromString(id, "gridIDNumber");
		console.log(`Original ID: ${id}, New ID: ${newID}`);
	});
	trackItems();
	gridMovement();
});

window.addEventListener("resize", function () {
	console.log("Window Resized");
	// Optionally, you can re-run any necessary functions here
});

function initializeGrid() {
	let x = 0;
	let y = 111;
	let gridIDs = [];

	while (x <= y) {
		let gridBackground = document.getElementById("grid");
		let gridItem = document.createElement("div");
		gridItem.className = `grid-item`;
		gridItem.id = `${x}`;
		gridBackground.appendChild(gridItem);

		x = x + 1;

		gridIDs.push(gridItem.id);
	}

	return { gridIDs, count: x };
}

// grid items start at multiples of 14
function trackItems() {
	let gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((item) => {
		let rect = item.getBoundingClientRect(); // Convert the remaining string to a number
		let number = parseInt(item.id, 10);
		console.log(
			`ID: ${number}\nHeight: ${rect.height}\nWidth: ${rect.width}\nTop: ${rect.top}\nLeft: ${rect.left}`
		);
		gridMovement(item);
	});
}

// function removeLettersFromString(str, lettersToRemove) {
// 	// Create a regular expression pattern to match the letters to remove
// 	let pattern = new RegExp(`[${lettersToRemove}]`, "g");
// 	// Replace the matched letters with an empty string and capture the result
// 	let newString = str.replace(pattern, "");
// 	return number; // Return the number
// }

function gridMovement(item) {
	let idNum = parseInt(document.getElementById);
	let idStr = String(idNum);
	let quotient = idNum / 14;

	if (0 < id < 15) {
		item.style.borderRight = "2px solid red";
	}
	if (Number.isInteger(quotient) <= 8) {
		item.style.borderBottom = "2px solid blue";
	}
}
