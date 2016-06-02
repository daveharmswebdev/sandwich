var ticketEl = document.getElementById('ticket');
var totalPriceEl = document.getElementById('totalPrice');
var elBtnIngredient = document.getElementsByClassName('btnIngredient');
var elSelIngredient = document.getElementsByClassName('selIngredient');

for (let x = 0; x < elBtnIngredient.length; x++) {
	elBtnIngredient[x].addEventListener('click', (event) => addIngredient(x, event.currentTarget.id.slice(6)));
}

function addIngredient(x, ingredient) {
	var selection = elSelIngredient[x].value;
	var func = `add${ingredient}`;
	SandwichMaker.addToTicket(SandwichMaker[func](selection));	
	renderTicket(SandwichMaker.getTicket());
	renderTotalPrice(SandwichMaker.getTotalPrice());	
}

function renderTicket(ticket) {
	var content = '';
	ticket.forEach((ticket) => content += renderLine(ticket) );
	ticketEl.innerHTML = content;
}

function renderLine(line) {
	var item = Object.keys(line);
	return `<p>${item} -- ${line[item]}</p>`;
}

function renderTotalPrice(totalPrice) {
	totalPriceEl.innerHTML = totalPrice;
}