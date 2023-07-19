//MOBILE MENU//////////////////

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



//ABOUT US UNDERLINES////////////////
let blueBars = document.querySelectorAll('.about-2-main .about-underline');

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
            if(window.matchMedia("(max-width: 900px)")){
                entry.target.style.animation = "slideInAnimation 2s ease";
                entry.target.style.animationFillMode = "forwards"; 
                
            } else {
                entry.target.style.animation = "spreadAnimation 2s ease";
                entry.target.style.animationFillMode = "forwards";  
            }
            
        }
    });
};

const slideInObserver = new IntersectionObserver(slideInVisible);
slideInElements.forEach(element => slideInObserver.observe(element));

// //TEAM AVATARS


  let avatars = document.querySelectorAll('.avatar-circle');
  let marginPercentage = (20 * window.innerHeight) / 100;   
  console.log(marginPercentage);

  function isCenterViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= marginPercentage &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight - marginPercentage * 1.5 || document.documentElement.clientHeight - marginPercentage * 1.5) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
console.log(isCenterViewport)

  function avatarPosition() {
    avatars.forEach(avatar => {
        if(isCenterViewport(avatar)){
            if(window.matchMedia("(max-width: 900px)").matches){
                avatar.style.transform = 'scale(3) translate(10px)';
                console.log("menor que 900")
            } else {
                avatar.style.transform = 'scale(3) translate(20px)';
                console.log("maior que 900")
            }
        } else {
            avatar.style.transform = 'scale(1) translate(0)';
            console.log("fora de vista")
        }
    })
  }
  
  window.addEventListener("scroll", avatarPosition);

