const productContainers = [...document.querySelectorAll('.product-container1')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
const preBtn = [...document.querySelectorAll('.pre-btn1')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let slideIndex1=1;
showSlides(slideIndex1);

function plusSlides(n){
    showSlides(slideIndex1 += n)
}

function currentSlides(n){
    showSlides(slideIndex1 = n)
}
function showSlides(n){
    let i;
    let slides=document.getElementsByClassName("myslides")
    let dots=document.getElementsByClassName("dot")
    if(n>slides.length)
       { 
        slideIndex1=1 
    }
       if(n<1){
        slideIndex1=slides.length
       }
       for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
       }
    
       for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","")
        }
        slides[slideIndex1-1].style.display="block"
       dots[slideIndex1-1].className+= "active"
        }
        //autoslide
        showSlides()


const productContainer = [...document.querySelectorAll('.product-container')];
const nxtBtn_first = [...document.querySelectorAll('.nxt-btn')];
const preBtn_first = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn_first[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn_first[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let slideIndex=1;
showSlides1(slideIndex);

function plusSlides1(n){
    showSlides1(slideIndex += n)
}

function currentSlides1(n){
    showSlides1(slideIndex = n)
}
function showSlides1(n){
    let i;
    let slides=document.getElementsByClassName("myslides")
    let dots=document.getElementsByClassName("dot")
    if(n>slides.length)
       { 
        slideIndex=1 
    }
       if(n<1){
        slideIndex=slides.length
       }
       for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
       }
    
       for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","")
        }
        slides[slideIndex-1].style.display="block"
       dots[slideIndex-1].className+= "active"
        }
        //autoslide
        showSlides1()

   