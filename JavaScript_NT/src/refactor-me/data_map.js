function dataMap(){
    this.myMap = new Map();
    this.myMap.set("NZD",{currencyType:"NZ",strInsertTarget:"nzdProducts",rate:1});
    this.myMap.set("USD",{currencyType:"US",strInsertTarget:"usdProducts",rate:0.76});
    this.myMap.set("Euro",{currencyType:"EU",strInsertTarget:"euProducts",rate:0.67});
} 

dataMap.prototype.getViewArgument = function (currentType) 
{
    return this.myMap.get(currentType);
}
dataMap.prototype.getRawMap = function () 
{
    return this.myMap;
}