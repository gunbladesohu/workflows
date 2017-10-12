function Price(nPrice) {
    this.price=nPrice
    var myMap = new dataMap();
    var rawMap = myMap.getRawMap();
    //construct attributes based on the datamap;
    for (var [key, value] of rawMap) {
        var PropName = value.currencyType;  //get attribute alias accessor name
        var rateForCurrency = value.rate;   //get correspondent rate
        Object.defineProperty(this, PropName, {
            get: function () { return (this.price * rateForCurrency ).toFixed(2);},
            set: function (value) { this.price = value; }
        });
      }
}


Price.prototype.getPriceByCurrentType= function(currentType)
{
    return this[currentType];
}

