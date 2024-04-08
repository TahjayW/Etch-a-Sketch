//Global Variables
let gridSize, cellsPerRow, gridCellDimension, generatedGridContainer;

function getSize() {
     gridSize = prompt("Hey, how big do you want this thing?");
    if (gridSize > 99) {
        alert("That's too big");
        getSize();
    }
    return gridSize;
}




//Add elements to HTML via selector
const body = document.querySelector("body");

makeGrid();



function makeGrid() {
    //Get size from user
    gridSize = Math.pow(getSize(), 2);
    //Defining cell dimensions
    generatedGridContainer = document.createElement("div");
    cellsPerRow = Math.sqrt(gridSize);
    generatedGridContainer.setAttribute("id", "container");
    gridCellDimension = (100 / cellsPerRow) + "%";
    //Create and Populate Grid
    for (i = 0; i < gridSize; i++) {
        let gridCell = document.createElement("div");

        gridCell.id = 'div #' + i;
        gridCell.className = "liveCells";
        gridCell.style.backgroundColor = "white";
        gridCell.style.minWidth = gridCellDimension;
        gridCell.style.minHeight = gridCellDimension;
        generatedGridContainer.append(gridCell);
        //Add grid to doc


    }

    body.append(generatedGridContainer);
}



//BColor change logic

generatedGridContainer.addEventListener("mouseover", (event) => {
    if (event.target.className === "liveCells") {
        event.stopPropagation();
        event.target.style.backgroundColor = 'black';
        event.target.className = "deadCells";
        event.target.style.minWidth = gridCellDimension;
        event.target.style.minHeight = gridCellDimension;

    }

});





//Reset Clause
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "btn");
resetButton.textContent = "Reset";

resetButton.addEventListener("click", (event) => {

    const itemToRemove  = document.getElementById("#container");
    while (itemToRemove.firstChild){
        itemToRemove.removeChild(itemToRemove.firstChild );
    }
    //This changes deadCells to liveCells but needs to the overall gridSize. To Revist later

    resetGrid.forEach(element => {
        console.log(element.classList);
        element.remove();
        /*
        element.classList.replace("deadCells", "liveCells");
        element.style.backgroundColor = 'white';
        */
    });




});

body.append(resetButton);



if (typeof module === 'object') {
    module.exports = getSize();
}


