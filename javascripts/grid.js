function drawGrid(ctx, width,height,nrows,ncols) {
  ctx.rect(0, 0, width, height);
  ctx.stroke();

  var boxWidth = width/ncols;
  for (var i = 1; i < ncols; i++) {
    ctx.moveTo(boxWidth * i, 0);
    ctx.lineTo(boxWidth * i, height);
    ctx.stroke();
  }

  var boxHeight = height/nrows;
  for (var i = 1; i < nrows; i++) {
    ctx.moveTo(0, boxHeight * i);
    ctx.lineTo(width, boxHeight * i);
    ctx.stroke();
  }
}
