/* eslint-disable */

const awsmobile = {
    "aws_project_region": "ap-southeast-1",
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        // identityPoolId: 'ap-southeast-1:2062865f-00fe-4d45-bd00-6e4a66eee185',
        
        // REQUIRED - Amazon Cognito Region
        region: 'ap-southeast-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        // identityPoolRegion: 'ap-southeast-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ap-southeast-1_x26Zxp13y',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '68hgnamntu0p592oj18gp0q83o',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
        
        // TODO: configure cookie storage?
        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        /*cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: 'localhost', // '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            secure: false
        },*/

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',
    },
    API: {
        endpoints: [
            {
                name: "hello",
                endpoint: "https://gvx5s2j457.execute-api.ap-southeast-1.amazonaws.com"
            }
        ]
    }
};

// Replace with your API configurations
const appconfig = {
    hello_public_api_endpoint: "https://or76vnrunc.execute-api.ap-southeast-1.amazonaws.com/dev/hello",
    hello_private_api_endpoint: "https://or76vnrunc.execute-api.ap-southeast-1.amazonaws.com/dev/hello/private",
};

export default awsmobile;
export { appconfig };
