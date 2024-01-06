const btn = document.querySelector(".btn");
const container = document.querySelector(".card-container");
const xhr = new XMLHttpRequest();
let userImgUrl = "";
let userName = "";

// console.log(xhr.readyState);
// console.log(xhr.status);
// console.log(xhr.statusText);

btn.addEventListener("click", function () {
  if (userImgUrl) {
    container.innerHTML = `<div class="card-box">
                <img src=${userImgUrl} alt="avatar" class="user-img">
                <p class="user-name">${userName}</p>
            </div>`;
  }
});

const requestUrl = "https://api.github.com/users/hiteshchoudhary";
// console.log(xhr.readyState);
xhr.open("Get", requestUrl);

xhr.onreadystatechange = function () {
  //   console.log(xhr.readyState); // if readyState == 4, request is completed.
  //   console.log(xhr.responseText);
  //   console.log(xhr.responseText);
  if (xhr.readyState === 4) {
    const response = JSON.parse(this.responseText);
    userImgUrl = response?.avatar_url;
    userName = response?.name;
    // console.log(response);
  }
};

// console.log(xhr.readyState);
xhr.send();
// console.log(xhr.readyState);
