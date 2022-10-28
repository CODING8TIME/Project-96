const firebaseConfig = {
      apiKey: "AIzaSyAJg_hYjoD225w6lNWQ76w3bSxP6w5yjZ4",
      authDomain: "practice-activity-b728c.firebaseapp.com",
      databaseURL: "https://practice-activity-b728c-default-rtdb.firebaseio.com",
      projectId: "practice-activity-b728c",
      storageBucket: "practice-activity-b728c.appspot.com",
      messagingSenderId: "158833084470",
      appId: "1:158833084470:web:722c5782f248de8604f097"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
