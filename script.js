const slideshow = document.getElementById("slideshow");

const images = slideshow.getElementsByTagName("img");
let currentImage = 0;

setInterval(() => {
	for (let i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	images[currentImage].style.display = "block";
	currentImage = (currentImage + 1) % images.length;
}, 3000);

var modal = document.getElementById("myModal");
        
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

var database = [
    "stefan.g1234",
    "dominik.heslo",
    "petr.c1234",
    "jachym.d1234",
]

function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var loginData = username + "." + password

    for (let i = 0; i < database.length; i++) {
        if(loginData == database[i]) {
            console.log("Login sucessful")
            break;
        } else if(i == database.length - 1){
            console.log("Incorrect input")
        }
    }
}