let bars = document.querySelectorAll('.bar');

function animation2(bar , height) {
    bar.style.transform = `translateY(-${height}px)  rotate(-${i-10}deg) `;
};

for (i = 0 ; i<bars.length; i++){
    bars[i].style.height = `${i*(i/20)}px`;
    let barHeight = bars[i].style.height;
    bars[i].style.marginBottom = `-${barHeight}`;
    bars[i].style.transition = `transform .5s ease`;
    bars[i].style.transitionDelay = `${i / 100}s`;
    let halfHeight = parseFloat(barHeight)/2;
    animation2(bars[i], halfHeight);
}

let bars2 = document.querySelectorAll('.bar2');


for (i = 0 ; i<bars2.length; i++){
    bars2[i].style.height = `${i*(i/20)}px`;
    let barHeight = bars2[i].style.height;
    bars2[i].style.marginBottom = `-${barHeight}`;
    bars2[i].style.transition = `transform .5s ease`;
    bars2[i].style.transitionDelay = `${i / 100}s`;
    let halfHeight = parseFloat(barHeight)/2;
    animation2(bars2[i], halfHeight);
}

/////////////

let burguerButton = document.querySelector('.hamburguer-icon');
let closeButton = document.querySelector('.hamburguer-nav .bi-x-lg');
let mobileMenu = burguerButton.nextElementSibling;
let body =  document.querySelector('body');

burguerButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu)

function showMenu() {
    mobileMenu.classList.add('show-menu');
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
}
function hideMenu() {
    mobileMenu.classList.remove('show-menu');
    body.style.height = 'unset';
    body.style.overflowY = 'hidden';
}

console.log(burguerButton)
console.log(mobileMenu)
console.log(closeButton)
console.log(body)


///CAROUSEL
$(".carousel-home").owlCarousel({
    items:1,
    nav:true,
    merge:true,
    dots: true,
    lazyLoad:true,
});

