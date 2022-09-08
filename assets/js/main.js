const tabs = document.querySelectorAll('.tabs');

tabs.forEach((tabs) => {
	const tabButtons = tabs.querySelectorAll('.tab');
	tabButtons.forEach((tabButton) => {
		tabButton.addEventListener('click', () => {
			tabButtons.forEach((tabButton) => {
				tabButton.classList.remove('active');
				const target = document.querySelector(
					tabButton.getAttribute('data-target'),
				);
				if (target) target.style.display = 'none';
			});

			tabButton.classList.add('active');
			const target = document.querySelector(
				tabButton.getAttribute('data-target'),
			);
			if (target) target.style.display = 'block';
		});
	});
});
