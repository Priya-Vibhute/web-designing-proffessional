fetch("https://fakestoreapi.com/products/1")
.then(response=>response.json())
.then(data=>{
    console.log(data)
    console.log(data.image)
    const img=document.createElement("img")
    img.setAttribute("src",data.image)  
    document.body.appendChild(img)
})