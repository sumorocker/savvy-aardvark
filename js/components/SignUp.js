import React from 'react';

var SignUp = React.createClass({
    render() {
        return (
        	<form id= "signup">
            <h1>Sign up!</h1>
        		<p><input id="username" type= "text"/></p>
        		<p><input id="password" type= "password"/></p>
        		<p><input id="signup-submit" type= "submit"/></p>
            <p><input id="upc" type="text"/></p>
        	</form>
        )
    }
});

        	
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var Post = Parse.Object.extend("User")

$("#signup").submit(function(event){
      event.preventDefault();

      var name = $("#username").val();
      var password = $("#password").val();

      var user = new Parse.User();
      user.set("username", name);
      user.set("password", password);

      user.signUp(null, {
        success: function(user){
          console.log("success!")

        }, 
        error: function(user, error){
        console.log("Error: "+error.message)
      }
    })
});

export default SignUp;