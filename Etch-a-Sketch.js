function getSize() {
    const gridSize = prompt("Hey, how big do you want this thing?");
    if (gridSize > 99) {
        alert("That's too big");
        getSize();
    }
    return gridSize;
}
//Add elements to HTML via selector
const body = document.querySelector("body");
//Get size from user
const gridSize = Math.pow(getSize(), 2);
//Defining cell dimensions
const generatedGridContainer = document.createElement("div");
const cellsPerRow = Math.sqrt(gridSize);
generatedGridContainer.setAttribute("id", "container")
const gridCellDimension = (100 / cellsPerRow) + "%";
//Create and Populate Grid
for (i = 0; i < gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.id = 'div #' + i;
    gridCell.className = "liveCells";
    gridCell.style.backgroundColor = "white";
    gridCell.style.minWidth = gridCellDimension;
    gridCell.style.minHeight = gridCellDimension;
    generatedGridContainer.append(gridCell);
}
//Add grid to doc
body.append(generatedGridContainer);
//Bubbling to have live cells send mouse event to body, change class to deadcell
generatedGridContainer.addEventListener("mouseover", (event) => {
    if (event.target.className === "liveCells") {
        event.stopPropagation();
        event.target.style.backgroundColor = 'black';
        event.target.className = "deadCells";
        event.target.style.minWidth = gridCellDimension;
        event.target.style.minHeight = gridCellDimension;
        
    }

});




if (typeof module === 'object') {
    module.exports = getSize();
}


