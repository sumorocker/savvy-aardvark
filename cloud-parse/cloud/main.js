Parse.Cloud.define("UPC", function(request, response) {


Parse.Cloud.httpRequest({
  url: 'http://api.foodessentials.com/labelarray?u='+request.params.search+'&sid=1cf87436-1f47-4fc6-99c1-8513d5ab97c7&n=10&s=0&f=json&api_key=3dqu23v7j8v4ey5wu4cvcxcj',
}).then(function(httpResponse) {
	console.log(httpResponse);
	response.success(JSON.parse(httpResponse.text));
  // success
  console.log(httpResponse.text);
},function(httpResponse) {
  // error
  console.error('Request failed with response code ' + httpResponse.status);
});
  
});


Parse.Cloud.define("productName", function(request, response) {

Parse.Cloud.httpRequest({
  url: 'http://api.foodessentials.com/searchprods?q='+request.params.search+'&sid=a4c7009c-f312-4239-a63a-1ee7d55e9046&n=10&s=0&f=json&api_key=3dqu23v7j8v4ey5wu4cvcxcj'
}).then(function(httpResponse) {
	console.log(httpResponse);
	response.success(JSON.parse(httpResponse.text)); 
  // success
  console.log(httpResponse.text);
},function(httpResponse) {
  // error
  console.error('Request failed with response code ' + httpResponse.status);
});
  
});


Parse.Cloud.define("productAdditives", function(request, response) {

Parse.Cloud.httpRequest({
  url: 'http://api.foodessentials.com/label?u='+request.params.search+'&sid=656281d8-d753-4e20-b150-92494654bf4e&appid=demoApp_01&f=json&long=38.6300&lat=90.2000&api_key=3dqu23v7j8v4ey5wu4cvcxcj',
}).then(function(httpResponse) {
	console.log(httpResponse);
	response.success(JSON.parse(httpResponse.text));
  // success
  console.log(httpResponse.text);
},function(httpResponse) {
  // error
  console.error('Request failed with response code ' + httpResponse.status);
});
  
});
