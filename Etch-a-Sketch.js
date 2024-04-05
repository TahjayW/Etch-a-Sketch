function getSize(){
    const gridSize = prompt("Hey, how big do you want this thing?");
    if(gridSize > 99){
        alert("That's too big");
        getSize();
    }
return gridSize;
}

const body = document.querySelector("body");


const gridSize = Math.pow(getSize(), 2);

const generatedGrid = document.createDocumentFragment();

//Create and Populate Grid
for(i= 0; i< gridSize; i++){
    const gridCell = document.createElement("div");
    gridCell.id = 'div #' + i; 
    gridCell.className = "liveCells";
generatedGrid.append(gridCell);
}



body.append(generatedGrid);


//Bubbling to have live cells send mouse event to body, change class to deadcell

body.addEventListener("mouseover", (event)=> {

     event.target.style.color = 'black';
     event.target.className = "deadCells";
});




if(typeof module === 'object'){
    module.exports = getSize();
}


