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

fontes.forEach(fonte => {
    fonte.addEventListener('click', cambiarFonte)
});

function cambiarFonte() {
    let fontName = this.innerHTML;
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
        let plusLines = document.querySelectorAll('.case svg line:first-of-type');
        let line = plusLines[i];
        let casesTexts = document.querySelectorAll('.case-text');
        let selectionMarks = document.querySelectorAll('.selection-mark');

        
        if(line.classList.contains('isOpen')){
            line.classList.remove('isOpen');
            casesTexts[i].classList.remove('case-visible');
            selectionMarks[i].classList.remove('show-mark')
        } else {
            for(let j = 0; j < casesTexts.length ; j++) {
                casesTexts[j].classList.remove('case-visible');
                selectionMarks[j].classList.remove('show-mark');
                plusLines[j].classList.remove('isOpen');
            }
            casesTexts[i].classList.add('case-visible');
            selectionMarks[i].classList.add('show-mark');
            line.classList.add('isOpen');
            

        }
        

    })
    
    
}

// cases.forEach(cas => {
//     let plus = cas.lastElementChild;
//     let line = plus.children[1];
//     let caseText = document.querySelector(`.`)
//     cas.addEventListener('click', (e) => {
//         line.classList.toggle('rotate90');

//     })

// })

// plusIcons.forEach(icon => {
//     icon.addEventListener('click', (e) => {
//         let line = icon.children[1];
//         let imgWrapper = icon.parentElement;
//         let caseText = imgWrapper.nextElementSibling;

//         if(caseText.classList.contains("case-hidden")){
//             console.log("class-hidden");
//             caseText.classList.toggle("case-visible");
//         }
//         line.classList.toggle('rotate90');
//         // caseText.classList.toggle('case-hidden');
//     })
// })