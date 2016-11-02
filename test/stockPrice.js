/*
* Tests stock price
*/

var expect = require("chai").expect;
var stock = require("../app/stock");

describe("Tests stock price given stock symbol", function(){
    it("getStockPrice() should return undefined for NULL stock ticker", function(){
      stock.getStockPrice("", function(price) {
      expect(price).to.be.undefined;
      });
    });

    it("getStockPrice(\"AAPL\") should return stock price of APPLE", function(){
      stock.getStockPrice(["AAPL"], function(price) {
      expect(price[0]).to.not.equal(0);
      });
    });

    it("getStockPrice INVALID stock ticker should return undefined", function() {
      stock.getStockPrice(["boombasticstock"], function(price) {
      expect(price).to.be.undefined;
      });
    });

    it("getStockPrice(Array of indices) should return array of stock prices", function() {
      stock.getStockPrice(["AAPL","AMZN"], function(price) {
        expect(price[0]).to.not.equal(0);
        expect(price[1]).to.not.equal(0);
      });
    });
  });
