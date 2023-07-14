


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



//ABOUT US BLUE BARS
let blueBars = document.querySelectorAll('.about-us-3 .about-underline');

function blueUnderlineVisible(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "aboutUnderlineAnimation 2s ease";
            entry.target.style.animationFillMode = "forwards";
            observeBlueBars.unobserve(entry.target);
        };
    });
};

const observeBlueBars = new IntersectionObserver(blueUnderlineVisible);

blueBars.forEach(bar => observeBlueBars.observe(bar));

//LAZY LOAD

let lazyElements = document.querySelectorAll('.lazy');

function lazyElementVisible(entries) {
    entries.map((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "1";
        }
    });
}

const observeLazyImg = new IntersectionObserver(lazyElementVisible);

lazyElements.forEach(lazyElement => observeLazyImg.observe(lazyElement));

//SLIDE IN ELEMENTS

let slideInElements = document.querySelectorAll('.spread-apart');

function slideInVisible(entries) {
    entries.map((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.animation = "spreadAnimation 2s ease";
            entry.target.style.animationFillMode = "forwards";
        }
    });
};

const slideInObserver = new IntersectionObserver(slideInVisible);
slideInElements.forEach(element => slideInObserver.observe(element));

//TEAM AVATARS
line1 = $('#line1');
avatar1 = $('#avatar-1');
avatar2 = $('#avatar-2');

var position1 = avatar1.position();
var position2 = avatar2.position();

line1
  .attr('x1', position1.left)
  .attr('y1', position1.top)
  .attr('x2', position2.left)
  .attr('y2', position2.top);

  //avatar changes

  let avatars = document.querySelectorAll('.avatar-circle');

  function isCenterViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 200 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight -200 || document.documentElement.clientHeight - 200) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function avatarColor() {
    avatars.forEach(avatar => {
        if(isCenterViewport(avatar)){
            avatar.style.transform = 'scale(3) translate(20px)';
        } else {
            avatar.style.transform = 'scale(1) translate(0)';

        }
    })
  }
  
  window.addEventListener("scroll", avatarColor);