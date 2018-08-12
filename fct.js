// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Return today's date and time
var currentTime = new Date()

// returns the year (four digits)
var year = currentTime.getFullYear()

document.getElementById("b").innerHTML = "© Full Circle Thrift Shop " + year