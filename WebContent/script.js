var goods = ["Apples", "Oranges", "Blueberries", "Watermelon"];
var prices = [1.00, 2.00, 3.00, 4.00];
var totalCost = 0.0;

function printList() {
	for (var i = 0; i <goods.length; i++) {
		var listEl = document.getElementById("listGoods");
		listEl.insertAdjacentHTML("afterend", "<tr><td>" + goods[i] + "</td><td>" + "$" + prices[i] + "</td></tr>");
	}
}

function addToCart(goods){
	if (goods === "Apples") {
		totalCost = totalCost + prices[0];
		alert(goods + " added to cart. Cost: $" + prices[0]);
	} else if (goods === "Oranges") {
		totalCost = totalCost + prices[1];
		alert(goods + " added to cart. Cost: $" + prices[1]);
	} else if (goods === "Blueberries") {
		totalCost = totalCost + prices[2];
		alert(goods + " added to cart. Cost: $" + prices[2]);
	} else if (goods === "Watermelon") {
		totalCost = totalCost + prices[3];
		alert(goods + " added to cart. Cost: $" + prices[3]);
	}
		
	
	
}

