var SandwichMaker = (function(maker) {

	var meatPrices;
	var meats = {
		"none" : 0,
		"turkey" : 1.05,
		"ham" : 1.10,
		"pastrami" : 1.25
	};

	maker.addMeat = function(selection) {
		var order = {};
		for (var meat in meats) {
			if (meat === selection) {
				order[selection] = meats[meat];
				return order;
			}
		}
	};

	return maker;

})(SandwichMaker);