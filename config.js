import firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhw69_JXxtfA1Z5o5HRRpxS0LhlZqjiGE",
    authDomain: "story-hub-6b1b6.firebaseapp.com",
    projectId: "story-hub-6b1b6",
    storageBucket: "story-hub-6b1b6.appspot.com",
    messagingSenderId: "203509536669",
    appId: "1:203509536669:web:c7a0829d78c866ff884174"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()