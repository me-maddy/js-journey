const info = document.querySelector(".info");

window.addEventListener("keypress", function (e) {
  info.innerHTML = `<div>
   <table>
   <tr>
   <th>Key</th><th>Keycode</th><th>Code</th>
   </tr>
   <tr>
   <td>${e.key === " " ? "Space" : e.key}</td><td>${e.keyCode}</td><td>${
    e.code
  }</td>
   </tr>
   </table>
   </div>`;
});
