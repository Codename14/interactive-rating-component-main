let numbers = document.querySelectorAll(".count");
document.getElementById("rateStart");

console.log(rateStart);

let selNum;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numbers.forEach((number) => {
      number.classList.remove("selected-count");
    });
    number.classList.add("selected-count");
    document.querySelector(".selNumber").innerHTML = number.innerHTML;
    selNum = number.innerHTML;
  });
});

let button = document.querySelector(".btn");

button.addEventListener("click", function Clicked() {
  if (selNum != null) {
    document.getElementById("rateStart").style.display = "none";
    document.getElementById("rateEnd").style.display = "block";
  } else {
    alert("Please select one!");
  }
});
