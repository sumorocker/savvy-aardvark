// var Parse = require('parse/node');
// Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

// var query = new Parse.Query('User');

// query.equalTo( "objectId", "BG22dpd6Za"); 

// query.get('to_avoid',{
//   success: function(results) {
//     console.log(results);
//   },
//   error: function(error) {
//     // error is an instance of Parse.Error.
//     console.log('What happened?');
//   }
// });

var _ = require('underscore');

var searchResult = 'apple, orange, banana';
var resultArray = searchResult.split(", ");


var to_avoid1 = [ 'apple', 'orange', 'mango'];
var to_avoid2 = [ 'mango', 'lemon', 'pineapple'];
var to_avoid3 = [ 'orange', 'lemon', 'grapes'];
var to_avoid4 = ['blue', 'banana', 'lime'];

function compare (arr1, arr2){
    console.log(_.intersection(arr1, arr2));
}

compare(resultArray, to_avoid1);
compare(resultArray, to_avoid2);
compare(resultArray, to_avoid3);
compare(resultArray, to_avoid4);



// console.log(_.intersection(resultArray, to_avoid1)); //returns [apple, orange]
// console.log(_.intersection(resultArray, to_avoid2)); //returns []
// console.log(_.intersection(resultArray, to_avoid3)); //returns [orange]
// console.log(_.intersection(resultArray, to_avoid4)); //returns 

