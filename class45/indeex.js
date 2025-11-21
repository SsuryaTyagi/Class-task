let downloadBtn = document.querySelector("#downloadBtn");
let progressFill = document.querySelector("#progressFill");
let progressPercent = document.querySelector("#progressPercent");

let counter = 0;

downloadBtn.addEventListener("click",()=>{
    downloadBtn.style.pointerEvents = "none"
    let num = 50+Math.random()*50
    console.log(num);
    
   let interval = setInterval(() => {
        counter++;
    progressFill.style.width = counter+"%";
    progressPercent.innerHTML = counter + "%"
    console.log("hello");
    if (counter === 100) {
        clearInterval(interval);
    }
    
   }, num);
    
})