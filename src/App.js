import React from 'react';
import './App.css';
import Amplify, { Hub } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifyGreetings } from '@aws-amplify/ui-react';
import awsmobile from './my-aws-config';
import Menubar from './components/Menubar';
import { setCurrentUserInfo, getCurrentUserInfo } from './components/utils';

Amplify.configure(awsmobile);

class App extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("App constructor(), props:" + JSON.stringify(props));
    setCurrentUserInfo();
    this.state = { username: getCurrentUserInfo()!=null ? getCurrentUserInfo().username : null };
    Hub.listen('auth', (data) => {
      setCurrentUserInfo();
      console.log("## App: received auth event: " + JSON.stringify(data.payload.event));
      if (data.payload.event === "signIn") {
          this.setState({ username: data.payload.data.username});
      } else if (data.payload.event === "signOut") {
          this.setState({ username: null });
      }
    });
  }

  render() {
    var username = this.state.username;
    return (
      <div className="App">
        <Menubar/>
        <div>
          Sample React App with Amplify Cognito auth and react bootstrap menu.
          Date: {new Date().toLocaleString()}
          <hr/>
          <AmplifyAuthenticator>
              Hello: { username }
              <AmplifySignOut/>

          </AmplifyAuthenticator>
        </div>
      </div>
    );
  }
}

export default App;
