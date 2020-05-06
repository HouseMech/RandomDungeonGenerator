var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



//This is the start of the Random Dungeon Generator
//First, it will generate a base map;
//then it will use many Random number generators to randomly assign various attributes
//to the new map, such as stairs, doors, loot-rooms and various other things.
//However, there must be a few rules applied to the generator;
//Such as, there cannot be a lake of lava right beside this house.
//The generator will also console.log() the various attributes so that the User can find
//which map suits their fancy.
//The Random Dungeon Generator will be updated every so often with new attributes,
//it will start with 20 or more attributes.




console.log("start")


function rng() {
  return Math.floor((Math.random() * 20) + 1);

}



drawGrid(ctx, canvas.width, canvas.height, 10, 15);
drawCircle(ctx, "blue");
drawSquare(ctx, "purple");
