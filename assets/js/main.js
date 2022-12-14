document
	.querySelector(
		'[data-target="#login-with-phone-and-password"]'
	)
	.addEventListener("click", (event) => {
		document
			.querySelector("#login-with-phone-and-password")
			.classList.remove("hidden");
		document
			.querySelector("#login-with-qr-code")
			.classList.add("hidden");
		document
			.querySelector(
				'[data-target="#login-with-qr-code"]'
			)
			.classList.remove("active");
		document
			.querySelector(
				'[data-target="#login-with-phone-and-password"]'
			)
			.classList.add("active");
	});

document
	.querySelector('[data-target="#login-with-qr-code"]')
	.addEventListener("click", (event) => {
		document
			.querySelector("#login-with-phone-and-password")
			.classList.add("hidden");
		document
			.querySelector("#login-with-qr-code")
			.classList.remove("hidden");
		document
			.querySelector(
				'[data-target="#login-with-qr-code"]'
			)
			.classList.add("active");
		document
			.querySelector(
				'[data-target="#login-with-phone-and-password"]'
			)
			.classList.remove("active");
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
