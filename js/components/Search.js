import React from 'react';

var Search = React.createClass({

    getInitialState() {
      return {
        product_name: [],
        allergens: [],
        nutrients: [],
        additives: [],
        food_category: [],
        ingredients: []
      }
    },
      doSearch(event) {
      event.preventDefault();
      var that = this;
      //this is bound to the context of the nearest funciton. If this is used twice within a function 
      //it has to be declared 
      var searchInputObj = this.refs.searchInput.value;

      if(!isNaN(this.refs.searchInput.value)){
        Parse.Cloud.run('UPC',{search: searchInputObj}).then(function(response){
          console.log(response)
          that.setState({
          product_name: response.productsArray[0].product_name,
          ingredients: response.productsArray[0].ingredients,
          food_category: response.productsArray[0].food_category,

        })
            Parse.Cloud.run("productAdditives",{search: searchInputObj}).then(function(output){
        console.log(output)
        that.setState({
          allergens: output.allergens.map(function(allergen){
            if(allergen.allergen_value > 0){
            return allergen.allergen_name +', ';
          }else{
            console.log("excluded allergens");
          }
          })
        })
      })

      },function(error){
        // console.log(error);
      })
     
    }else{

        var searchInputObj = this.refs.searchInput.value;
        var res = searchInputObj.replace(' ', '+');
        Parse.Cloud.run('productName',{search: res}).then(function(response){
        console.log(response)
        that.setState({
          product_name: response.productsArray.map(function(products){
            return products.product_name + ', ';
          })

        })

      },function(error){
        // console.log(error);
      })
  }
}
    ,
    render : function() {
        return (
            <div>
            <form className="ingredientSearch" ref= "Searching" onSubmit= {this.doSearch}>

                <h2>Search</h2>
                <p><input ref="searchInput" type="text"/></p>
                <p>Product:{this.state.product_name}</p>
                <p>Food Category: {this.state.food_category}</p>
                <p>Ingredients: {this.state.ingredients}</p>
                <p>Allergens: {this.state.allergens}</p>
                <p><input ref="search" type= "submit"/></p>

            </form>         
          </div>
        )
    }
});

export default Search;