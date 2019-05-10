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
			time_created_in_seconds:Date.now(),
			time_updated_in_seconds:Date.now(),
		})
		document.getElementById('user-input').value = '';
		add_to_storage();
		display_array(notes);
		location.assign(`edit.html#${random}`)
}

const filtering_by_alphabetical_order = ()=>{
	const x = notes.sort((a,b)=>{
		if(a.title.toLowerCase() < b.title.toLowerCase()){
			return -1
		}else if(a.title.toLowerCase() > b.title.toLowerCase()){
			return 1
		}else{
			return 0
		}
	})
	display_array(x);
}

const filtering_by_first_created = ()=>{
	const x = notes.sort((a,b)=>{
		if(a.time_created_in_seconds < b.time_created_in_seconds){
			return -1
		}else if(a.time_created_in_seconds > b.time_created_in_seconds){
			return 1
		}else{
			return 0
		}
	})
	display_array(x);
}
const filtering_by_last_updated = ()=>{
	const x = notes.sort((a,b)=>{
		if(a.time_updated_in_seconds < b.time_updated_in_seconds){
			return 1
		}else if(a.time_updated_in_seconds > b.time_updated_in_seconds){
			return -1
		}else{
			return 0
		}
	})
	display_array(x);
}