//Global Variables
let gridSize, cellsPerRow, gridCellDimension, generatedGridContainer;
let overallBrightness = 1.0;

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
    //Set brightness to default value
    
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

        //BColor change logic

generatedGridContainer.addEventListener("mouseover", (event) => {
    if (event.target.className === "liveCells") {
        event.stopPropagation();
        event.target.style.backgroundColor = randomColor();
        event.target.className = "deadCells";
        event.target.style.minWidth = gridCellDimension;
        event.target.style.minHeight = gridCellDimension;
        event.target.style.filter = `brightness(${decreaseBrightness(overallBrightness)})`;
    }

});


    }

    body.append(generatedGridContainer);
}









//Reset Clause
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "btn");
resetButton.textContent = "Reset";

resetButton.addEventListener("click", (event) => {
    overallBrightness = 1;
    generatedGridContainer.remove();
    makeGrid();
  
    
});

body.prepend(resetButton);



if (typeof module === 'object') {
    module.exports = getSize();
}

//Random color clause

function randomColor(){
    let color = '#';
    let hexLetters = '0123456789ABCDEF';

    for(i = 0; i < 6; i++){

    color+= hexLetters[Math.floor(Math.random()*16)];    
    }
    return color;
}

//Brightness Clause

function decreaseBrightness(input){
    input = Math.round(input*10)/10; // To avoid overflow error 
    if(input > 0){
        input -= 0.1;
    }
    overallBrightness = input;
    return input;
}