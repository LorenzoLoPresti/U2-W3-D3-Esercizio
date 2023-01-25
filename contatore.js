let pReference = document.querySelector("p");
let count = Number(sessionStorage.getItem("getTime")) || 0;

const counterRun = function () {
  pReference.textContent = count;
  count++;
  sessionStorage.setItem("getTime", count);
};
setInterval(counterRun, 1000);
