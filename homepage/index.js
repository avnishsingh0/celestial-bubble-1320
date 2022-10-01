




function slideShow(){
    const arr=[
        "https://www.reliancedigital.in/medias/Motorola-G71-5G-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NTEzM3xpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDAwLzk4OTYyOTA4MTE5MzQuanBnfDJiYjFlMjA2YTAxNjA3NzA5YjgzODJlYTJhYzA3MzJkYmIzZDI4MzA0MDdlZjNmZGVkZmFiMjUxNDA0ZmI0ZmU",
         "https://www.reliancedigital.in/medias/alexa-and-fire-TV-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjU5MnxpbWFnZS9qcGVnfGltYWdlcy9oNTkvaDhmLzk4OTg5NzUwMDI2NTQuanBnfGU2ZjU0OWU4Njk3MjIxOGU2NDFlNDYwYTk2N2NmZDM5M2Y2MDUzZTQ3Mjk1YjlhYjZhZTk2ZjY3MjgxMTdiZTc",
         "https://www.reliancedigital.in/medias/pTron-Pulsefit-P261-Carousel-Banner-23-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjY3MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBjL2gyYy85ODk3MjQ5ODY1NzU4LmpwZ3xiNjNmNjJhNDE1Y2JhZmZhMzQyN2NiZDI2YmU0NjljMDEzNzcxM2ZiNTM3Yjg1NzVlMDA0NDYyMDBhMzExOTU1"]
    let i=0;
         let div=document.getElementById("slider")
         
    let img=document.createElement("img")
    img.src=arr[0]

    div.append(img)
    i=i+1;

    setInterval(function(){
        if(i==3){
            i=0;
        }
        img.src=arr[i];
        i=i+1;
        div.append(img)
    },3000)

}
slideShow()
function secondslideShow(){
    const arr=[
        "https://www.reliancedigital.in/medias/Sony-BT-HP-NPI-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5ODc4MnxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDZjLzk4OTYyOTU2Mjg4MzAuanBnfDU5ZTkwMDQ1YTg0NjBiOGQ1NTMxYmJjNzYwOWMwZWZhZWI1MGU3MTlhNjJiOWI5Y2QzMzUxOTdlYjJmZDc0YTM",
         "https://www.reliancedigital.in/medias/Sony-BT-HP-NPI-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5ODc4MnxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDZjLzk4OTYyOTU2Mjg4MzAuanBnfDU5ZTkwMDQ1YTg0NjBiOGQ1NTMxYmJjNzYwOWMwZWZhZWI1MGU3MTlhNjJiOWI5Y2QzMzUxOTdlYjJmZDc0YTM",
         "https://www.reliancedigital.in/medias/Vivo-Y22-NPI-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDc3Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDA1L2gxMy85ODk1NDAwNjM2NDQ2LmpwZ3w0ZTE0OTVlMjBiNDFkYjI0ZDRjZDlhNjk3MDQzMmRlMDhkMjdkOTUwN2FlNjY4NGJjYzZkNGFjMzhlNDg1ZGVk"]
    let i=0;
         let div=document.getElementById("slider1")
         console.log(arr)
    let img=document.createElement("img")
    img.src=arr[0]

    div.append(img)
    i=i+1;

    setInterval(function(){
        if(i==3){
            i=0;
        }
        img.src=arr[i];
        i=i+1;
        div.append(img)
    },3000)

}
secondslideShow()


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

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

let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlides(n){
    showSlides(slideIndex = n)
}
