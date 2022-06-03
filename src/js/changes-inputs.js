import { refs } from "./refs";

function changesResolutionWidthInput(value) {
	refs.resolutionWidthInput.value = value;
}

function changesResolutionHeightInput(value) {
	refs.resolutionHeightInput.value = value;
}

function changeRatioWidthInput(value) {
	refs.ratioWidthInput.value = value;
}

function changeRatioHeightInput(value) {
	refs.ratioHeightInput.value = value;
}

function changeCoeffInput(value) {
	refs.coeffInput.value = value;
}

export { changesResolutionWidthInput, changesResolutionHeightInput, changeRatioWidthInput, changeRatioHeightInput, changeCoeffInput };
