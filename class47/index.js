const user = [
  {
    "name": "Sophie Bennett",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqq4mujAFh0NXFUyJhq5XAxseDAG7W9KmknA&s",
    "verified": true,
    "description": "Product Designer who focuses on simplicity & usability.",
    "followers": 312,
    "posts": 48
  },
  {
    "name": "Alex Carter",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbC75e-Z2nIKvkz62caeIgkq3diFr9870Tsg&s",
    "verified": true,
    "description": "Frontend Developer passionate about modern UI & animations.",
    "followers": 527,
    "posts": 73
  },
  {
    "name": "Mia Thompson",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl0Acrw9li4061mCSg7mciJQun5B1QQTXbQ&s",
    "verified": false,
    "description": "UX Researcher turning user problems into clean experiences.",
    "followers": 198,
    "posts": 34
  },
  {
    "name": "Daniel Kim",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboWUluTFihcp2T5Iqi7zF0iEmO1Twgj056g&s",
    "verified": true,
    "description": "Full-stack engineer who builds scalable & fast applications.",
    "followers": 640,
    "posts": 89
  }
]

let card = 0;

 user.forEach((val)=>{
   card = card + `<div class="card">
  <img src=${val.image} alt="Profile" class="profile-img" />

  <h2 class="name">
    ${val.name} <span class="verified">✔</span>
  </h2>

  <p class="desc">
    ${val.description}
  </p>

  <div class="stats">
    <span>👤${val.followers}</span>
    <span>📄  ${val.posts}</span>
  </div>

  <button class="follow-btn">Follow +</button>
</div>
`
})



let main = document.querySelector("#main");

main.innerHTML = card;

console.log(main);
