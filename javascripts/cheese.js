var SandwichMaker = (function(maker) {

	var cheesePrices;
	var cheeses = {
		"none" : 0,
		"swiss" : .75,
		"provolone" : 1,
		"american": 1 
	};

	maker.addCheese = function(selection) {
		var order = {};
		for (var cheese in cheeses) {
			if (cheese === selection) {
				order[selection] = cheeses[cheese];
				return order;
			}
		}
	};

	return maker;

})(SandwichMaker);