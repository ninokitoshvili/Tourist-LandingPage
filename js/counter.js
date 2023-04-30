let nums = document.querySelectorAll(".nums .num");
let num = document.querySelectorAll(".num");

let section = document.querySelector(".main-title-container");
let started = false;

let nf = new Intl.NumberFormat("en-US");
nf.format(num[1].textContent);

console.log(num[0].textContent);

window.onscroll = function () {
	// console.log("scrolll");
	if (window.scrollY >= section.offsetTop) {
		// console.log(section.offsetTop);
		// console.log("dsd");
		if (!started) {
			// console.log("dssdfsd");

			nums.forEach((num) => startCounter(num));
		}
		started = true;
	}
};

function startCounter(el) {
	let goal = el.dataset.goal;
	// let nf = new Intl.NumberFormat("en-US");
	// nf.format(el.textContent);
	// nf.format(count);

	let count = setInterval(() => {
		el.textContent++;
		// for (let i = 0, len = num.length; i < len; i++) {
		// 	// num.innerHTML = new Intl.NumberFormat().format(num[i].innerHTML);
		// 	// // console.log("asas");
		// 	console.log(Number(num[i].innerHTML).toLocaleString("en"));
		// 	console.log(new Intl.NumberFormat().format(num[i].innerHTML));
		// }
		if (el.textContent == goal) {
			console.log("done");
			// for (let i = 0, len = num.length; i < len; i++) {
			// 	// num.innerHTML = new Intl.NumberFormat().format(num[i].innerHTML);
			// 	// // console.log("asas");
			// 	el.textContent = new Intl.NumberFormat().format(num[i].innerHTML);
			// 	console.log(Number(num[i].innerHTML).toLocaleString("en"));
			// 	console.log(new Intl.NumberFormat().format(num[i].innerHTML));
			// }
			// el.textContent = new Intl.NumberFormat().format(num[i].innerHTML);

			clearInterval(count);
		}
	}, 2000 / goal);
}

// startCounter(document.querySelectorAll(".nums .num")[0]);
