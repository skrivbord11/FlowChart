var canvas = new fabric.Canvas('canvas');
//canvas.setBackgroundImage('troll.PNG', canvas.renderAll.bind(canvas));

$("#text").on("click", function(e) {
text = new fabric.Text($("#text").val(), { left: 100, top: 100 });
	  canvas.add(text);
});
function rectFun() {
  	rect = new fabric.Rect({
    left: 40,
    top: 40,
    width: 50,
    height: 50,
    fill: 'transparent',
    stroke: 'green',
    strokeWidth: 5,
			  });
  canvas.add(rect);
}

function circFun(){
  	rect = new fabric.Circle({
    left: 40,
    top: 40,
    radius: 50,
    fill: 'transparent',
    stroke: 'green',
    strokeWidth: 5,
			  });
  canvas.add(rect);
}

$("#save").on("click", function(e) {
  	$(".save").html(canvas.toSVG());
});
