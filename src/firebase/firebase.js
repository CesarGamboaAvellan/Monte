import firebase from 'firebase';

const config = {
    apiKey: ' AIzaSyCXEyMlNcS3pHTfqGvVAtbFMPTEr8W0lXc',
    authDomain: 'launcherrocket-c3000.firebaseapp.com',
    databaseURL: 'https://launcherrocket-c3000.firebaseio.com/',
    projectId: 'curious-sandbox-196209',
    storageBucket: '',
    messagingSenderId: '1034032747860'
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
    auth,
    database,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};
