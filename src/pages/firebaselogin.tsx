import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr0cTs97omX4LEw7IPHqURVeapfZjs78I",
  authDomain: "tv-maze-bercea.firebaseapp.com",
  databaseURL:
    "https://tv-maze-bercea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tv-maze-bercea",
  storageBucket: "tv-maze-bercea.appspot.com",
  messagingSenderId: "504150651217",
  appId: "1:504150651217:web:71ddf27c53572d699f2370",
};


firebase.initializeApp(firebaseConfig);
const FirebaseLogin = () => {
    let firebaseui = require("firebaseui");
    
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    
    ui.start("#firebaseui-auth-container", {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    // Other config options...
  });

  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, "email", "password")
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  return <>login</>;
};

export default FirebaseLogin;
