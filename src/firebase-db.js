import firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyDmq-vdmuMP7LZz46ObDeoqUsqJ0-HNsmg",
    authDomain: "sanjivani-app.firebaseapp.com",
    databaseURL: "https://sanjivani-app.firebaseio.com",
    projectId: "sanjivani-app",
    storageBucket: "sanjivani-app.appspot.com",
    messagingSenderId: "971087376676"
};

const firebaseDB = firebase.initializeApp(config);

export default firebaseDB;