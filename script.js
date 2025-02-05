document.addEventListener("DOMContentLoaded", function () {
	let { gridIDs, count } = initializeGrid();
	gridIDs.forEach((id) => {
		let newID = removeLettersFromString(id, "gridIDNumber");
		console.log(`Original ID: ${id}, New ID: ${newID}`);
	});
	trackItems(count); // Pass count to trackItems
});

window.addEventListener("resize", function () {
	console.log("Window Resized");
	trackItems(); // Optionally, you can re-run any necessary functions here
});

function initializeGrid() {
	let x = 0;
	let y = 111;
	let gridIDs = [];

	while (x <= y) {
		let gridBackground = document.getElementById("grid");
		let gridItem = document.createElement("div");
		gridItem.className = `grid-item`;
		gridItem.id = `gridIDNumber${x}`;
		gridBackground.appendChild(gridItem);

		x = x + 1;

		gridIDs.push(gridItem.id);
	}

	return { gridIDs, count: x };
}

// grid items start at multiples of 14
function trackItems(count) {
	let gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((item) => {
		let rect = item.getBoundingClientRect();
		let number = removeLettersFromString(item.id, "gridIDNumber");
		console.log(
			`ID: ${number}\nHeight: ${rect.height}\nWidth: ${rect.width}\nTop: ${rect.top}\nLeft: ${rect.left}`
		);
		gridMovement(item, number, count); // Pass the item, its ID, and count to gridMovement
	});
}

function removeLettersFromString(str, lettersToRemove) {
	// Create a regular expression pattern to match the letters to remove
	let pattern = new RegExp(`[${lettersToRemove}]`, "g");
	// Replace the matched letters with an empty string and capture the result
	let newString = str.replace(pattern, "");
	// Convert the remaining string to a number
	let number = parseFloat(newString, 10);
	return number; // Return the number
}

function gridMovement(item, id, count) {
	let quotient = id / 14;

	// Use count in the function
	console.log(`Count: ${count}`);

	// Check if id / 14 is a whole number and within the range 0 to 9
	if (Number.isInteger(quotient) && quotient >= 0 && quotient <= 9) {
		// Change the bottom border to solid red
		item.style.borderBottom = "2px solid red";
	}

	// Check if the quotient has any remainders
	if (hasRemainder(quotient)) {
		item.style.backgroundColor = "blue";
	}
}

function hasRemainder(num) {
	return num % 1 !== 0;
}
