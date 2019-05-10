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
		display_array(notes1);
	}
})

display_array(notes);