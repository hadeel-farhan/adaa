var slideIndex1 = 0;
var slideIndex2 = 0;
carousel("mySlides", slideIndex1, 1);
carousel("mySlides2", slideIndex2, 2);

function carousel(className, slideIndex, carouselNumber) {
    var i;
    var x = document.getElementsByClassName(className);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(function () {
        if (carouselNumber === 1) {
            carousel("mySlides", slideIndex, 1);
        } else {
            carousel("mySlides2", slideIndex, 2);
        }
    }, 2000); // Change image every 2 seconds
}
