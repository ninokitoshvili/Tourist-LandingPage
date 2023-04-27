const images = [
    './static/images/ourServicies/1.png','./static/images/ourServicies/2.png',    './static/images/ourServicies/3.png','./static/images/ourServicies/4.png',    './static/images/ourServicies/5.png','./static/images/ourServicies/6.png'
            ];
            const titles = [
                'flight booking','hotel & resort booking','family trip planner', 'cruise tour', 'fire camp', 'corporate holidays'
                        ];            
                        const informations = [
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
                                    ];
         
            const container = document.getElementById('ourservice-container');
         
            for (let i = 0; i < images.length; i++) {
                const div=document.createElement('div');
                const img = document.createElement('img');
                const h4=document.createElement('h4');
                const p=document.createElement('p');
                img.src = images[i];
                img.alt=titles[i];
                div.id='img'+i;
                
                const title = document.createTextNode(titles[i]);
                const information = document.createTextNode(informations[i]);
                div.className = "flex-btw";
                h4.appendChild(title);
                p.appendChild(information);
                div.appendChild(img);
                div.appendChild(h4);
                div.appendChild(p);
                container.appendChild(div);
                div.onclick=() => (console.log(div.id));
            //    console.log(div.id);
               
               
            }

            // document.getElementById(div.id).addEventListener("onclick", hover(div.id));

            function hover(){
                console.log('s')
                // for (let i = 0; i < images.length; i++) {
                //     const div=document.getElementById('img'+i);
                //     console.log(div)

                // }
}

// window.onload=()=>{
//     for (let i = 0; i < images.length; i++) {
//        let  div=document.getElementById("img"+i)
//         div.onclick = () => (console.log("img"+i));
//     }
// }



// window.onload = () => {
// 	let all = document.getElementsByClassName("zoomD"),
// 		lightbox = document.getElementById("lightbox"),
// 		outer = document.getElementsByClassName("outer");

// 	if (outer.length > 0) {
// 		for (let i of outer) {
// 			i.onclick = () => {
// 				for (var j = 0; j < all.length; j++) {
// 					if (i == outer[j]) {
// 						let clone = all[j].cloneNode(true);
// 						clone.className = "";
// 						lightbox.innerHTML = "";
// 						lightbox.appendChild(clone);
// 						lightbox.className = "show";
// 					}
// 				}
// 			};
// 		}
// 	}

// 	lightbox.onclick = () => (lightbox.className = "");
// };
