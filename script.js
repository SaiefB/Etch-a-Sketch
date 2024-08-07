// Variables
const container = document.querySelector(".gridContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let numberBtn = document.querySelector(".numberBtn");

// Creates a default grid sized 16x16
function defaultGrid () {
    makeRows(16);
    makeColumns(16);
    addCellEventListeners();
};

function customGrid(value) {
    makeRows(value);
    makeColumns(value);
    addCellEventListeners();
}

// Creates Rows
function makeRows(rowNum) {
    container.innerHTML = "";

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

defaultGrid();

// Add event listeners to cells
function addCellEventListeners() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", () => {
            cells[i].style.backgroundColor = "white";
        });
    }
}

// numberBtn initialised

// initialise prompt, save value in prompt then remove prompt window
    // if number is between 1 -100 continue
    // then remove defaultGrid()
    // else number is not within specified range, error
// assign makeRows() and makeColumns() with prompt value
// this should create grid

// numberBtn functionality
    numberBtn.addEventListener("click", () => {
        let numberBtnValue = prompt("Set the grid. Enter a value between 1-100:")
        let gridSize = parseInt(numberBtnValue); // turns numberBtnValue into an Integer
        
        if (gridSize >= 1 && gridSize <= 100) {
            customGrid(gridSize);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    });

