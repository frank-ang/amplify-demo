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

Point to existing Cognito resources, in Amplify.configure()

https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource

TODO externalize config.

4. Use pre-built UI components and react-bootstrap

```
npm install aws-amplify-react
npm install @aws-amplify/ui-react
npm install react-bootstrap bootstrap
```

Reference:
https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#option-1-use-pre-built-ui-components

Update [src/my-aws-config.js](src/my-aws-config.js) with your environment configuration.

5. Deploy to S3 website.

The ```deploy``` target in [package.json](./package.json) calls [scripts/deploy-website.sh](./scripts/deploy-website.sh) , which syncs files to the S3 website, and invalidates the CloudFront cache. To deploy to S3 website, simply run:

```
npm run build
npm run deploy
```
