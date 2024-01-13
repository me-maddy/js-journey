// const searchInp = document.querySelector(".inp");
// let timer;

function getData() {
  console.log("Data is fetched successfully" + new Date().getMilliseconds());
}

// function handleKeyPress() {
//   clearTimeout(timer);
//   timer = setTimeout(getData, 200);
// }

// searchInp.addEventListener("keypress", handleKeyPress);

// Another way :-

// function debounce(getData, timeDiff) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(getData, timeDiff);
//   };
// }

// const handleKeyPress = debounce(getData, 300);
// searchInp.addEventListener("keypress", handleKeyPress);

// Another example :-

function debounce(func, limit) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, limit);
  };
}

const handleSize = debounce(getData, 200);
window.onresize = handleSize;
