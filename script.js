const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
var clrBtn = document.querySelector(".clear");
const colorArray = [
  "#F806CC",
  "#3BACB6",
  "#FFD24C",
  "#6A67CE",
  "#F32424",
  "#2155CD",
  "#000",
];
const colorContainer = document.querySelector(".color_container");

var currentColor = colorArray[0];

clrBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorArray.forEach((color) => {
  const colorPlate = document.createElement("div");
  colorPlate.className = "color";
  colorPlate.style.backgroundColor = color;
  colorPlate.onclick = () => {
    currentColor = color;
  };
  colorContainer.insertAdjacentElement("beforeend", colorPlate);
});

const draw = (event) => {
  const rect = canvas.getBoundingClientRect();
  ctx.lineWidth = 3;
  ctx.lineCap = "round"; //rounded paint brush
  ctx.strokeStyle = currentColor;
  ctx.lineTo(event.pageX - rect.left, event.pageY - rect.top);
  ctx.stroke();
  ctx.moveTo(event.pageX - rect.left, event.pageY - rect.top); //This will move the position of pen
};

var isMouseDown = false;
canvas.onmousedown = (event) => {
  isMouseDown = true;
  console.log(event);
  draw(event);
};
canvas.onmousemove = (event) => {
  if (isMouseDown) {
    draw(event);
  }
};

canvas.onmouseup = (event) => {
  ctx.beginPath();
  isMouseDown = false;
};
