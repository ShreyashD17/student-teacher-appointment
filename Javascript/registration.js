// Firebase Code

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHq1TslGwTYAZcA3iFVgBQfORwyppu-hk",
    authDomain: "student-teacher-appointm-33b6b.firebaseapp.com",
    projectId: "student-teacher-appointm-33b6b",
    storageBucket: "student-teacher-appointm-33b6b.appspot.com",
    messagingSenderId: "329940925787",
    appId: "1:329940925787:web:0f9e4ff951693751ee6e7e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  var firstName = document.getElementById("fname")
  var rollno = document.getElementById("roll")
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  const form = document.querySelector(".form")

//   form.addEventListener("submit", submitForm);

 window.signup = function (e){
    console.log("clicked")
    e.preventDefault();
    
    // var firstName = getInputVal("fname");
    // var lastName = getInputVal("lname");
    // var email = getInputVal("email");
    // var pass = getInputVal("password");

    var obj = {
        FirstName: firstName.value,
        Rollno: rollno.value,
        EmailID: email.value,
        Password: password.value
    }

    form.reset();

    createUserWithEmailAndPassword(auth, obj.EmailID, obj.Password)
  .then(() => {
    // alert("SignUp Complete")
    //   enable alert
    document.querySelector(".reg-alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".reg-alert").style.display = "none";
  }, 2000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
    alert("Error occured" + errorCode + errorMessage)
  });

  console.log(obj);

  }
