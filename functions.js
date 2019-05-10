const create_date = ()=>{
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const x = new Date();
	const y = x.getHours()
	
	return x.getDate() +'-'+ months[x.getMonth()] + '-' + (x.getFullYear())+', '+ x.getHours() +':'+ x.getMinutes()
}

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

const display_array = (any_array)=>{
	any_array.forEach((a)=>{
		const x = document.createElement('a');
		x.setAttribute('href', `edit.html#${a.id}`)
		x.setAttribute('class', `note-title`)
		x.setAttribute('id', `${a.id}`)
		x.textContent = a.title
		document.getElementById('display').appendChild(x);

		const y = document.createElement('span');
		y.setAttribute('class', 'note-date')
		y.textContent = a.time;
		x.appendChild(y);
	})
}

const add_note_title = ()=>{
		const random = Math.random()*Math.random();
		notes.push({
			title: document.getElementById('user-input').value,
			text: '',
			id: random,
			time: create_date()
		})
		document.getElementById('user-input').value = '';
		add_to_storage();
		display_array(notes);
		location.assign(`edit.html#${random}`)
}