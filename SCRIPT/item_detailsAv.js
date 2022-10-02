import { navbar } from "../components/navbar.js";
let nav_div= document.getElementById('nav_container')
nav_div.innerHTML= navbar();


import {footer} from "../components/footer.js";
let footer_div = document.getElementById('footer_container');
footer_div.innerHTML = footer()


function  images(){
    let arr=[
        `Screenshot (360).png`,
        `Screenshot (361).png`,
        


    ]
    let i=0;
    let cont=document.getElementById("image")
    // cont.innerHTML=null
    let img=document.createElement("img")
    let button=document.getElementById("right")
    img.src=arr[0]
         cont.append(img)
         i++;

    button.addEventListener("click",function(){
        if(i==2){
            i=0
         }
         img.src=arr[i]
         cont.append(img)
         i++;

        
    })
    let button1=document.getElementById("left")
    button1.addEventListener("click",function(){
        if(i==0){
            i=arr.length
         }
         img.src=arr[i]
         cont.append(img)
         i--;

        
    })

    // setInterval(function(){
    //     if(i==arr.length){
    //         i=0
    //     }
    //     img.src=arr[i]
    //     cont.append(img)
    //     i++
    //     },2000)
}
images()