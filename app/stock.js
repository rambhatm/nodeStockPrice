
var request = require('request');

exports.getStockPrice = function(symbol, callback) {
  var lookupURL = "http://finance.google.com/finance/info?client=ig&q=";
  if (symbol == "" ) {
    return undefined;
  }
  var result = [];
  var i = 0;

  for ( i = 0; i < symbol.length; i++) {
    lookupURL = lookupURL + "NASDAQ:" + symbol[i] + ",";
  }
  request(lookupURL, function(error, response, body){
    if (!error && response.statusCode == 200) {
      bodyStr = body.slice(4); // the API returns results in comments
      var stk = JSON.parse(bodyStr);
      for (i = 0; i < stk.length ; i++) {
        result.push(Number(stk[i].l_cur));
      }
      return result;
    } else {
      return undefined;
    }

  });
};
