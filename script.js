const notes = start();

document.querySelector('.enter-title').addEventListener('click', ()=>{
	add_note_title();
});
document.getElementById('user-input').addEventListener('keydown', (e)=>{
	if(e.keyCode === 13){
		add_note_title();
	}
});

window.addEventListener('storage', (e)=>{
	if(e.key === 'notes'){
		document.getElementById('display').innerHTML = '';
		notes1 = JSON.parse(e.newValue)

	notes1.forEach((a)=>{
		const x = document.createElement('a');
		x.setAttribute('href', `edit.html#${a.id}`)
		x.setAttribute('class', `note-title`)
		x.setAttribute('id', `${a.id}`)
		x.textContent = a.title
		document.getElementById('display').appendChild(x);
	})



	}
})

display_array();