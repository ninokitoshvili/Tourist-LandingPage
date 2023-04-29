divCountainer = document.getElementById("information");
const api_url = "https://fakerapi.it/api/v1/images?_quantity=10&_type=town";

async function getINF() {
	const response = await fetch(api_url);
	const data = await response.json();
	console.log(data);
	console.log(data.data[0].title);
	for (let i = 0; i < data.data.length; i++) {
		const div = document.createElement("div");
		const img = document.createElement("img");
		const h4 = document.createElement("h4");
		const p = document.createElement("p");

		const title = document.createTextNode(data.data[i].title);
		const information = document.createTextNode(data.data[i].description);

		img.src = data.data[i].url;
		img.alt = data.data[i].title;
		div.className = " divCointainer  ";

		h4.appendChild(title);
		p.appendChild(information);
		div.appendChild(img);
		div.appendChild(h4);
		div.appendChild(p);
		divCountainer.appendChild(div);
	}
}

getINF();
