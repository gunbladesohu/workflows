function ViewTemplate(dataConsolidator,dataMap) {
    this.dataConsolidator = dataConsolidator;
    this.dataMap = dataMap;
}

ViewTemplate.prototype.render = function (currency) 
{
    var currentType  = this.dataMap.getViewArgument(currency).currencyType;
    var strInsertTarget = this.dataMap.getViewArgument(currency).strInsertTarget;
    var ret = 
    '<table class="table table-striped">'
    +'	<thead>'
    +'		<tr><td colspan="3">Products ('+currency+ ')		</td></tr>'
    +'		<tr>'
    +'			<td>Name</td>'
    +'			<td>Price</td>'
    +'			<td>Type</td>'
    +'		</tr>'
    +'	</thead>'
    + '	<tbody>';

    var n = this.dataConsolidator.get();
    for (var i = 0; i < n.length; i++) {
        ret +=
            '<tr>'
        +		'<td>' + n[i].name +'</td>'
        +		'<td>' + n[i].price.getPriceByCurrentType(currentType) + '</td>'
        +		'<td>' + n[i].type + '</td>'
        +	'</tr>';
    }
    ret += '</tbody></table>';
   
   return ret;
}

