//Open & Close Contact Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"
}

//Displays first image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

//Changes slide when left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//Contact Form Close
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

//Ensures that Name, email, and comment are filled out in the form before submitting
function validateForm() {
    let x = document.forms["contact_form"]["Name"].value;
    if (x == "") {
        alert("Please enter your Name.");
        return false;
    }
    let y = document.forms["contact_form"]["Email"].value;
    if (y == "") {
        alert("Please enter your Email.");
        return false;
    }
    let z = document.forms["contact_form"]["Message"].value;
    if (z == "") {
        alert("Please enter a message.");
        return false;
    }
}