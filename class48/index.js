    const keys = ["A","S", "D", "F", "J", "K", "L", "W", "E","R","T", "U","I","U","O"]

let sound = [
"96.mp3",
"24.mp3",
"64.mp3",
"65.mp3",
"69.mp3",
"72.mp3",
"77.mp3",
"79.mp3",
"84.mp3",
"29.mp3",
"36.mp3",
"41.mp3",
"48.mp3",
"53.mp3",
"60.mp3"
]

        let piano_div = ""

    keys.forEach((val)=>{
            piano_div += `<div class="piano">${val}</div>`        
    });

console.log(sound);

    let main = document.querySelector("#main");
    main.innerHTML = piano_div;
    let piano = document.querySelectorAll(".piano");    
    piano.forEach((val,key)=>{
     
      let help = val.addEventListener("click", ()=>{
                 new Audio(sound[key]).play()        
        })
    })
    document.addEventListener("keydown", (e)=>{
       let  preeskeys = e.key.toUpperCase();
       let index = keys.indexOf(preeskeys);

   if(index !== -1){
      new Audio(sound[index]).play();
      piano[index].style.backgroundColor = "rgb(65, 64, 64)";

      setTimeout(()=>{
         piano[index].style.backgroundColor = "white";
      },100);
   }
    })