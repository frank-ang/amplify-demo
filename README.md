# Amplify React

1. Create the vanilla React project.
Run and build. 
Install AWS Amplify.

```
npx create-react-app react-amplify
npm start 
npm run build
npm install aws-amplify
```

2. Initialize Amplify
```
amplify init
```
this creates the ```amplify``` folder.

3. Update App.js to auth with existing Cognito resources

Point to your Existing Amplify.configure()

https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource

4. Use pre-built UI components


```
npm install aws-amplify @aws-amplify/ui-react
```

Update App.js

https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#option-1-use-pre-built-ui-components
