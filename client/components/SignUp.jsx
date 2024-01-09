import React from 'react';
import "../style/style.css"

// Remember that this button will redirect to localhost8080/signUp
function SignUpButton() {


    
    return (
     <button 
     className='signUpButton'
     // When user clicks this, give the user the html page (On click will do a get request to the server)
     onClick={() => alert('Going to sign up for Energy Life Pakage! (Page Loading...)')}
     >
             Sign Up
     </button>
 )
};

export default SignUpButton;