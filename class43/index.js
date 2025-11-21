let box1 = document.querySelector("#box1");
let btn1 = document.querySelector("#btn1");


console.log(box1);


btn1.addEventListener("click",()=>{

    let num = Math.floor(Math.random()*256);

    box1.style.backgroundColor = `rgb(${num},${num},${num})`  
})

const cricketTeams = [
  {
    team: "IND",
    fullForm: "India National Cricket Team",
    color: "Blue",
    secondaryColor: "Orange"
  },
  {
    team: "AUS",
    fullForm: "Australia National Cricket Team",
    color: "Yellow",
    secondaryColor: "Green"
  },
  {
    team: "ENG",
    fullForm: "England Cricket Team",
    color: "Dark Blue",
    secondaryColor: "Red"
  },
  {
    team: "PAK",
    fullForm: "Pakistan National Cricket Team",
    color: "Green",
    secondaryColor: "Gold"
  },
  {
    team: "SA",
    fullForm: "South Africa National Cricket Team",
    color: "Green",
    secondaryColor: "Yellow"
  },
  {
    team: "NZ",
    fullForm: "New Zealand Cricket Team",
    color: "Black",
    secondaryColor: "Silver"
  },
  {
    team: "SL",
    fullForm: "Sri Lanka National Cricket Team",
    color: "Blue",
    secondaryColor: "Yellow"
  },
  {
    team: "BAN",
    fullForm: "Bangladesh National Cricket Team",
    color: "Green",
    secondaryColor: "Red"
  },
  {
    team: "WI",
    fullForm: "West Indies Cricket Team",
    color: "Maroon",
    secondaryColor: "Yellow"
  },
  {
    team: "AFG",
    fullForm: "Afghanistan National Cricket Team",
    color: "Blue",
    secondaryColor: "Red"
  }
];


let box2 = document.querySelector("#box2");
let h1 = document.querySelector("h1");
let btn2 = document.querySelector("#btn2");



btn2.addEventListener("click",()=>{

    let a = Math.floor(Math.random()*cricketTeams.length);

    // console.log(cricketTeams[a].team);
    h1.innerHTML = cricketTeams[a].team
    box2.style.backgroundColor = cricketTeams[a].color
})
