
// Script do cardápio carrosel
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".produto").width();
var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
    console.log(carouselWidth, cardWidth, scrollPosition);
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
    }
});

$(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
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

function openMenu() {
    if (window.innerWidth <= 950) {
        const menuburger = document.getElementById('menuH');
        const navlist = document.querySelector('.menu');

        if (menuburger.classList.value.indexOf("bx-x") > -1) {
            navlist.classList.remove("openMenu");
            menuburger.classList.remove("bx-x");
            menuburger.classList.add("bx-menu");
        } else {
            navlist.classList.add("openMenu");
            menuburger.classList.remove("bx-menu");
            menuburger.classList.add("bx-x");
        }
    }
};

const valor = document.getElementById('valor');
const adicionar = document.getElementById('adicionar');
const subtrair = document.getElementById('subtrair');
let contador = 1;

const adicionarvalor = () => {
    valor.innerHTML = contador;
}

adicionar.addEventListener('mousedown', () => {
    contador++
    adicionarvalor()
}, 100)
subtrair.addEventListener('mousedown', () => {
    if (contador > 1) {
        contador -= 1
    }
    adicionarvalor()
}, 100)
