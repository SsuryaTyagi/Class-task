const image = document.querySelector(".post-img");
const heart = document.querySelector(".heart-2")


image.addEventListener("dblclick",()=>{
        console.log("hello");
        
    heart.style.display = "block ";

    setInterval(()=>{
       heart.style.display = "none"; 
    },600)
    
        
})

 