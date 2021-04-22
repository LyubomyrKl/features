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

//section one
//section one
//section one


const bgPar = document.querySelector('#bg-par'),
    moon = document.querySelector('#moon'),
    mountain = document.querySelector('#mountain'),
    road = document.querySelector('#road'),
    moonText = document.querySelector('#moonText');



window.addEventListener('scroll', ()=>{

    let valueScroll = window.scrollY;
    bgPar.style.top = -valueScroll * 0.3 + 'px';
    moon.style.left = -valueScroll * 0.5 + 'px';
    mountain.style.top = - valueScroll * 0.5 + 'px';
    // road.style.top = valueScroll * 0.15 + 'px';
    

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
// section four 
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

// TIMER TIMER TIMER
// TIMER TIMER TIMER
// TIMER TIMER TIMER


const deadline = '2021-04-26';

function getTime(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / 1000/60/60/24),
    hours = Math.floor(t / 1000 / 60 / 60 % 24),
    minutes = Math.floor(t / 1000 / 60 % 60),
    seconds =  Math.floor(t / 1000 % 60);

    return{
        total : t,
        days : days,
        hours : hours,
        minutes : minutes,
        seconds : seconds
    };

}

function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    }else{
        return num;
    }
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timerInterval = setInterval(upDateClock, 1000);

    upDateClock();

    function upDateClock(){
        const t = getTime(endtime);
        days.textContent = getZero(t.days);
        hours.textContent = getZero(t.hours);
        minutes.textContent = getZero(t.minutes);
        seconds.textContent = getZero(t.seconds);
        if(t.total <= 0){
            clearInterval (timerInterval);
        }
    }
}

setClock('.timer', deadline);


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

