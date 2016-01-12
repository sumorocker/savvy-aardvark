import React from "react";

var LogIn = React.createClass({
	render(){
		return(

			<form id="login">
         	<h3>Log In</h3>
          		<p><input id="login-name" type= "text"/></p>
          		<p><input id="login-password" type= "password"/></p>
          		<p><input id="login-submit" type="submit"/></p>
        	</form>

			)
	}
});

Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var Post = Parse.Object.extend("User")

 $("#login").submit(function(event){
      event.preventDefault();

      var name = $("#login-name").val();
      var password = $("#login-password").val();

      Parse.User.logIn(name, password, {
          success: function(user){
            console.log("log in successful")
          }, 
          error: function(user, error){
            console.log("Log in Error: " + error.message);
          }
        });

    });



export default LogIn;