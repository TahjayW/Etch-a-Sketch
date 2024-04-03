function getSize(){
    const gridSize = prompt("Hey, how big do you want this thing?");
    if(gridSize > 99){
        alert("That's too big");
        getSize();
    }
return gridSize;
}

module.exports = getSize

