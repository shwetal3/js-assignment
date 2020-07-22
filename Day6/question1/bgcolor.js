var i=0;
function changecolor()
{
	let colorsarray = ['Aqua','Azure','Beige','AntiqueWhite','chartreuse','crimson'];
		document.body.style.backgroundColor=colorsarray[i];
		i=(i+1)%colorsarray.length;
}
setInterval(changecolor,5000);
