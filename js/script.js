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
        rotateY(${(e.offsetX - halfWidth) / 10 }deg)`;
    });

    element.addEventListener(`mouseout`,()=>{
        element.style.transform = `rotateX(0deg) 
        rotateY(0deg)`;
    });
});


// last_one last_one last_one
// last_one last_one last_one
// last_one last_one last_one


const container = document.querySelector('.container');

container.addEventListener('click', ()=>{
    container.classList.toggle('container_origin');
});