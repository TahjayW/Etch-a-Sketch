const getSize = require("./Etch-a-Sketch");
var prompt = require('prompt');
test('Assigns gridSize from user input', () => {
    expect(getSize()).toBe(4)
}) 