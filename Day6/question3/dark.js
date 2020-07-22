let name=prompt("Enter your name");
const user=	document.getElementById("user");
user.innerText="Hey "+ name + " Welcome to the page";

function myFunction() {
   var element = document.body;
   element.classList.toggle("darkmode");
}
const times=document.getElementById("clocks");
function clock()
{
	let date= new Date();
	let time=date.toLocaleTimeString();
	times.innerText=time;
}
myFunction();
setInterval(clock,1000);

