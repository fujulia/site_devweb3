
// Script do cardápio carrosel
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".produto").width();
var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
    //var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var carrosel=$(this).siblings(".carousel-inner")[0];
    var carouselWidth = $(this).siblings(".carousel-inner")[0].scrollWidth;

    var cardWidth = $(this).siblings(".carousel-inner").find(".produto").width();
    var scrollPosition = parseInt(carrosel.dataset.casa);
    var numberCards= $(this).siblings(".carousel-inner").find(".produto").length;


    console.log(carouselWidth, cardWidth, scrollPosition, carrosel.dataset.casa);
    if (scrollPosition < (carouselWidth - cardWidth * numberCards)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        $(this).siblings(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
        carrosel.dataset.casa=scrollPosition;
    }
    
   // $(this).siblings(".carousel-inner")[0].data("scroll",scrollPosition);
});

$(".carousel-control-prev").on("click", function () {

    //var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var carrosel=$(this).siblings(".carousel-inner")[0];
    var carouselWidth = $(this).siblings(".carousel-inner")[0].scrollWidth;

    var cardWidth = $(this).siblings(".carousel-inner").find(".produto").width();
    var scrollPosition = parseInt(carrosel.dataset.casa);
    var numberCards= $(this).siblings(".carousel-inner").find(".produto").length;




    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        /*$(".carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );*/
        $(this).siblings(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        carrosel.dataset.casa=scrollPosition;
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


const valor = document.getElementById(`valor`);
const adicionar = document.getElementById(`adicionar`);
const subtrair = document.getElementById(`subtrair`);
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

const ullistButton = document.getElementById('ullistTopics');
let verificador = 0;
function openSubMenu(){
    if(window.innerWidth <= 950){
        verificador++
        if(verificador%2 == 0){
            ullistButton.style.display = "none"
        }
        else{
            ullistButton.style.display = "block"
        }
    }
}   
    


