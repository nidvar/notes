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
		x.setAttribute('id', `${a.id}`)
		x.textContent = a.title
		document.getElementById('display').appendChild(x);
	})
}

const add_note_title = ()=>{
		const random = Math.random()*Math.random();
		notes.push({
			title: document.getElementById('user-input').value,
			text: '',
			id: random
		})
		document.getElementById('user-input').value = '';
		add_to_storage();
		display_array();
		location.assign(`edit.html#${random}`)
}