var firebaseConfig = {
    apiKey: "AIzaSyBVZrlHIEZkvUk029zEFYVdYdUgikuR1lg",
    authDomain: "let-s-chat-a490b.firebaseapp.com",
    databaseURL: "https://let-s-chat-a490b-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-a490b",
    storageBucket: "let-s-chat-a490b.appspot.com",
    messagingSenderId: "243606495535",
    appId: "1:243606495535:web:f781237dc4a2d7454c81da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
    function addRoom() {   room_name = document.getElementById("room_name").value;  
      firebase.database().ref("/").child(room_name).update({     purpose : "adding room name"   });
      localStorage.setItem("room_name", room_name);     
           window.location = "chat_page.html";
         }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);    
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";   
           document.getElementById("output").innerHTML += row;  
           }); 
          }); 
         }  
         getData(); 
          function redirectToRoomName(name) {   console.log(name);  
             localStorage.setItem("room_name", name);  
                window.location = "chat_page.html"; 
            }
    //End code
function logout() 
{ localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name");     
window.location = "index.html";}