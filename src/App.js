import React from 'react';
import './App.css';
import Amplify, { Hub } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut, AmplifyGreetings } from '@aws-amplify/ui-react';
import awsmobile from './my-aws-config';
import Menubar from './components/Menubar';
import Home from './components/Home';
import About from './components/About';
import Feature from './components/Feature';
import RandomUser from './components/RandomUser';
import NotFound from './components/NotFound';

import { setCurrentUserInfo, getCurrentUserInfo } from './components/utils';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

Amplify.configure(awsmobile);

function Welcome(props) {
  return <h1>Hello, {props.username}</h1>;
}

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
          <Router>
              <Switch>
                  <Route exact path="/" component={Home} />} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/RandomUser" component={RandomUser} />
                  <AmplifyAuthenticator>
                    <AmplifySignUp slot="sign-up" formFields={[
                      {
                        type: "username",
                        label: "User Name",
                        required: true,
                      },
                      {
                        type: "email",
                        label: "Email",
                        required: true,
                      },
                      {
                        type: "password",
                        label: "Password",
                        required: true,
                      },
                    ]}
                    />
                    <Route exact path="/feature" component={Feature} />
                  </AmplifyAuthenticator>
                  {/* TODO NotFound page is not working */}
              </Switch>
          </Router>
        </div>
        <div id="footer">
          <hr/>
          Example ReactJS App with AWS Amplify Auth, by Frank Ang. 
          <br/>
          Server time: {new Date().toLocaleString()}
        </div>
      </div>
    );
  }
}

export default App;
