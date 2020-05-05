import { Auth } from 'aws-amplify';

function setCurrentUserInfo() {
  Auth.currentUserInfo().then(result => {
    const value = result;
    console.log(">>>> ## setCurrentUserInfo(): " + value + ", JSON: " + JSON.stringify(value));
    sessionStorage.setItem('currentUserInfo', JSON.stringify(value));
  }); 
}

function getCurrentUserInfo() {
    const value = JSON.parse(sessionStorage.getItem('currentUserInfo'));
    console.log(">>>> ## getCurrentUserInfo(): " + JSON.stringify(value));
    return value;
}

export { setCurrentUserInfo, getCurrentUserInfo };