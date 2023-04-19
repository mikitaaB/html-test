const handleInputChange = (e) => {
	const target = e.target;
	if (e.target.type !== "range") {
		target = rangeSlider;
	}
	const rangeSpan = document.getElementById("range-span");
	rangeSpan.textContent = target.value + "%";
}

const rangeSlider = document.getElementById("range-slider");
rangeSlider.addEventListener("input", handleInputChange);

const select = document.querySelector(".select-system");
const selectTitle = select.querySelector(".select-system__title");
const selectLabels = select.querySelectorAll(".select-system__label");

select.addEventListener("click", () => {
	if ("active" === select.getAttribute("data-state")) {
		select.setAttribute("data-state", "");
	} else {
		select.setAttribute("data-state", "active");
	}
});

for (let i = 0; i < selectLabels.length; i++) {
	selectLabels[i].addEventListener("click", e => {
		selectTitle.textContent = e.target.textContent;
		select.setAttribute("data-state", "");
	});
}