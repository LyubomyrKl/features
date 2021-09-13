let menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach(item=>{

    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`
    })

    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.left = '0';
    cloneDiv.style.top = '0';
    item.appendChild(cloneDiv);
})

const  grid = document.querySelector('.grid'),
       gridItems = [...document.querySelectorAll('.grid-item')],
       gridRows =  [...document.querySelectorAll('.row')],
       images = [...document.querySelectorAll('.img')],
       headimg = document.querySelector('heading');

   
    images.forEach((img, idx) => {
        img.style.backgroundImage = `url(../img/${idx + 1}.jpeg)`
    });
    
    

    gridItems.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            let isActive = e.target.classList.contains('active')
            console.log(e.target)
            for(let i = 0; i < gridItems.length; i++){
                gridItems[i].classList.remove('active');
            }
           
            if(isActive){
                gridRows[0].style.height = '50%';
                gridRows[1].style.height = '50%';
                for(let i = 0; i < gridItems.length; i++){
                    gridItems[i].classList.remove('expanded');
                }
                return;
            }
    
            gridItems[idx].classList.add('active');
    
            if(window.innerWidth > 600){
    
                if(idx == 0 || idx == 3){
                    setActive([0, 3]);
                }
        
                if(idx == 1 || idx == 4){
                    setActive([1, 4]);
                }
        
                if(idx == 2 || idx == 5){
                    setActive([2, 5]);
                }
        
                if(idx <=2){
                    gridRows[0].style.height = '70%'
                    gridRows[1].style.height = '30%'
                }else{
                    gridRows[0].style.height = '30%'
                    gridRows[1].style.height = '70%'
                }
    
            }
    
          
        })
    })

    function setActive(idxArr){
        for(let i = 0; i < gridItems.length; i++){
            if(idxArr.includes(i)){
                gridItems[i].classList.add('expand');
            }else{
                gridItems[i].classList.remove('expand');
            }
        }
    };
    
    window.addEventListener('resize', () => {
        for(let i = 0; i < gridItems.length; i++){
            gridItems[i].classList.remove('active');
            gridItems[i].classList.remove('expand');
            gridRows[0].style.height = '50%'
            gridRows[1].style.height = '50%'
        }
    })
    
    setTimeout(() => {
        heading.classList.add('show');
    }, 500);
    
    setTimeout(() => {
        grid.style.opacity = 1
    }, 1000);