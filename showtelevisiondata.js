let cart=document.getElementById("cart")
cart.addEventListener("click",()=>{
    alert("Login First")
})
let similar=[
    {
        image:"https://www.reliancedigital.in/medias/Mi-ELA4642IN-Televisions-492391655-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MzMwMnxpbWFnZS9qcGVnfGltYWdlcy9oOGEvaDIyLzk2MjUwNTA0MTUxMzQuanBnfDcwMmY3Mjc0ODVjOTRhMzUzZjFhMjBmODQxZDAzYzVmYTA0ODI3YTc4OTU4Mjc4MTQ4YzJkMTU4NTgxOTNkZjQ",
        title:"Motorola G51 5G 64 GB, 4 GB RAM, Indigo Blue, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/Mi-4X-Pro-Television-492166363-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTYzOXxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDdiLzk2MjAzMTkxMDkxNTAuanBnfGM2OGNhOWE3M2M0ZDlkNDQ2MjUzMDFmNTE0NzBiMmMzNjExZmRiNzAwNWVhYzhjMDQyYmQ2MmUyZDU2MjBhZTM",
        title:"realme C25Y 64 GB, 4 GB RAM, Glacier Blue, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/Mi-4A-Horizon-Edition-Television-492391656-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTQwOXxpbWFnZS9qcGVnfGltYWdlcy9oOTgvaDQ0Lzk2MTk5NjEyNDk4MjIuanBnfDUyYzc2Mjg1ZTkxNDJjMmQ2Zjc4ZDRmYjliZjJmN2U5ZmU1ZWRmMjM4NDNiYzY2NTE2Y2M1M2RmNzM4NzdlMjI",
        title:"Motorola Moto Edge 30 5G 128GB, 6GB RAM, Meteor Grey, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/Realme-Realme-55-Televisions-491973486-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NTM4OHxpbWFnZS9qcGVnfGltYWdlcy9oZjkvaDg3Lzk0NzU5NzI0OTc0MzguanBnfDZhODJkMjEzN2VlZTM4NjkxMjJhMWE5MTE2ZDcxN2NkYzhiYzVlZDJiMzYyNmRiNWE5NWE0NzU0ZDE3NTczYTc",
        title:"Vivo X80 5G 128 GB, 8 GB RAM, Cosmic Black, Mobile Phone",
        price:"12,999",
        actualprice:"17,999",
        save:"50%"
    },
    {
        image:"https://www.reliancedigital.in/medias/realme-RMV2005-Televisions-492338548-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NDkxOHxpbWFnZS9qcGVnfGltYWdlcy9oN2YvaDFiLzk1NzY5NDczMTg4MTQuanBnfGYzYjBhZTM2Mzg5ODMwOGRiYzBmOTM0NTg5YzM0ODc3NTI0MDc0NWIyMTgxNDQ4ODY2ZDRiM2RlMGRhMTFiNGY",
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