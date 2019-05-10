const create_date = ()=>{
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const x = new Date();
	const z = ()=>{
		if(x.getMinutes() < 10){
			return '0'+x.getMinutes();
		}else{
			return x.getMinutes();
		}
	}
	if(x.getHours() > 12){
		return x.getDate() +'-'+ months[x.getMonth()] + '-' + (x.getFullYear())+', '+ (x.getHours()-12) +':'+ z() +'pm'
	}else{
		return x.getDate() +'-'+ months[x.getMonth()] + '-' + (x.getFullYear())+', '+ x.getHours() +':'+ z() +'am'
	}
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

		const x = document.createElement('div');
		x.setAttribute('class', `note-title`);
		x.setAttribute('id', `${a.id}`)
		x.addEventListener('click',()=>{
			location.assign(`edit.html#${a.id}`)
		})
		document.getElementById('display').appendChild(x);

		const z = document.createElement('a');
		z.setAttribute('href', `edit.html#${a.id}`);
		z.textContent = a.title;
		x.appendChild(z);

		const y = document.createElement('p');
		y.setAttribute('class', 'note-date')
		y.textContent = `updated at: ${a.time_updated}`;
		x.appendChild(y);
	})
}

const add_note_title = ()=>{
		const random = Math.random()*Math.random();
		notes.push({
			title: document.getElementById('user-input').value,
			text: '',
			id: random,
			time_created: create_date(),
			time_updated: create_date(),
		})
		document.getElementById('user-input').value = '';
		add_to_storage();
		display_array(notes);
		location.assign(`edit.html#${random}`)
}