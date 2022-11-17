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
    document.getElementById("loader").style.display="block";
    document.getElementById("error-signup").style.display="none";
    const userName = document.querySelector('#uname').value 
    const email = document.querySelector('#email').value 
    const password = document.querySelector('#password').value 
    const retypepass=document.querySelector('#retype-pass').value
    let eflags=1,pflags=1;
    let not_empty=true;
    document.getElementById("error-content-11").style.display="none";
    document.getElementById("error-content-12").style.display="none";
    document.getElementById("error-content-13").style.display="none";
    document.getElementById("error-content-14").style.display="none";
    document.getElementById("error-content-01").style.display="none";
    document.getElementById("error-content-2").style.display="none";
    document.getElementById("error-content-3").style.display="none";
    document.getElementById("error-content-03").style.display="none";
    document.getElementById("error-content-4").style.display="none";
    document.getElementById("error-content-5").style.display="none";
    document.getElementById("error-content-6").style.display="none";
    

    if(userName=="")
    { 
      document.getElementById("loader").style.display="none";
      document.getElementById("error-signup").style.display="block";
      document.getElementById("error-content-11").style.display="block";
      not_empty=false;
    }
    else
    {
      eflags=0;
      not_empty=true;
    }
    if((email==""))
    {
      document.getElementById("loader").style.display="none";
      document.getElementById("error-signup").style.display="block";
      document.getElementById("error-content-2").style.display="none";
      document.getElementById("error-content-12").style.display="block";
      not_empty=false;
    }
    else
    {
      eflags=0;
      not_empty=true;
    }
    if((password==""))
    {
      document.getElementById("loader").style.display="none";
      document.getElementById("error-signup").style.display="block";
      document.getElementById("error-content-13").style.display="block";
      document.getElementById("error-content-03").style.display="none";
      not_empty=false;
    }
    else
    {
      not_empty=true;
    }
    if((retypepass==""))
    {
      document.getElementById("loader").style.display="none";
      document.getElementById("error-signup").style.display="block";
      document.getElementById("error-content-14").style.display="block";
      document.getElementById("error-content-6").style.display="none";
      not_empty=false;
    }
    else
    {
      not_empty=true;
    }
    if(not_empty==true)
    {
      if((!userName=="")&&(userName.length<5))
      {
        document.getElementById("loader").style.display="none";
        document.getElementById("error-signup").style.display="block";
        document.getElementById("error-content-01").style.display="block";
      }
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      if((email.match(mailformat)))
      {
        eflags=0;
      }
      else
      {
        document.getElementById("loader").style.display="none";
        document.getElementById("error-signup").style.display="block";
        document.getElementById("error-content-2").style.display="block";
        eflags=1;
      }
    
      if(password.match(/[a-z]/g) && password.match(
      /[A-Z]/g) && password.match(
      /[0-9]/g) && password.match(
      /[^a-zA-Z\d]/g) )
      {
        document.getElementById("error-content-03").style.display="none";
        pflags=0;
      }
      else{
        document.getElementById("loader").style.display="none";
        document.getElementById("error-signup").style.display="block";
        document.getElementById("error-content-03").style.display="block";
        pflags=1;
      }
      if(!(password=="")&&(password.length<8))
      {
        document.getElementById("loader").style.display="none";
        document.getElementById("error-signup").style.display="block";
        document.getElementById("error-content-3").style.display="block";
        pflags=1;
      }
      else{pflags=0}
      if(password.length>15)
      {
        document.getElementById("loader").style.display="none";
        document.getElementById("error-signup").style.display="block";
        document.getElementById("error-content-4").style.display="block";
      }
      else{pflags=0}
      if((password!=retypepass))
      {
        document.getElementById("loader").style.display="none";
        document.getElementById("error-signup").style.display="block";
        document.getElementById("error-content-6").style.display="block";
        pflags=1;
      }
      else{pflags=0}
      
      if((eflags==0)&&(pflags==0))
      {
          document.getElementById("loader").style.display="none";
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
                    set(ref(database, 'users/' + user.uid),{
                        username: userName,
                        email: email
                    })
              swal({
                title:"Account has been created, Login with email,password",
                icon: "success",
              });
                })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              document.getElementById("loader").style.display="none"; 
                  
              if(errorCode=="auth/email-already-in-use")
              {
                document.getElementById("error-signup").style.display="block"; 
                document.getElementById("error-content-5").style.display="block";
                document.getElementById("error-content-1").style.display="none";
                document.getElementById("error-content-2").style.display="none";
                document.getElementById("error-content-3").style.display="none";
                document.getElementById("error-content-4").style.display="none";
                document.getElementById("error-content-6").style.display="none";
              }
            });
          }
    }
  })
 
 

  
  
