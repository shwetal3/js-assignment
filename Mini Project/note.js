showNotes();//function that shows notes if any
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',function(el)//if click button ten it add nots and update localstorage
{
	let addTxt=document.getElementById("addTxt");
	let addTitle=document.getElementById("addTitle");
	let notes = localStorage.getItem("notes");
	if(notes==null)
	{
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	
	}
	let myObj = 
	{
		title:addTitle.value,
		text:addTxt.value
	}
	notesObj.push(myObj);
	localStorage.setItem("notes",JSON.stringify(notesObj));
	addTxt.value=" ";
	addTitle.value=" " ;
	//console.log(notesObj);
	showNotes();
});

function showNotes()
{
	let notes = localStorage.getItem("notes");
	if(notes==null)
	{
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	
	}
	
	let html=" ";
	notesObj.forEach(function(element,index)
	{
		
		html+= `<div class="noteCard my-2 mx-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.text}</p>
    <button class="btn btn-primary" onclick="deleteNote(this.id)" id="${index}">
				DeleteNote</button>
  </div>
</div>`;	
	});
	
	if(notesObj!=null)
	{
		let notesElm=document.getElementById("notes");
	if(notesObj.length!=0)
	{
		notesElm.innerHTML=html;
	}
	else{
		notesElm.innerHTML=`<h3>Nothing to show!</h3>`;
	}	
	}
	}
	function deleteNote(index)
	{
	let notes = localStorage.getItem("notes");
	if(notes == null)
	{
		notesObj=[];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	notesObj.splice(index,1);
		localStorage.setItem("notes",JSON.stringify(notesObj));
	showNotes();
	}
	let search = document.getElementById("searchTxt");
	search.addEventListener('input',()=>
	{
		let inputVal = search.value.toLowerCase();//it get the values from input.
		//console.log(inputVal);
		let noteCards = document.getElementsByClassName('noteCard');
		Array.from(noteCards).forEach(function(element)
		{
			let cardTxt = element.getElementsByTagName("p")[0].innerText;//take all text of notes 
			if(cardTxt.includes(inputVal))
			{
				element.style.display="block";//display notes which we search
			}
			else
			{
				element.style.display="none";//hide others notes
			}
		})
		
	})