import "./style.scss";

import { refs } from "./js/refs";
import { changesResolutionWidthInput, changesResolutionHeightInput, changeRatioWidthInput, changeRatioHeightInput, changeCoeffInput } from "./js/changes-inputs";

let resolutionWidth = 0;
let resolutionHeight = 0;
let ratioWidth = 0;
let ratioHeight = 0;
let coefficient = 0;

pasteRatioFromLocalStorage();

refs.resolutionWidthButton.addEventListener("click", () => {
	coefficient = Math.round(refs.resolutionWidthInput.value / refs.ratioWidthInput.value);

	recalcResolution();
	changeResolution();
	changeCoeffInput(coefficient);
});

refs.resolutionHeightButton.addEventListener("click", () => {
	coefficient = Math.round(refs.resolutionHeightInput.value / refs.ratioHeightInput.value);

	recalcResolution();
	changeResolution();
	changeCoeffInput(coefficient);
});

refs.resolutionWidthHeightButton.addEventListener("click", () => {
	calcRatio();
	changeRatio();

	coefficient = refs.resolutionWidthInput.value / ratioWidth;
	changeCoeffInput(coefficient);
});

refs.ratioButton.addEventListener("click", () => {
	localStorage.setItem("ratioWidth", refs.ratioWidthInput.value);
	localStorage.setItem("ratioHeight", refs.ratioHeightInput.value);
});

refs.coeffButton.addEventListener("click", () => {
	coefficient = refs.coeffInput.value;

	recalcResolution();
	changeResolution();
});

function recalcResolution() {
	resolutionWidth = refs.ratioWidthInput.value * coefficient;
	resolutionHeight = refs.ratioHeightInput.value * coefficient;
}

function calcRatio() {
	for (let i = 1; i <= refs.resolutionWidthInput.value; i += 1) {
		const widthAspect = refs.resolutionHeightInput.value % (refs.resolutionWidthInput.value / i);
		if (widthAspect === 0) {
			ratioWidth = i;
			break;
		}
	}

	for (let i = 1; i <= refs.resolutionHeightInput.value; i += 1) {
		const heightAspect = refs.resolutionWidthInput.value % (refs.resolutionHeightInput.value / i);
		if (heightAspect === 0) {
			ratioHeight = i;
			break;
		}
	}
}

function changeResolution() {
	changesResolutionWidthInput(resolutionWidth);
	changesResolutionHeightInput(resolutionHeight);
}

function changeRatio() {
	refs.ratioWidthInput.value = ratioWidth;
	refs.ratioHeightInput.value = ratioHeight;
}

function pasteRatioFromLocalStorage() {
	const ratioWidthLS = localStorage.getItem("ratioWidth");
	refs.ratioWidthInput.value = ratioWidthLS;

	const ratioHeightLS = localStorage.getItem("ratioHeight");
	refs.ratioHeightInput.value = ratioHeightLS;
}
