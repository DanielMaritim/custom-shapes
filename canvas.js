function doFirst () {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(120,150);
	canvas.lineTo(0,180);
	canvas.lineTo(120,210);
	canvas.lineTo(50,310);
	canvas.lineTo(160,250);
	canvas.lineTo(190,370);
	canvas.lineTo(220,250);
	canvas.lineTo(330,310);
	canvas.lineTo(260,210);
	canvas.lineTo(380,180);
	canvas.closePath(); 
	canvas.stroke();
}
window.addEventListener("load",doFirst ,false);