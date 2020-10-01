# Nwitter
This is a twitter-like project to learn and explore how Google Firebase works and how to use it with react app.

At the end of the project, I'd like to be more familiar with followings:
- Environtment setup for react
- Google Firebase and its documentation
- Understanding and use of noSQL
- Social logins using google/github accounts, via firebase
- Use of ES6 shorthand and spreader
- Online deployment of finished app to use as a portfolio

## Project goal
- Real-time CRUD of Nweets
- User Authentication
- User Profile page
- Upload photos via firestorage
- social login (google/github login) via firebase
- email login (email/password) via firebase
- noSQL database manipulation via firebase
- React frontend for real-time tweets

## Check out the working app!!
- This is to be implemented soon.

## Application Setup Guide

### 1. Cloning project & module installation

Clone the project with command:
```
git clone git@github.com:jpark-dev/nwitter.git <folder name>
```

Install related modules:
```
npm install --save-dev
```

Create an empty .env file in the root directory

### 2. Creating Firebase account, a new project and a new app to get credentials for firebase app.
i. You must have a google account to use firebase.

ii. Go to [firebase website](https://firebase.google.com) and register with your account by clicking 'get started' button.

iii. Once registered, go to your [firebase console](https://console.firebase.google.com/) and create a new project. Name it as 'nwitter'

iv. Once created, add a new app called 'Nwitter' and check the information under the 'Firebase SDK Snippet'.

v. Make sure to read how firebase storage works, pay attention to the pricing scheme as google may charge you for the amount of data used.

### 3. Filling empty values with credentials from firebase

Copy and paste these lines to your .env file.
```
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```
Fill .env file with the credentials obtained from above.
Make sure to omit double quotes("") for all values.

Example:

```
REACT_APP_API_KEY=B9df8wefjdkfej252515125
REACT_APP_DATABASE_URL=https://nwitter-9f1e7.fire.com
```

#### Don't forget to save!!

### 4. Starting the App
Execute `npm start` in your terminal/CLI.

This will automatically open a new window, and start the app with [http://localhost:3000](http://localhost:3000).
If it doesn't open a new browser, open [http://localhost:3000](http://localhost:3000) to view it in the browser manually.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

