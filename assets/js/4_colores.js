const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

pintar(box1, "blue");
pintar(box2, "red");
pintar(box3, "green");
pintar(box4, "yellow");

box1.addEventListener("click", () => {
  pintar(box1, "black");
});

box2.addEventListener("click", () => {
  pintar(box2, "black");
});

box3.addEventListener("click", () => {
  pintar(box3, "black");
});

box4.addEventListener("click", () => {
  pintar(box4, "black");
});
