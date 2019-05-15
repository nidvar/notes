const notes = start();

document.querySelector('.enter-title').addEventListener('click', ()=>{
	add_note_title();
	document.getElementById('display').innerHTML = '';
});
document.getElementById('user-input').addEventListener('keydown', (e)=>{
	if(e.keyCode === 13){
		add_note_title();
		document.getElementById('display').innerHTML = '';
	}
});

window.addEventListener('storage', (e)=>{
	if(e.key === 'notes'){
		document.getElementById('display').innerHTML = '';
		notes1 = JSON.parse(e.newValue)
		display_array(notes1);
	}
})

document.getElementById('mySelect').addEventListener('input',()=>{
	if(document.getElementById('mySelect').selectedIndex === 0){
		console.log('just added');
		document.getElementById('display').innerHTML = '';
		filtering_by_first_created();
	}else if(document.getElementById('mySelect').selectedIndex === 1){
		console.log('just updated');
		document.getElementById('display').innerHTML = '';
		filtering_by_last_updated();
	}else{
		console.log('alphabetical');
		document.getElementById('display').innerHTML = '';
		filtering_by_alphabetical_order();
	}
})

display_array(notes);
