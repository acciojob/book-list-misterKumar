//your JS code here. If required.
const title=document.getElementById("title");
const author=document.getElementById("author");
const isbne=document.getElementById("isbn"); 

const tbody=document.getElementById("book-list");

function handleRow(e) {
	(e.target.parentElement.parentElement.remove()); 
}

function handleAddBook() {
const row=tbody.insertRow(tbody.children.length);

  const cell1=row.insertCell(0);
	cell1.innerText=title.value;
	  const cell2=row.insertCell(1);
	cell2.innerText=author.value;
	  const cell3=row.insertCell(2);
	cell3.innerText=isbne.value;
	  const cell4=row.insertCell(3);
	
		const btn=document.createElement("button");
	btn.innerText="X";
	btn.setAttribute("class","delete");
	btn.addEventListener("click",handleRow);
		cell4.append(btn)
}