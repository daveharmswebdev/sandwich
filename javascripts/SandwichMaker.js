var SandwichMaker = (function() {

	var ticket = [];

	return {
		addToTicket: function(orderItem) {
			ticket.push(orderItem);
		},
		getTicket: function() {
			return ticket;
		},
		addTopping: function(toppingPrice) {
			totalPrice += toppingPrice;
		},
		getTotalPrice: function() {
			var totalPrice = 0;
			for (var x =0; x < ticket.length; x++) {
				totalPrice += ticket[x][Object.keys(ticket[x])];
			}
			return totalPrice;
		}
	};

})();

