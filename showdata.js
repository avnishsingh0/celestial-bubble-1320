let cart=document.getElementById("cart")
cart.addEventListener("click",()=>{
    alert("Login First")
})
let similar=[
    {
        image:"https://www.reliancedigital.in/medias/OnePlus-10-Pro-Smartphone-492849811-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2ODg3NnxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaDY4Lzk4ODIxMDU5MDUxODIuanBnfGRmNWU1MzljZDZjZmE1ZDNlNzJmNTFhOWEzNjg0MTM0OTQ2ODg4ZWFiZDE2NjYwOGI1YzRjZDExN2QzNDYwNGQ",
        title:"Motorola G51 5G 64 GB, 4 GB RAM, Indigo Blue, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/Oppo-K10-Smartphone-492849759-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTYxNHxpbWFnZS9qcGVnfGltYWdlcy9oMTQvaDNmLzk4NzAzMzM1NzUxOTguanBnfDdmNzBhMDNkMDJmZGE1MTBlYzc2MWJhYzQ1OWY0NGFjYzNmYjA5Y2IwNDVhZjQxNGY5ZmFkNmNiZTE4OTYxMDI",
        title:"realme C25Y 64 GB, 4 GB RAM, Glacier Blue, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/Realme-RMX3491-GSMHANDSETSANDROID-492575026-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjIyNXxpbWFnZS9qcGVnfGltYWdlcy9oZTUvaDhjLzk4MTU4MTkyMjMwNzAuanBnfDBjZjk5MDFkZTE4ZmY1NGVkNzA2Yjc3ZjdhNTI3ZTMwYmY3YmNkY2NjMGJiYTViMmEzNDg2ZDVmNTBmMDZmYjM",
        title:"Motorola Moto Edge 30 5G 128GB, 6GB RAM, Meteor Grey, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/REDMI-NOTE-11-Mobile-Phone-492849123-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjgzMHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDNmLzk4MjAyOTczMzA3MTguanBnfDBmNDZmOWMzYTkwNTdlOGIyNWQyMzRhOWFkODRiZTg4MGFlZGUxYWQ4MzEyYmNiZTY2MTVjYTcxOTAzOTM2Yjk",
        title:"Vivo X80 5G 128 GB, 8 GB RAM, Cosmic Black, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/Apple-Iphone12-Mobilephones-491901533-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NzE5fGltYWdlL2pwZWd8aW1hZ2VzL2g3Ny9oNzEvOTg2MzgzNTU4MjQ5NC5qcGd8NDEzYzUzZjg1YmE5ZmVjNDYyNjMxNmY4ODRlNjIyOGM2MDQ1NzRiNGFkYmZjMTlmOTUxMjIzY2MyMWFlMmJlMA",
        title:"Motorola G51 5G 64 GB, 4 GB RAM, Indigo Blue, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
]

let similar_div=document.getElementById("similar")
const batteryData=(similar)=>{
    similar.forEach(function(ele){
        let div=document.createElement("div")
        div.setAttribute("class","phones_div")
        let div2=document.createElement("div")
        div2.setAttribute("class","phones_img")
    let image=document.createElement("img")
    image.src=ele.image
    image.setAttribute("class","image")
    let title=document.createElement("h3")
    title.innerText=ele.title
    title.setAttribute("class","phone_title")
    let price=document.createElement("p")
    price.innerText=`Deal Price-${ele.price}`
    price.setAttribute("class","deal_price")
    let actualprice=document.createElement("p")
    actualprice.innerText=`M.R.P:${ele.actualprice}`
    actualprice.setAttribute("class","actualprice")
    let save=document.createElement("p")
    save.innerText=`You Save:${ele.save}`
    save.setAttribute("class","yousave")
    let offer=document.createElement("button")
    offer.innerText="Offer Avalaible"
    offer.setAttribute("class","offer")
    div2.append(image)
    div.append(div2,title,price,actualprice,save,offer)
    similar_div.append(div)
    })
    
}
batteryData(similar)