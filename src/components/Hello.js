import React from 'react'
import { appconfig } from '../my-aws-config'
import API from '@aws-amplify/api';
import { Auth } from 'aws-amplify';

API.configure();

// Calls API Gateway
class Hello extends React.Component {
    constructor(){
      super();
      this.state = {
        public_response: '',
        private_response: ''
      };
      // fix the this value
      this.getHello = this.getHello.bind(this);
      this.getHelloAuthenticated = this.getHelloAuthenticated.bind(this);

    }
  
    componentWillMount() {
      this.getHello();
      this.getHelloAuthenticated();
    }

    async componentDidMount() {
      const session = await Auth.currentSession();
      this.setState({ authToken: session.accessToken.jwtToken });
      this.setState({ idToken: session.idToken.jwtToken });
    }  

    getHello() {
      const requestOptions = {
        method: 'GET',
        mode: 'cors'
      };
      fetch(appconfig.hello_public_api_endpoint,requestOptions)
      .then(res => res.json()).then((response) => {
        this.setState({
          public_response: response.message
        });
      })
      .catch(error => {
        console.error(error);
      });
    }

    getHelloAuthenticated() {
      console.debug("## getHelloAuthenticated...");
      const options = {
        method: 'GET',
        mode: 'cors', 
        headers: {
          Authorization: this.state.idToken,
        }
      };

      fetch(appconfig.hello_private_api_endpoint, options)
      .then(res => res.json()).then((response) => {
        console.log("## getHelloAuthenticated response:" + JSON.stringify(response));
        this.setState({
          private_response: response.message,
        });
      })
      .catch(error => {
        console.error(error);
        console.error(error.response);
      });
    }

    render() {
      return (
      <div>
            <h1>Hello (Public API)</h1>
            <h2>{`${this.state.public_response}`}</h2>
            <button onClick={this.getHello}>Call hello again.</button>

            <h1>Hello (Private API)</h1>
            <h2>{`${this.state.private_response}`}</h2>
            <button onClick={this.getHelloAuthenticated}>Call private hello again.</button>
      </div>
      );
    }
}

export default Hello