const container = document.querySelector("#container");
const heading = document.querySelector("h1");

const button = document.createElement("button");
button.textContent = "New Grid";
button.style.marginBottom = "24px";
button.addEventListener("click", () => {
    let gridSize = 0;
    do {
        let userInput = prompt("Enter grid size: ");
        gridSize = parseInt(userInput);
    } while (gridSize < 1 || gridSize > 100);
    createGrid(gridSize);
});

heading.after(button);

function highlightCell(id) {
    const cell = document.querySelector(`#${id}`);
    console.log(`cell to highligh: ${cell}`);
    cell.style.backgroundColor = "red";
}

function createGrid(gridSize) {
    container.setAttribute(
        "style",
        "display: flex; flex-wrap: wrap; border: 1px solid #ccc; width: auto; height: 400px"
    );
    container.innerHTML = "";
    const numberOfSquares = gridSize * gridSize;
    const cellSize = 100 / gridSize;
    for (let i = 0; i < numberOfSquares; i++) {
        const cell = document.createElement("div");
        cell.id = `cell-${i}`;
        cell.className = "grid-cell";
        cell.style.width = cellSize + "%";
        cell.style.height = cellSize + "%";
        cell.style.border = "0px solid black";
        cell.addEventListener("mouseover", (e) => {
            highlightCell(e.target.id);
        });
        container.appendChild(cell);
    }
}

createGrid(16);
