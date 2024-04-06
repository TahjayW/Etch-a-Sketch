function getSize() {
    const gridSize = prompt("Hey, how big do you want this thing?");
    if (gridSize > 99) {
        alert("That's too big");
        getSize();
    }
    return gridSize;
}

const body = document.querySelector("body");


const gridSize = Math.pow(getSize(), 2);

const generatedGridContainer = document.createElement("div");
const cellsPerRow = 60 / Math.sqrt(gridSize);
generatedGridContainer.setAttribute("id", "container")

//Create and Populate Grid
for (i = 0; i < gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.id = 'div #' + i;
    gridCell.className = "liveCells";
    gridCell.style.width = cellsPerRow + "px";
    generatedGridContainer.append(gridCell);
}




body.append(generatedGridContainer);


//Bubbling to have live cells send mouse event to body, change class to deadcell

generatedGridContainer.addEventListener("mouseover", (event) => {
    if (event.target.className === "liveCells") {
        event.stopPropagation();
        event.target.style.color = 'black';
        event.target.className = "deadCells";
    }

});




if (typeof module === 'object') {
    module.exports = getSize();
}


