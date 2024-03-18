const darkModeButton = document.getElementById("darkmode");
const slideshow = document.getElementById("slideshow");

darkModeButton.addEventListener("click", () => {
	document.body.classList.toggle("dark");
});

const images = slideshow.getElementsByTagName("img");
let currentImage = 0;

setInterval(() => {
	for (let i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	images[currentImage].style.display = "block";
	currentImage = (currentImage + 1) % images.length;
}, 3000);