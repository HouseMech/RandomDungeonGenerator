//This is the Props file. It will contain the creation process of all props that will be used in the RDG.

//Test square
function drawSquare(ctx, colour) {
  ctx.fillStyle = colour;
  ctx.fillRect(0, 0, 150, 75);
}

//Test circle
function drawCircle(ctx, colour) {
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.fillStyle = colour;
  ctx.fill();
}
