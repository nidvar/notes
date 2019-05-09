const notes = start();
document.querySelector('.enter-title').addEventListener('click', ()=>{
	add_note_title();
});
document.getElementById('user-input').addEventListener('keydown', (e)=>{
	if(e.keyCode === 13){
		add_note_title();
	}
});

display_array();