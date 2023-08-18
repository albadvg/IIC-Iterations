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

//fontes
let fontes = document.querySelectorAll('.font-selector li');
let root = document.querySelector(':root');
let hFonts = document.querySelector('.headings-fonts');
let mFonts = document.querySelector('.main-fonts');

fontes.forEach(fonteA => {
    fonteA.addEventListener('click', cambiarFonte);
});

function cambiarFonte() {
    let fontName = this.innerHTML;
    if(this.parentElement===mFonts){
        var mFontsArray = Array.from(mFonts.children);
        mFontsArray.forEach(font => {
            font.style.fontWeight = '400';
        })
        this.style.fontWeight =  '900';

    } else if (this.parentElement===hFonts){
        var hFontsArray = Array.from(hFonts.children);
        hFontsArray.forEach(font => {
            font.style.fontWeight = '400';
        })
        this.style.fontWeight =  '900';

    }


   if(this.parentElement === mFonts){  
        root.style.setProperty('--mFont', `'${fontName}'`);
   } else {
        root.style.setProperty('--hFont', `'${fontName}'`);   
   }
}



//case studies dropdown
let cases = document.querySelectorAll('.case');

for (let i = 0; i < cases.length; i++) {
    
    cases[i].addEventListener('click', (e) => {
        //dropdown behaviour
        let plusLines = document.querySelectorAll('.case svg line:first-of-type');
        let line = plusLines[i];
        let casesDropdowns = document.querySelectorAll('.case-dropdown');
        let selectionMarks = document.querySelectorAll('.selection-mark');
        let caseTextLi = document.querySelectorAll(`.case-${i+1}-dropdown li`);

        
        if(line.classList.contains('isOpen')){
            line.classList.remove('isOpen');
            casesDropdowns[i].classList.remove('case-visible');
            selectionMarks[i].classList.remove('show-mark');

            for(let k = 0 ; k < caseTextLi.length ; k++) {

                caseTextLi[k].classList.remove('zero-translate')
                caseTextLi[k].classList.add('negative-translate')
                // caseTextLi[k].style.transform = 'translateX(-50px)';
                // caseTextLi[k].style.transition = 'transform 1s ease';
            }
        } else {
            //close all other cases and return negative left translate to text
            for(let j = 0; j < casesDropdowns.length ; j++) {
                casesDropdowns[j].classList.remove('case-visible');
                selectionMarks[j].classList.remove('show-mark');
                plusLines[j].classList.remove('isOpen');
                let allCasesTextLi = casesDropdowns[j].querySelectorAll(`.case-${j+1}-dropdown li`);
            
                for (let l = 0 ; l < allCasesTextLi.length ; l++){
                    allCasesTextLi[l].classList.remove('zero-translate');
                    allCasesTextLi[l].classList.add('negative-translate');
                    // allCasesTextLi[l].style.transform = 'translateX(-50px)';
                    // allCasesTextLi[l].style.transition = 'transform 1s ease';
                    
                }
            }


            //open target case
            casesDropdowns[i].classList.add('case-visible');
            selectionMarks[i].classList.add('show-mark');
            line.classList.add('isOpen');


            for(let k = 0 ; k < caseTextLi.length ; k++) {
                caseTextLi[k].classList.remove('negative-translate');
                caseTextLi[k].classList.add('zero-translate');
                // caseTextLi[k].style.transform = 'translateX(0px)';
                // caseTextLi[k].style.transition = 'transform 1s ease';

            }
        

        }

    })
       
}

