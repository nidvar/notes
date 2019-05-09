const start = ()=>{ 
	if(localStorage.getItem('notes') != null){
		return JSON.parse(localStorage.getItem('notes'))
	}else{
		return [];
	}
}
const add_to_storage = ()=>{
	const x = JSON.stringify(notes);
	localStorage.setItem('notes', x);
}


const display_array = ()=>{
	notes.forEach((a)=>{
		const x = document.createElement('a');
		x.setAttribute('href', `edit.html#${a.id}`)
		x.setAttribute('class', `note-title`)
		x.textContent = a.title
		document.getElementById('display').appendChild(x);
	})
}
