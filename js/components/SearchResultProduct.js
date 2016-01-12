




//Parse.Cloud.run('UPC', {search: searchInputObj}).then(function (response) {
//    console.log(response)
//    that.setState({
//        product_name: response.productsArray[0].product_name,
//        ingredients: response.productsArray[0].ingredients,
//        food_category: response.productsArray[0].food_category,
//    })
//    Parse.Cloud.run("productAdditives", {search: searchInputObj}).then(function (output) {
//        console.log(output)
//        that.setState({
//            allergens: output.allergens.map(function (allergen) {
//                if (allergen.allergen_value > 0) {
//                    return allergen.allergen_name + ', ';
//                } else {
//                    console.log("excluded allergens");
//                }
//            })
//        })
//    })
//}, function (error) {
//    console.log(error.message);
//})

//<div className="main__panel">
//    <p>Product: {this.state.product_name}</p>
//    <p>Food Category: {this.state.food_category}</p>
//    <p>Ingredients: {this.state.ingredients}</p>
//    <p>Allergens: {this.state.allergens}</p>
//</div>

