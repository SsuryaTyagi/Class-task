let h1 = document.querySelector("h1");
let text = h1.innerText;
const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
 
let iteration = 0

h1.addEventListener("mouseenter" , ()=>{

    setInterval(()=>{

    const str = text.split("").map((val,index)=>{
        if (index<iteration) {
            return val
        }
    return  characters.split("")[Math.floor(Math.random()*53)]
   }).join("")
       h1.innerText = str;
       iteration += .25
    },30)


})