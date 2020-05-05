import React from 'react';
import './App.css';
import Amplify, { Hub } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsmobile from './my-aws-config';
import Menubar from './components/Menubar';
import { setCurrentUserInfo, getCurrentUserInfo } from './components/utils';

Amplify.configure(awsmobile);
const currentConfig = Auth.configure();

class App extends React.Component {
  
  constructor(props) {
    super(props);
    setCurrentUserInfo();
    Hub.listen('auth', (data) => {
      setCurrentUserInfo();    
    })
  }


  render() {
    var userinfo = JSON.stringify(getCurrentUserInfo());
    // TODO: bug, sometimes userinfo displays null after successful login. Menubar also does not refresh.
    return (
      <div className="App">
        <Menubar/>
        <div>
            Sample React App with Amplify Cognito auth and react bootstrap menu.
            Date: {JSON.stringify(new Date().toLocaleDateString())}

        <AmplifyAuthenticator>
            <hr/>
            Hello, current UserInfo: {userinfo}
            <AmplifySignOut/>
        </AmplifyAuthenticator>
        </div>
        <hr/>

      </div>
    );
  }
}

export default App;
