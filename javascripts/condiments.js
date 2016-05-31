var SandwichMaker = (function(maker) {

	var condimentPrices;
	var condiments = {
		"none" : 0,
		"mayonaise" : 0.10,
		"sriracha" : 0.10,
		"mustard" : 0.10,
		"oil and vinegar" : 0.10,
		"salt and pepper" : 0
	};

	maker.addCondiments = function(selection) {
		var order = {};
		for (var condiment in condiments) {
			if (condiment === selection) {
				order[selection] = condiments[condiment];
				return order;
			}
		}
	};

	return maker;

})(SandwichMaker);