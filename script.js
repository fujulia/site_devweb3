
// Script do cardápio carrosel
for (let index = 1; index < 6; index++) {
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(`.produto${index}`).width();
var scrollPosition = 0;

$(`.carousel-control-next`).on("click", function () {
    console.log(carouselWidth,cardWidth,scrollPosition);
    if (scrollPosition < (carouselWidth - cardWidth * 4)&& button.classList.contains(`${index}`)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
    }
});

$(`.carousel-control-prev`).on("click", function () {
    if (scrollPosition > 0 && div.classList.contains(`${index}`)) {
        scrollPosition -= cardWidth;
        $(".carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
    }
});
var multipleCardCarousel = document.querySelector(
"#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
//rest of the code
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
interval: false
});
} else {
$(multipleCardCarousel).addClass("slide");
}
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
interval: false,
wrap: false,
});
}