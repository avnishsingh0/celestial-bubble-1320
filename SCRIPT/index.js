


import { navbar } from "../components/navbar.js";
let nav_div= document.getElementById('nav_container')
nav_div.innerHTML= navbar();

document.querySelector("#avnav_img").addEventListener("click", function () {

    document.location.href = "index.html";
  });
