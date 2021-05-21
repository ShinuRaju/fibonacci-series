let input = document.querySelector("input");
let btn = document.querySelector("button");
let grid = document.querySelector(".grid");

let clickFunction = (n) => {
  try {
    if (n === 0) {
      alert("enter a positive number");
      return 1;
    } else {
      let a = 0,
        b = 1,
        c,
        arr = [];

      for (let i = 0; i < n; i++) {
        arr.push(a);
        c = a + b;
        a = b;
        b = c;
      }

      return arr;
    }
  } catch (error) {
    console.log(error);
  }
};

let displayFunction = () => {
  grid.innerHTML = "";
  clickFunction(Number.parseInt(input.value)).forEach((eachEle) => {
    let div = document.createElement("div");

    div.textContent = eachEle;
    div.classList.add("innerBoxes");

    grid.appendChild(div);
  });
};

displayFunction();

btn.addEventListener("click", () => {
  displayFunction();
});
