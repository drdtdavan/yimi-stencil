import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { IUser } from "../interfaces/user";
export class DB {
  static db: firebase.firestore.Firestore;

   static init() {
    let FIREBASE_CONFIG = {
      apiKey: "AIzaSyAKNXfgIH5O82jNFw7UFS-umPvjt4u_5us",
      authDomain: "yimikusasa.firebaseapp.com",
      databaseURL: "https://yimikusasa.firebaseio.com",
      projectId: "yimikusasa",
      storageBucket: "yimikusasa.appspot.com",
      messagingSenderId: "426917757022"
    };
    firebase.initializeApp(FIREBASE_CONFIG);
    this.db = firebase.firestore();
  }
  static getUsers(): Promise<firebase.firestore.QuerySnapshot> {
    return this.db.collection("users").get();
  }
  static updateUser(user: IUser) {
    this.db
      .collection("users")
      .doc(user.uid)
      .set(user)
      .then(() => console.log("Document successfully written!"))
      .catch(error => console.error("Error writing document: ", error));
  }
  static authState(){return firebase.auth()}
  static signInGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log("​Database -> signIn -> token", token);

        // The signed-in user info.
        var user = result.user;
        console.log("​Database -> signIn -> user", user);
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log("​Database -> signIn -> errorCode", errorCode);
        var errorMessage = error.message;
        console.log("​Database -> signIn -> errorMessage", errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log("​Database -> signIn ->  email", email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("​Database -> signIn ->  credential", credential);
        // ...
      });
  }
  static signIn(email:string,password:string):Promise<any> {
     return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      
  }
  static getTopics():Promise<firebase.firestore.QuerySnapshot>{
    console.log("gettopics"); 
    return this.db.collection('topics-All').get();
  }
}
