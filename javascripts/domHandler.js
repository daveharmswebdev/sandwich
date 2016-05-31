var ticketEl = document.getElementById('ticket');
var totalPriceEl = document.getElementById('totalPrice');
var btnAddMeatEl = document.getElementById('btnAddMeat');
var btnAddBreadEl = document.getElementById('btnAddBread');
var btnAddCheeseEl = document.getElementById('btnAddCheese');
var btnAddVeggieEl = document.getElementById('btnAddVeggie');
var btnAddCondimentEl = document.getElementById('btnAddCondiment');
var selMeatEl = document.getElementById('meat');
var selBreadEl = document.getElementById('bread');
var selCheeseEl = document.getElementById('cheese');
var selVeggieEl = document.getElementById('veggie');
var selCondimentEl = document.getElementById('condiment');


btnAddMeatEl.addEventListener('click', addMeat);
btnAddBreadEl.addEventListener('click', addBread);
btnAddCheeseEl.addEventListener('click', addCheese);
btnAddVeggieEl.addEventListener('click', addVeggie);
btnAddCondimentEl.addEventListener('click', addCondiment);

function addMeat() {
	var selection = selMeatEl.value;
	SandwichMaker.addToTicket(SandwichMaker.addMeat(selection));
	renderTicket(SandwichMaker.getTicket());
	renderTotalPrice(SandwichMaker.getTotalPrice());
}
function addBread() {
	var selection = selBreadEl.value;
	SandwichMaker.addToTicket(SandwichMaker.addBread(selection));
	renderTicket(SandwichMaker.getTicket());
	renderTotalPrice(SandwichMaker.getTotalPrice());
}
function addCheese() {
	var selection = selCheeseEl.value;
	SandwichMaker.addToTicket(SandwichMaker.addCheese(selection));
	renderTicket(SandwichMaker.getTicket());
	renderTotalPrice(SandwichMaker.getTotalPrice());
}
function addVeggie() {
	var selection = selVeggieEl.value;
	SandwichMaker.addToTicket(SandwichMaker.addVeggie(selection));
	renderTicket(SandwichMaker.getTicket());
	renderTotalPrice(SandwichMaker.getTotalPrice());
}
function addCondiment() {
	var selection = selCondimentEl.value;
	SandwichMaker.addToTicket(SandwichMaker.addCondiments(selection));
	renderTicket(SandwichMaker.getTicket());
	renderTotalPrice(SandwichMaker.getTotalPrice());
}

function renderTicket(ticket) {
	var content = '';
	for (var x = 0; x < ticket.length; x++) {
		content += renderLine(ticket[x]);
	}
	ticketEl.innerHTML = content;
}

function renderLine(line) {
	var item = Object.keys(line);
	return `<p>${item} -- ${line[item]}</p>`;
}

function renderTotalPrice(totalPrice) {
	totalPriceEl.innerHTML = totalPrice;
}