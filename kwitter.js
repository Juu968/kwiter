
function addUser() {

  userName = document.getElementById("userName").value;
// Armazenado local do navegador
// Variavel que guarda o nome do usuário
  localStorage.setItem("user_name", userName);
  //Código que muda de tela
  window.location = "kwitterRoom.html";
}

