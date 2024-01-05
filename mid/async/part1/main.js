const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let intervalId;

const generateRandomColor = () => {
  const hexVal = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexVal[Math.floor(Math.random() * hexVal.length)];
  }
  return color;
};

const startChangeColor = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = generateRandomColor();
    }, 1000);
  }
};

const stopChangeColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

startBtn.addEventListener("click", startChangeColor);
stopBtn.addEventListener("click", stopChangeColor);
