
  const firebaseConfig = {
    apiKey: "AIzaSyCjkZjUsvNMNvPUpz0IFOlD9yOIQh5An6I",
    authDomain: "banco-de-dados-4-c3c81.firebaseapp.com",
    databaseURL: "https://banco-de-dados-4-c3c81-default-rtdb.firebaseio.com",
    projectId: "banco-de-dados-4-c3c81",
    storageBucket: "banco-de-dados-4-c3c81.appspot.com",
    messagingSenderId: "371496096647",
    appId: "1:371496096647:web:5ddf16e82190f83bfff922",
    measurementId: "G-Y12DV1TMNB"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


   //Utilize o código 'getItem' para pegar um item dentro do localStorage
   user_name = localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name")
   //Utilize o código 'innerHTML' para mudar o conteúdo HTML
   //Utilize a variável que guarda o nome do usuário
   document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
   
   function addroom()
   {
     room_name = document.getElementById("room_name").value;
   
     firebase.database().ref("/").child(room_name).update({
       purpose : "adicionar sala"
     });
   
       localStorage.setItem("room_name", room_name);
       //Código que muda de tela
       window.location = "kwitter_page.html";
   }
   
   function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
     });
   
   }
   
   getData();
   
   function redirectToRoomName(name)
   {
 
     localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
   }
   
   function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
       window.location = "index.html";
   }