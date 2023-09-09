//MOBILE MENU//////////////////

let burgerButton = document.querySelector('.burger-icon');
let closeButton = document.querySelector('.burger-nav .bi-x-lg');
let mobileMenu = burgerButton.nextElementSibling;
let body =  document.querySelector('body');

burgerButton.addEventListener('click', showMenu);
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
let blueBars = document.querySelectorAll('.about-page .about-underline');

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


//case studies dropdown
let cases = document.querySelectorAll('.case');

for (let i = 0; i < cases.length; i++) {
    
    cases[i].addEventListener('click', (e) => {
        //dropdown behaviour
        let plusLines = document.querySelectorAll('.case svg line:first-of-type');
        let line = plusLines[i];
        let casesDropdowns = document.querySelectorAll('.case-dropdown');
        let selectionUnderlines = document.querySelectorAll('.selection-underline');
        let caseTextLi = document.querySelectorAll(`.case-${i+1}-dropdown li`);
        let header = document.querySelector('header');
        let mqDesktop = window.matchMedia("(min-width: 900px)");

        
        if(line.classList.contains('isOpen')){
            line.classList.remove('isOpen');
            casesDropdowns[i].classList.remove('case-visible');
            selectionUnderlines[i].classList.remove('show-underline');
            if(mqDesktop.matches){
                header.scrollIntoView({behavior: 'smooth'}, true);
            }

            for(let k = 0 ; k < caseTextLi.length ; k++) {
                caseTextLi[k].classList.remove('zero-translate')
                caseTextLi[k].classList.add('negative-translate')
            }
        } else {
            //close all other cases and return negative left translate to text
            for(let j = 0; j < casesDropdowns.length ; j++) {
                casesDropdowns[j].classList.remove('case-visible');
                selectionUnderlines[j].classList.remove('show-underline');
                plusLines[j].classList.remove('isOpen');
                let allCasesTextLi = casesDropdowns[j].querySelectorAll(`.case-${j+1}-dropdown li`);
            
                for (let l = 0 ; l < allCasesTextLi.length ; l++){
                    allCasesTextLi[l].classList.remove('zero-translate');
                    allCasesTextLi[l].classList.add('negative-translate');
                }
            }


            //open target case
            casesDropdowns[i].classList.add('case-visible');
            selectionUnderlines[i].classList.add('show-underline');
            line.classList.add('isOpen');
            cases[i].scrollIntoView({behavior: 'smooth'}, true);
            


            for(let k = 0 ; k < caseTextLi.length ; k++) {
                caseTextLi[k].classList.remove('negative-translate');
                caseTextLi[k].classList.add('zero-translate');
            }
        

        }

    })
       
}

