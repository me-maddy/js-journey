const images = document.querySelector("#images");
const moveCircle = document.querySelector(".move-circle");

// images.addEventListener("click", function (e) {
//   console.log(e);
//   console.log(e.target.tagName);
//   console.log(e.currentTarget.tagName);
// });

// images.addEventListener("click", function (e) {
//   const element = e.target;
//   if (element.tagName === "IMG") {
//     // console.log(element.attributes);
//     // element.removeAttribute("src");
//     // element.parentNode.parentNode.removeChild(element.parentNode);
//     // element.parentNode.remove();
//   }
//   //   e.target.parentNode.remove();
// });

// images.addEventListener("mousemove", function (e) {
//   //   console.log("Mouse is moving.");
//   const div = document.createElement("div");
//   div.style.width = "10px";
//   div.style.height = "10px";
//   div.style.backgroundColor = "red";
//   div.style.position = "absolute";
//   div.style.top = e.clientY + "px";
//   div.style.left = e.clientX + "px";
//   images.appendChild(div);
//   //   console.log(e.clientX);
//   //   console.log(e.clientY);
// });

// images.addEventListener("mousemove", function (e) {
//   moveCircle.style.width = "16px";
//   moveCircle.style.top = e.offsetY + "px";
//   moveCircle.style.left = e.offsetX + "px";
//   //   console.log(e.clientX);
//   //   console.log(e.scrollX);
//   //   console.log(e.pageX);
//   //   console.log(e);
// });

// document.body.addEventListener("mousemove", function (e) {
//   // moveCircle.style.top = e.clientY + "px";
//   // moveCircle.style.left = e.clientX + "px";
//   moveCircle.style.top = e.pageY + "px";
//   moveCircle.style.left = e.pageX + "px";
//   moveCircle.style.width = "16px";
// });

images.addEventListener("mousemove", function (e) {
  const element = e.target;
  if (element.tagName === "IMG") {
    moveCircle.style.top = e.pageY + "px";
    moveCircle.style.left = e.pageX + "px";
    moveCircle.classList.remove("dis-none");
  } else {
    moveCircle.classList.add("dis-none");
  }
});
