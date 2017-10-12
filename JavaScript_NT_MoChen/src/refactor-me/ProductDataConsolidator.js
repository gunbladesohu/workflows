
function ProductDataConsolidator() {

	var l = new LawnmowerRepository().getAll();
	var p = new PhoneCaseRepository().getAll();
	var t = new TShirtRepository().getAll();

	this.products = [];

	this.FillProducts(l,"Lawnmower");
	this.FillProducts(p,"Phone Case");
	this.FillProducts(t,"T-Shir");
}

ProductDataConsolidator.prototype.get = function () {
	return this.products;
}

ProductDataConsolidator.prototype.FillProducts = function(array, typeName){
	for (var i = 0; i < array.length; i++) 
	{	
		var price_currency = new Price(array[i].price.toFixed(2));
		this.products.push({
			id: array[i].id,
			name: array[i].name,
			price:  price_currency,
			type: typeName
		});
	}
}