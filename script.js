let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let container = document.getElementById("container");
let shape = document.getElementById("shape");
// Add event listener for the first button
button1.addEventListener("click", () => {
  let str = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let ramdomNum = Math.floor(Math.random() * str.length);
    color += str[ramdomNum];
  }
  container.style.backgroundColor = color;
});

let triangle = document.createElement("div");
triangle.style.height ="100px"
triangle.style.borderLeft="50px solid transparent";
triangle.style.borderRight="50px solid transparent";
triangle.style.borderBottom="100px solid black";
triangle.style.position ="absolute";
triangle.style.top ="17px";
triangle.style.left ="583px";

let circle = document.createElement("div");
circle.style.height="100px";
circle.style.width="100px";
circle.style.borderRadius ="50%";
circle.style.backgroundColor ="black";
circle.style.position ="absolute";
circle.style.top ="25px";
circle.style.right ="583px";

let rectangle = document.createElement("div");
 rectangle.style.height ="70px";
 rectangle.style.width ="100px";
 rectangle.style.backgroundColor = "black";
 rectangle.style.position ="absolute";
 rectangle.style.top ="40px";
 rectangle.style.right ="583px";

let diamond = document.createElement("div");
 diamond.style.height = "100px";
diamond.style.width = "100px";
diamond.style.backgroundColor ="black";
diamond.style.position ="absolute";
diamond.style.top ="25px";
diamond.style.right ="583px";
diamond.style.rotate ="45deg";
const shapes = [diamond, circle, triangle, rectangle];

button2.addEventListener('click', ()=>{
    let randomShape = Math.floor(Math.random()*shapes.length);
    container.appendChild(shapes[randomShape]);
    
})



