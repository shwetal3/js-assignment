let name=prompt("Enter your name");
const dark= document.getElementById("darks");
const user=	document.getElementById("user");
user.innerText="Hey "+ name + " Welcome to the page";
dark.classList.add("body");
dark.classList.toggle('body');
dark.classList.toggle('dmode');
