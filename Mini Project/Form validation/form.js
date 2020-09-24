console.log("Project5");

const name = document.getElementById("name");
const namevalid=document.getElementById("namevalid");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
//console.log(name,email,phone);
name.addEventListener('blur',()=>
{
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	let string = name.value;
	if(regex.test(string))
	{
		name.classList.remove('is-invalid');
	}
	else
	{
		name.classList.add('is-invalid');
		namevalid.classList.add('is-invalid');
		
	}
	//console.log("blurred")
});
email.addEventListener('blur',()=>
{
	
	let regex = /^([a-zA-Z]([_\-\.0-9a-zA-Z])+)@([_\-\.a-zA-Z]+)\.([a-zA-Z]{2,4})$/;
	let string = email.value;
	if(regex.test(string))
	{
		email.classList.remove('is-invalid');
	}
	else
	{
		email.classList.add('is-invalid');
		//namevalid.classList.add('is-invalid');
		
	}
	
//	console.log("blurred")
});
phone.addEventListener('blur',()=>
{
	
	let regex = /^([0-9]){10}$/;
	let string = phone.value;
	if(regex.test(string))
	{
		phone.classList.remove('is-invalid');
	}
	else
	{
		phone.classList.add('is-invalid');
		//namevalid.classList.add('is-invalid');
		
	}
	//console.log("blurred")
});