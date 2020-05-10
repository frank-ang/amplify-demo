# Amplify React

Below are notes to self on my app build process.

## 1. Create the vanilla React project.
Run and build. 
Install AWS Amplify.

```
npx create-react-app react-amplify
npm start 
npm run build
npm install aws-amplify
```

## 2. Initialize Amplify
```
amplify init
```
this creates the ```amplify``` folder.

## 3. Code the app!

1. Update App.js to auth with existing Cognito resources

Point to existing Cognito resources, in Amplify.configure()

https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource

TODO externalize config.

2. Use pre-built UI components and react-bootstrap

```
npm install aws-amplify-react
npm install @aws-amplify/ui-react
npm install react-bootstrap bootstrap
```

Reference:
https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#option-1-use-pre-built-ui-components

Update [src/my-aws-config.js](src/my-aws-config.js) with your environment configuration.

3. Setup Routing.

```
npm install react-router-dom
```

## 4. Deploy to S3 website.

The ```deploy``` target in [package.json](./package.json) calls [scripts/deploy-website.sh](./scripts/deploy-website.sh) , which syncs files to the S3 website, and invalidates the CloudFront cache. To deploy to S3 website, simply run:

```
npm run build
npm run deploy
```
## 5. setup S3 uploader

```
npm install aws-sdk
```

s3 bucket should have folder paths for "public", "protected", "private".

Update IAM policies for ID Pool roles.
