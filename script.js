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

  

  document.querySelector('#submit2').addEventListener('click',function(){
    document.getElementById("loader").style.display="block";
    document.getElementById("error").style.display="none";
    const email1 = document.querySelector('#Login-email').value 
    const password1 = document.querySelector('#Login-pass').value 

        signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
            const user = userCredential.user;
            const userId = auth.currentUser.uid;
            onValue(ref(database, '/users/' + userId), (snapshot) => {
                const username = (snapshot.val() && snapshot.val().username)
                window.localStorage.setItem("loggedin",username)               
                window.location.href='index.html'
                });
        })
        .catch((error) => {
            document.getElementById("loader").style.display="none";
            document.getElementById("error").style.display="block";
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("error-content-11").style.display="none";
            document.getElementById("error-content-12").style.display="none";
            document.getElementById("error-content-2").style.display="none";
            document.getElementById("error-content-3").style.display="none";
            document.getElementById("error-content-5").style.display="none";

                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if((email1.match(mailformat)))
                {
                }
                else
                {
                  document.getElementById("error-content-2").style.display="block";
                }
                if(!(password1=="")&&(password1.length<8))
                {
                  document.getElementById("error-content-3").style.display="block";
                }
                if(errorCode=="auth/user-not-found")
                {
                  document.getElementById("error-content-5").style.display="block";
                  document.getElementById("error-content-1").style.display="none";
                  document.getElementById("error-content-2").style.display="none";
                  document.getElementById("error-content-3").style.display="none";

                }
                if(errorCode=="auth/wrong-password")
                  {
                    document.getElementById("error-content-6").style.display="block";
                  }
                if((email1==""))
                {
                  document.getElementById("error-content-11").style.display="block";
                  document.getElementById("error-content-2").style.display="none";
                  document.getElementById("error-content-3").style.display="none";
                  document.getElementById("error-content-5").style.display="none";
                }
                if((password1==""))
                {
                  document.getElementById("error-content-12").style.display="block";
                  document.getElementById("error-content-2").style.display="none";
                  document.getElementById("error-content-3").style.display="none";
                  document.getElementById("error-content-5").style.display="none";
                }
                });
                
                /*
                
                  if(errorCode=="auth/invalid-email")
                  {
                    document.getElementById("error").style.display="block";
                    document.getElementById("error-content-1").innerHTML="Invalid email id";
                  }
                  else if(errorCode=="auth/wrong-password")
                  {
                    document.getElementById("error").style.display="block";
                    document.getElementById("error-content-1").innerHTML="Please Enter Valid Password!";
                  }
                  
                  else if(errorCode=="auth/internal-error")
                  {
                    document.getElementById("error").style.display="block";
                    document.getElementById("error-content-1").innerHTML="Please Enter Valid Password!";
                  }
                  
                      else if(errorCode=="auth/user-not-found")
                    {
                      document.getElementById("error").style.display="block";
                      document.getElementById("error-content-1").innerHTML="User Not Found you can Try Again or Signup!";
                      }
                  else
                  {
                    swal({
                      title:errorCode,
                      icon: "error",
                    });
                  }
          */
       
     
})



  
