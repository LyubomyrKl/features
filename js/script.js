const menu = document.getElementById('menu'),
      content = document.getElementById('content'),
      sections = content.querySelectorAll('section'),
      overlay = document.querySelector('.overlay'),
      progressBar = document.querySelector('.progress'),
      body = document.querySelector('body');
      
window.addEventListener('scroll', (e)=>{
   let windowScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
   let windowHeight = document.documentElement.scrollWidth - document.documentElement.clientWidth;
   let per = windowScroll / windowHeight * 100;
   progressBar.style.width = `${per}%`;

});


const checkbox = document.querySelector('#checkbox');



checkbox.addEventListener('change', ()=>{
   if(checkbox.checked === true){
    localStorage.setItem('bg', 'change');
    body.classList.add('active');
   }else{
    localStorage.removeItem('bg', 'change');
    body.classList.remove('active');
   }
});


if(localStorage.getItem('bg')){
    checkbox.checked = true;
    body.classList.add('active');
}else{
    body.classList.remove('active');
}


//SECTIONS
//SECTIONS
//SECTIONS


let offset = 0,
slideIndex = 0;

    class Section{
        constructor(name, parentSelector, date){
            this.name = name;
            this.parent =  document.querySelector(parentSelector);
            this.data = date;
        }
        render(){
            const element  = document.createElement('a');
            element.classList.add('nav-link');
            element.textContent = this.name;
            element.setAttribute ('data-slide-to', this.data);
            this.parent.append(element);
        }
    }

    for (let index = 1; index <= sections.length; index++) {
        new Section(index, '.content-nav', index).render();
        
    }

    const contentNav = document.querySelector('.content-nav'),
          contentsNumb = document.querySelectorAll('.nav-link'),
          dataSlideTo = [];
        
    contentsNumb[0].classList.add('active');

    contentNav.addEventListener('click', event=>{
        if(event.target && event.target.classList.contains('nav-link')){
            contentsNumb.forEach((element) =>{
                element.classList.remove('active');
                event.target.classList.add('active');
                slideIndex = event.target.getAttribute('data-slide-to')-1;
            });   
        }  
    });

    contentsNumb.forEach(element=>{
        element.addEventListener('click', event=>{
             const dataSlideTo = element.getAttribute('data-slide-to');
             slideIndex = dataSlideTo;
             offset = +width.slice(0, width.length-2) * (slideIndex - 1);
             contentInner.style.transform = `translateX(-${offset}px)`;

        }); 
    });
   

    

//ARROW 
//ARROW
//ARROW 

const contentInner = document.querySelector('.content__inner'),
      width = window.getComputedStyle(contentInner).width,
      left = document.querySelector('#arrow_left'),
      right = document.querySelector('#arrow_rigth');

      contentInner.style.width = 100 * sections.length + '%';
      contentInner.style.display = 'flex';
      contentInner.style.transition = '0.5s all';

      content.style.overflow = 'hidden';
      sections.forEach(section =>{
          section.style.width = width;  
      });



document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowRight" && !menu.classList.contains('menu__active')) {
        next();
        
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowLeft" && !menu.classList.contains('menu__active')) { 
        prev();
    }
});

left.addEventListener('click', ()=>{
    if (!menu.classList.contains('menu__active')) { 
        prev();
    }
});

right.addEventListener('click', ()=>{
    if (!menu.classList.contains('menu__active')) { 
        next();
    }
});

function next(){
    if(offset !== +width.slice(0, width.length-2) * (sections.length - 1)){
        offset+= +width.slice(0, width.length-2);
    }
    contentInner.style.transform = `translateX(-${offset}px)`;
    
   if(slideIndex<5){
    contentsNumb.forEach(e=>{
        e.classList.remove('active');
    });
    slideIndex++;
    contentsNumb[slideIndex].classList.add('active');
   }
}

function prev(){
    if(offset !== 0){
        offset-= +width.slice(0, width.length-2);
    }
    contentInner.style.transform = `translateX(-${offset}px)`;
    
   if(slideIndex>0){
       contentsNumb.forEach(e=>{
            e.classList.remove('active');
       });
       slideIndex--;
       contentsNumb[slideIndex].classList.add('active');
   }
}




let x1, 
    y1;
contentInner.addEventListener('touchstart', (e)=>{
    const touch = e.touches[0];
    x1 = touch.clientX;
    y1 = touch.clientY;
    
}, false);

contentInner.addEventListener('touchmove', (e)=>{
    
        if(!x1 || !y1){
            return false;
        }
        let x2 = e.touches[0].clientX,
            y2 = e.touches[0].clientY,
            xDiff = x2-x1,
            yDiff = y2-y1;

            if(Math.abs(xDiff)>Math.abs(yDiff)){
                (xDiff>0) ? prev() : next();
            }
            x1 = null;
            y1 = null;
        
});




//BURGER BURGER BURGER
//BURGER BURGER BURGER
//BURGER BURGER BURGER

function burger(){
    menu.classList.toggle('menu__active');  
    content.classList.toggle('content__active');
    body.classList.toggle('lock');
}

overlay.addEventListener('click', ()=>{
    menu.classList.remove('menu__active');  
    content.classList.remove('content__active');
    body.classList.remove('lock');

});

//section one
//section one
//section one


const bgPar = document.querySelector('#bg-par'),
    moon = document.querySelector('#moon'),
    mountain = document.querySelector('#mountain'),
    road = document.querySelector('#road'),
    moonText = document.querySelector('#moonText');



document.addEventListener('mousemove', (event)=>{
    let valueScrollY = event.clientY,
    valueScrollX = event.clientX-960;

    bgPar.style.top = valueScrollY / 100 + 'px';
    moon.style.top = valueScrollY * 30 / 1000+ 'px';
    mountain.style.top =  -valueScrollY * 200 / 1000 + 'px';
    road.style.top = valueScrollY * 100 / 1000 + 'px';  

    bgPar.style.left = valueScrollX / 100 + 'px';
    moon.style.left = valueScrollX * 100/ 1000+ 'px';
  
    
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


const deadline = '2021-12-05';

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

const container = document.querySelector('.container_origin'),
        lastSection = document.querySelector('.potrfolio'),
        lastSectionBox = lastSection.querySelector('.box');

lastSectionBox.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('box')){
        container.classList.toggle('container');
    }
});


// go button
// go button
// go button

const portfolioBtn = document.querySelector('.portfolio-btn'),
      contentWidht = document.clientWidth;
     

