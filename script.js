// Variables
const container = document.querySelector(".gridContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid () {
    makeRows(16);
    makeColumns(16);
    addCellEventListeners();
};

// Creates Rows
function makeRows(rowNum) {

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