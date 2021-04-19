const menu = document.getElementById('menu'),
      content = document.getElementById('content'),
      section = content.querySelectorAll('section'),
      overlay = document.querySelector('.overlay'),
      progressBar = document.querySelector('.progress'),
      body = document.querySelector('body');
      
window.addEventListener('scroll', (e)=>{
   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
   let windowHeight = document.documentElement.scrollHeight -document.documentElement.clientHeight;
   let per = windowScroll / windowHeight * 100;
   progressBar.style.width = `${per}%`;
});



function burger(){
    menu.classList.toggle('menu__active');  
    content.classList.toggle('content__active');
    body.classList.toggle('lock');
}

overlay.addEventListener('click', ()=>{
    menu.classList.toggle('menu__active');  
    content.classList.toggle('content__active');
    body.classList.toggle('lock');
});

// section two
// section two
// section two

const  card = document.querySelector('.descr_card'),
        cardFront = card.querySelector('.descr__inner_front'),
        cardBack = card.querySelector('.descr__inner_back');


card.addEventListener('click', ()=>{
    cardFront.classList.toggle('card_active_front');
    cardBack.classList.toggle('card_active_back');
    
});


// thrid one section
// thrid one section
// thrid one section


const sectionThree = document.querySelector('.section_three'),
        cardsToMove = sectionThree.querySelectorAll('.card');


cardsToMove.forEach(function(element){
    const halfWidth = element.offsetWidth/2,
    halfHeight = element.offsetHeight/2;

    element.addEventListener('mousemove', (e)=>{
        element.style.transform = `rotateX(${-(e.offsetY - halfHeight)/ 10 }deg) 
        rotateY(${(e.offsetX - halfWidth) / 20 }deg)`;
    });

    element.addEventListener(`mouseout`,()=>{
        element.style.transform = `rotateX(0deg) 
        rotateY(0deg)`;
    });
});


// section four 


const circle = document.querySelector('.progress-ring__circle'),
      numberOfPercent = document.querySelector('.number'),
      containerBar = document.querySelector('.container_bar'),
      R = circle.r.baseVal.value,
      circlefences = 2 * Math.PI * R;
let counterOfPercent = 0;

circle.style.strokeDasharray = `${circlefences } ${circlefences}`;
circle.style.strokeDashoffset = circlefences;



function setProgress(persent){
    if(counterOfPercent <= 100){
        let offset = circlefences - persent / 100 * circlefences;
    circle.style.strokeDashoffset = offset;
    numberOfPercent.textContent = `${counterOfPercent}%`;
    }
}

function downProgress(persent){
    let offset = circlefences - persent / 100 * circlefences;
    circle.style.strokeDashoffset = offset;
    numberOfPercent.textContent = `${counterOfPercent}%`;
}

containerBar.addEventListener('click', (e)=>{
    if(e.target == containerBar && counterOfPercent > 0){
        counterOfPercent--;
        downProgress(counterOfPercent);
    } 
});

numberOfPercent.addEventListener('click', function(){
    setProgress(counterOfPercent);
    counterOfPercent++;

});



// last_one last_one last_one
// last_one last_one last_one
// last_one last_one last_one

const container = document.querySelector('.container'),
        lastSection = document.querySelector('#last_one'),
        lastSectionBox = lastSection.querySelector('.box');

lastSectionBox.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('box')){
        container.classList.toggle('container_origin');
    }
});

