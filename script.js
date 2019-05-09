const notes = start();

document.querySelector('.enter-title').addEventListener('click', ()=>{
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
});
display_array();