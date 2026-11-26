const inpt = document.getElementById("ip");
const outpt = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	const num = Number(inpt.value);
	if (isNaN(num)) return;

	new Promise((resolve) => {
		setTimeout(() => {
			outpt.textContent = `Result: ${num}`;
			resolve(num);
		}, 2000);
	})
		.then((val) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					outpt.textContent = `Result: ${val}`;
					resolve(val);
				}, 2000);
			});
		})
		.then((val) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					const next = val * 2;
					outpt.textContent = `Result: ${next}`;
					resolve(next);
				}, 1000);
			});
		})
		.then((val) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					const next = val - 3;
					outpt.textContent = `Result: ${next}`;
					resolve(next);
				}, 1000);
			});
		})
		.then((val) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					const next = val / 2;
					outpt.textContent = `Result: ${next}`;
					resolve(next);
				}, 1000);
			});
		})
		.then((val) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					const next = val + 10;
					outpt.textContent = `Result: ${next}`;
					resolve(next);
				}, 1000);
			});
		})
		.then((val) => {
			outpt.textContent = `Final Result: ${val}`;
		});
});