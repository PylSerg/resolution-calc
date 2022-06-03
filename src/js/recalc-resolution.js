import { refs } from "./refs";

export default function recalcResolution() {
	resolutionWidth = refs.ratioWidthInput.value * coefficient;
	resolutionHeight = refs.ratioHeightInput.value * coefficient;
}
