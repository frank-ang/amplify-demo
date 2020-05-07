import React from 'react'
import { appconfig } from '../my-aws-config'

// Calls API Gateway
class Hello extends React.Component {
    constructor(){
      super();
      this.state = {
        response: ''
      };
      // fix the this value
      this.getHello = this.getHello.bind(this);
    }
  
    componentWillMount() {
      this.getHello();
    }
    
    getHello() {
      fetch(appconfig.apiurl)
      .then(response => {
        if(response.ok) return response.text();
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState({
          response: data
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
  
    render() {
      return (
      <div>
            <h1>Hello</h1>
            <h2>{`${this.state.response}`}</h2>
            <button onClick={this.getHello}>Call hello again.</button>
      </div>
      );
    }
}

export default Hello