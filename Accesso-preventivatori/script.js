// Password da usare per accedere alla pagina
const passwordCorretta = "preventivo123"; // Modifica a tuo piacere

// Funzione per login
function login() {
  const pw = document.getElementById('password').value;
  if (pw === passwordCorretta) {
    sessionStorage.setItem("autenticato", "true");
    localStorage.setItem("accesso_consentito", "ok"); // ✅ Autorizza Gipo
    localStorage.setItem("accessoMioDottore", "ok"); // ✅ Autorizza MioDottore
    mostraContenuto();
  } else {
    document.getElementById('errorMsg').innerText = "Password errata!";
  }
}

// Funzione che mostra il contenuto se autenticato
function mostraContenuto() {
  const loginForm = document.getElementById('login');
  const contenuto = document.getElementById('links');

  if (loginForm) loginForm.style.display = 'none';
  if (contenuto) contenuto.style.display = 'flex';
}

// Controlla se l’utente è già autenticato
if (sessionStorage.getItem("autenticato") === "true") {
  document.addEventListener("DOMContentLoaded", mostraContenuto);
}

// Disabilita il tasto destro del mouse
document.addEventListener('contextmenu', event => event.preventDefault());
