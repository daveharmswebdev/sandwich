var SandwichMaker = (function(maker) {

	var breadPrices;
	var breads = {
		"none" : 0,
		"white" : 0.75,
		"wheat" : 0.75,
		"rye" : 1.00
	};

	maker.addBread = function(selection) {
		var order = {};
		for (var bread in breads) {
			if (bread === selection) {
				order[selection] = breads[bread];
				return order;
			}
		}
	};

	return maker;

})(SandwichMaker);