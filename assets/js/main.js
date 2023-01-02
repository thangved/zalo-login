const tabButtons = document.querySelectorAll(".tab");
tabButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		tabButtons.forEach((btn) => {
			btn.classList.remove("active");
			document
				.querySelector(
					btn.getAttribute("data-target")
				)
				.classList.add("hidden");
		});

		button.classList.add("active");
		document
			.querySelector(
				button.getAttribute("data-target")
			)
			.classList.remove("hidden");
	});
});

document
	.querySelector("#select-code-button")
	.addEventListener("click", (event) => {
		document
			.querySelector("#select-code-modal")
			.classList.toggle("hidden");
	});

axios
	.get("https://restcountries.com/v2/all")
	.then((res) => {
		for (let i = 0; i < res.data.length; i++) {
			document.querySelector(
				"#select-code-modal"
			).innerHTML += `<div class="code-item" onclick="changeCode(${res.data[i].callingCodes[0]})">
			<img
				src="${res.data[i].flag}"
				alt=""
			/>
			<span
				class="country"
				>${res.data[i].name}</span
			>
			<span>+${res.data[i].callingCodes[0]}</span>
		</div>`;
		}
	});

function changeCode(code) {
	document.querySelector("#selecting-code").innerHTML =
		"+" + code;
}
