import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase ,set,ref,update,get,onValue} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {  signInWithEmailAndPassword ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD84LTblW4RWGXRwpBx0JRbqSxF6EElig0",
    authDomain: "fir-project-d0b64.firebaseapp.com",
    projectId: "fir-project-d0b64",
    storageBucket: "fir-project-d0b64.appspot.com",
    messagingSenderId: "9116300691",
      appId: "1:9116300691:web:f624f2d27cf6a99f026466",
    measurementId: "G-ERXESC5DQZ"
   };
   
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  document.querySelector('#submit1').addEventListener('click',function(){
    const userName = document.querySelector('#uname').value 
    const email = document.querySelector('#email').value 
    const password = document.querySelector('#password').value 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
            set(ref(database, 'users/' + user.uid),{
                username: userName,
                email: email
            })
      console.log(userName)
      swal({
        title:"Account has been created, Login with email,password",
        icon: "success",
      });
          })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal({
        title: errorCode,
        icon: "error",
      });
    });
  })
 
  
  
