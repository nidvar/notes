const notes = start();

const x = notes.find((a)=>{
	return a.id === parseFloat(location.hash.substring(1))
})

document.getElementById('title-input').value = x.title
document.getElementById('text-input').value = x.text

document.getElementById('enter-title').addEventListener('click', ()=>{
		x.title = document.getElementById('title-input').value;
		add_to_storage();
})

document.getElementById('enter-note').addEventListener('click', ()=>{
		x.text = document.getElementById('text-input').value;
		add_to_storage();
})

document.getElementById('remove-note').addEventListener('click', ()=>{
	console.log(notes);
	const x = notes.findIndex((a)=>{
		if(a.id === parseFloat(location.hash.substring(1))){
			return true
		}
	})
	notes.splice(x, 1)
	add_to_storage();
	location.assign(`index.html`)
})