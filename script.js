let container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add(`div${i}`);
  newDiv.style.cssText = "border: 1px solid gray; width: 150px; height: 150px;";
  newDiv.addEventListener("mouseover", () => {
    newDiv.style.backgroundColor = "gray";
  });
  container.appendChild(newDiv);
}

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let squaresPerSide = prompt("How many squares per side? (max 100)");
  if (squaresPerSide === null) return;
  if (
    !Number.isInteger(Number(squaresPerSide)) ||
    isNaN(Number(squaresPerSide)) ||
    squaresPerSide < 1 ||
    squaresPerSide > 100
  ) {
    alert("Invalid answer. Please choose an integer between 1 and 100");
  } else {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    for (let i = 0; i < squaresPerSide ** 2; i++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add(`div${i}`);
      newDiv.style.cssText = `border: 1px solid gray; width: ${
        600 / squaresPerSide
      }px; height: ${600 / squaresPerSide}px;`;
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "gray";
      });
      container.appendChild(newDiv);
    }
    let stringPerSide = "";
    for (let i = 0; i < squaresPerSide; i++) {
      stringPerSide += `${600 / squaresPerSide}px `;
    }
    stringPerSide = stringPerSide.trimEnd() + ";";
    container.style.cssText = `display: grid; grid-template-columns: ${stringPerSide}; grid-template-rows: ${stringPerSide}`;
  }
});
