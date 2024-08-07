// Variables
const container = document.querySelector(".gridContainer");
let cells = document.getElementsByClassName("cell");
const numberBtn = document.querySelector(".numberBtn");
const clearBtn = document.querySelector(".clearBtn");

// Creates a default grid sized 16x16
function defaultGrid() {
    createGrid(16);
    addCellEventListeners();
}

function customGrid(value) {
    createGrid(value);
    addCellEventListeners();
}

// Create Grid
function createGrid(size) {
    container.innerHTML = ""; // Clear existing cells

    const cellSize = container.clientWidth / size; // Calculate the size of each cell

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);
    }
}

// Add event listeners to cells
function addCellEventListeners() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", () => {
            cells[i].style.backgroundColor = "white";
        });
    }
}

// Initialize the grid
defaultGrid();

// numberBtn functionality
numberBtn.addEventListener("click", () => {
    let numberBtnValue = prompt("Set the grid. Enter a value between 1-100:");
    let gridSize = parseInt(numberBtnValue); // turns numberBtnValue into an Integer
    
    if (gridSize >= 1 && gridSize <= 100) {
        customGrid(gridSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// clear button
clearBtn.addEventListener("click", () => {
    for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "rgb(56, 56, 56)"    
    }
    
})