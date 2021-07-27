import React from "react";

import "./App.css";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import Auth from "@aws-amplify/auth";

Auth.configure(awsconfig);

function App() {
  Auth.currentSession().then((data) =>
    console.log(data.getAccessToken().getJwtToken())
  );

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2></h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
