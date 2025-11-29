let main = document.querySelector("#main");

main.addEventListener("mousemove", (e) => {
  console.log("X:", e.clientX, "Y:", e.clientY);

  main.style.background = `radial-gradient(200px at ${e.clientX}px ${e.clientY}px, transparent, black),white`;
});
