import { refs } from "./refs";

function changesResolWidthInput(value) {
	refs.resolWidthInput.value = value;
}

function changesResolHeightInput(value) {
	refs.resolHeightInput.value = value;
}

export { changesResolWidthInput, changesResolHeightInput };
