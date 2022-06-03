let widthPx = 0;
let heightPx = 0;

let coefficient = 0;

let width = 16;
let height = 9;

if (!widthPx && !heightPx) recalculationOfValues(coefficient);

if (widthPx && heightPx) {
	calcRatio();
	coefficient = widthPx / width;
}

if (!widthPx && heightPx) {
	coefficient = Math.round(heightPx / height);
	recalculationOfValues(coefficient);
}

if (widthPx && !heightPx) {
	coefficient = Math.round(widthPx / width);
	recalculationOfValues(coefficient);
}

function calcRatio() {
	for (let i = 1; i <= widthPx; i += 1) {
		const widthAspect = heightPx % (widthPx / i);
		if (widthAspect === 0) {
			width = i;
			break;
		}
	}

	for (let i = 1; i <= heightPx; i += 1) {
		const heightAspect = widthPx % (heightPx / i);
		if (heightAspect === 0) {
			height = i;
			break;
		}
	}
}

function recalculationOfValues(coefficient) {
	widthPx = coefficient * width;
	heightPx = coefficient * height;
}

console.log("");
console.log("");
console.log(`Resolution: ${widthPx} x ${heightPx} px`);
console.log("");
console.log(`Coefficient: ${coefficient}`);
console.log("");
console.log(`Aspect ratio: ${width}:${height}`);
console.log("");
console.log("");
