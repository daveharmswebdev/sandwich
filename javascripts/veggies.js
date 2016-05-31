var SandwichMaker = (function(maker) {

	var veggies = {
		"none" : 0,
		"lettuce" : 0.50,
		"tomato" : 0.50,
		"onion" : 0.25,
		"pickle" : 0.1
	};

	maker.addVeggie = function(selection) {
		var order = {};
		for (var veggie in veggies) {
			if (veggie === selection) {
				order[selection] = veggies[veggie];
				return order;
			}
		}
	};

	return maker;

})(SandwichMaker);