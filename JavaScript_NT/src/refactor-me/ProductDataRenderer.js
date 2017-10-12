

function ProductDataRenderer() {
	this.dataConsolidator = new ProductDataConsolidator();
	this.dataMap = new dataMap();
	this.ViewTemplate = new ViewTemplate(this.dataConsolidator,this.dataMap);
}

ProductDataRenderer.prototype.render = function () {
	this.renderView("NZD");
	this.renderView("USD");
	this.renderView("Euro");
}
	
ProductDataRenderer.prototype.renderView = function (currency) {
		var ret = this.ViewTemplate.render(currency);
		var InsertTarget = this.dataMap.getViewArgument(currency).strInsertTarget;

		document.getElementById(InsertTarget).innerHTML = ret;
}

