//MOBILE MENU//////////////////

let burgerButton = document.querySelector('.top-nav__burger');
let closeButton = document.querySelector('.top-nav__close');
let mobileMenu = burgerButton.nextElementSibling;
let body =  document.querySelector('body');

burgerButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

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
let blueBars = document.querySelectorAll('.txt-icon__underline');

function blueUnderlineVisible(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "aboutUnderlineAnimation 2s ease";
            entry.target.style.animationFillMode = "forwards";
            observeBlueBars.unobserve(entry.target);
        }
    });
}

const observeBlueBars = new IntersectionObserver(blueUnderlineVisible);

blueBars.forEach(bar => observeBlueBars.observe(bar));

//SLIDE IN ELEMENTS// used in about section

//select elements with class 'slide-in'
let slideInElements = document.querySelectorAll('.slide-in');

//callback function to be called when elements are visible
function slideInVisible(entries) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
                //apply animation to visible element
                entry.target.style.animation = "slideInAnimation 2s ease";
                entry.target.style.animationFillMode = "forwards"; 
        }
    });
}

//create intersection Observer with the callback function
const slideInObserver = new IntersectionObserver(slideInVisible);

//observe each 'slide-in' element
slideInElements.forEach(element => slideInObserver.observe(element));

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


//CASE STUDIES DROPDOWNS
let cases = document.querySelectorAll('.case');

for (let i = 0; i < cases.length; i++) {
    
    cases[i].addEventListener('click', (e) => {
        //dropdown behaviour
        let plusLines = document.querySelectorAll('.case__plus-line');
        let line = plusLines[i];
        let casesDropdowns = document.querySelectorAll('.dropdown');
        let selectionUnderlines = document.querySelectorAll('.case__underline');
        let caseTextLi = document.querySelectorAll(`.dropdown--${i+1} li`);
        let header = document.querySelector('header');
        let mqDesktop = window.matchMedia("(min-width: 900px)");

        
        if(line.classList.contains('is-open')){
            line.classList.remove('is-open');
            casesDropdowns[i].classList.remove('case-visible');
            selectionUnderlines[i].classList.remove('show-underline');
            if(mqDesktop.matches){
                header.scrollIntoView({behavior: 'smooth'}, true);
            }

            for(let k = 0 ; k < caseTextLi.length ; k++) {
                caseTextLi[k].classList.remove('zero-translate');
                caseTextLi[k].classList.add('negative-translate');
            }
        } else {
            //close all other cases and return negative left translate to text
            for(let j = 0; j < casesDropdowns.length ; j++) {
                casesDropdowns[j].classList.remove('case-visible');
                selectionUnderlines[j].classList.remove('show-underline');
                plusLines[j].classList.remove('is-open');
                let allCasesTextLi = casesDropdowns[j].querySelectorAll(`.dropdown--${j+1} li`);
            
                for (let l = 0 ; l < allCasesTextLi.length ; l++){
                    allCasesTextLi[l].classList.remove('zero-translate');
                    allCasesTextLi[l].classList.add('negative-translate');
                }
            }


            //open target case
            casesDropdowns[i].classList.add('case-visible');
            selectionUnderlines[i].classList.add('show-underline');
            line.classList.add('is-open');
            cases[i].scrollIntoView({behavior: 'smooth'}, true);
            


            for(let k = 0 ; k < caseTextLi.length ; k++) {
                caseTextLi[k].classList.remove('negative-translate');
                caseTextLi[k].classList.add('zero-translate');
            }
        

        }

    });
       
}

// MANAGEMENT TEAM ANIMATED CIRCLES


let avatars = document.querySelectorAll('.manager__circle');
let marginPercentage = (20 * window.innerHeight) / 100;   

function isCenterViewport(element){
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= marginPercentage &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight - marginPercentage * 1.5 || document.documentElement.clientHeight - marginPercentage * 1.5) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function avatarPosition() {
  avatars.forEach(avatar => {
      if(isCenterViewport(avatar)){
          if(window.matchMedia("(max-width: 900px)").matches){
              avatar.style.transform = 'scale(3) translate(10px)';
          } else {
              avatar.style.transform = 'scale(3) translate(20px)';
          }
      } else {
          avatar.style.transform = 'scale(1) translate(0)';
      }
  });
}

window.addEventListener("scroll", avatarPosition);
