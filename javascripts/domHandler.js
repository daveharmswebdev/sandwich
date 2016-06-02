var ticketEl = document.getElementById('ticket');
var totalPriceEl = document.getElementById('totalPrice');
var elBtnIngredient = document.getElementsByClassName('btnIngredient');
var elSelIngredient = document.getElementsByClassName('selIngredient');

for (let x = 0; x < elBtnIngredient.length; x++) {
	elBtnIngredient[x].addEventListener('click', function(event) {
		var ingredient = event.currentTarget.id.slice(6);
		addIngredient(x, ingredient);
	});
}

function addIngredient(x, ingredient) {
	var selection = elSelIngredient[x].value;
	var func = `add${ingredient}`;
	console.log(selection, func);
	SandwichMaker.addToTicket(SandwichMaker[func](selection));	
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

// var selMeatEl = document.getElementById('meat');
// var selBreadEl = document.getElementById('bread');
// var selCheeseEl = document.getElementById('cheese');
// var selVeggieEl = document.getElementById('veggie');
// var selCondimentEl = document.getElementById('condiment');

// function addMeat(x) {
// 	console.log(elSelIngredient[x].value);
// 	var selection = selMeatEl.value;
// 	SandwichMaker.addToTicket(SandwichMaker.addMeat(selection));
// 	renderTicket(SandwichMaker.getTicket());
// 	renderTotalPrice(SandwichMaker.getTotalPrice());
// }
// function addBread(x) {
// 	console.log(elSelIngredient[x].value);
// 	var selection = selBreadEl.value;
// 	SandwichMaker.addToTicket(SandwichMaker.addBread(selection));
// 	renderTicket(SandwichMaker.getTicket());
// 	renderTotalPrice(SandwichMaker.getTotalPrice());
// }
// function addCheese(x) {
// 	console.log(elSelIngredient[x].value);
// 	var selection = selCheeseEl.value;
// 	SandwichMaker.addToTicket(SandwichMaker.addCheese(selection));
// 	renderTicket(SandwichMaker.getTicket());
// 	renderTotalPrice(SandwichMaker.getTotalPrice());
// }
// function addVeggie(x) {
// 	console.log(elSelIngredient[x].value);
// 	var selection = selVeggieEl.value;
// 	SandwichMaker.addToTicket(SandwichMaker.addVeggie(selection));
// 	renderTicket(SandwichMaker.getTicket());
// 	renderTotalPrice(SandwichMaker.getTotalPrice());
// }
// function addCondiments(x) {
// 	console.log(elSelIngredient[x].value);
// 	var selection = selCondimentEl.value;
// 	SandwichMaker.addToTicket(SandwichMaker.addCondiments(selection));
// 	renderTicket(SandwichMaker.getTicket());
// 	renderTotalPrice(SandwichMaker.getTotalPrice());
// }