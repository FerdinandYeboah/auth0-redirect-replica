import React from 'react';
import { useAuth0 } from "../../utils/react-auth0-spa";

export default function Home() {
  // POC FOR Auth0 code swallow issue.

  //Use auth
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  function callBackendRedirect(){
    //Make fetch call to server which issues a 302 with its own code in query.
    fetch('http://localhost:3001/redirect', {redirect: 'follow'})
      .then((response) => {
        
      })
  }

  //Return dashboard or signup depending on authenication
  if (!loading){
    if (isAuthenticated){
      return(
        <div>
          <h1>Signed In</h1>
          {/* <button onClick={callBackendRedirect}>Test Redirect</button> */}
        </div>
      ) 
    }
    else {
      return (
        <div>
          <h1>Need to Sign In</h1>
          <button onClick = {() => loginWithRedirect({})}>Sign In</button>
        </div>
      );
    }
  }
  else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

}



// What I've learned about react functional components. 