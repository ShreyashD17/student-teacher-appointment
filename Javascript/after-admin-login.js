import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHq1TslGwTYAZcA3iFVgBQfORwyppu-hk",
    authDomain: "student-teacher-appointm-33b6b.firebaseapp.com",
    databaseURL: "https://student-teacher-appointm-33b6b-default-rtdb.firebaseio.com",
    projectId: "student-teacher-appointm-33b6b",
    storageBucket: "student-teacher-appointm-33b6b.appspot.com",
    messagingSenderId: "329940925787",
    appId: "1:329940925787:web:0f9e4ff951693751ee6e7e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const name = document.getElementById("name");
  const subject = document.getElementById("subject");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const btn = document.getElementById("submitBtn");
  const form = document.getElementById("add-teacher");

  btn.addEventListener("click", function(e){
    console.log(name.value);
    console.log("clicked")
    e.preventDefault();
        set(ref(db, `Teachers/${name.value}`),
             {
              Teacher_Name: name.value,
              Subject: subject.value,
              Email: email.value,
              Password: pass.value
             });
          alert("Added Sucessfully !");
    form.reset();
  })
