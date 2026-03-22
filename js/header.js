supabaseClient


async function carregarHeader() {
  try {
    const response = await fetch("/data/header.html");
    if (!response.ok) throw new Error("Erro ao carregar o header");

    const html = await response.text();
    document.getElementById("header").innerHTML = html;

    iniciarHeader();
  } catch (err) {
    console.error(err);
  }

}

carregarHeader();




function iniciarHeader() {

  verificarUsuario(); // 🔒 protege página

  mostrarNomeUsuario();

  let btn = document.querySelector('#user');
  let cd = document.querySelector('.nav-lk');
  let cl = document.querySelector('#close');
  let logoffBtn = document.querySelector('#logoff');

  // 👤 abrir menu
  btn.addEventListener('click', (event)=>{
    event.preventDefault();
    event.stopPropagation();
    cd.classList.toggle('aparecer');
  });

  // ❌ fechar no botão X
  cl.addEventListener('click', (event)=>{
    event.preventDefault();
    cd.classList.remove('aparecer');
  });

  // 👆 fechar clicando fora
  document.addEventListener('click', (event) => {
    const clicouDentroMenu = cd.contains(event.target);
    const clicouNoBotao = btn.contains(event.target);

    if (!clicouDentroMenu && !clicouNoBotao) {
      cd.classList.remove('aparecer');
    }
  });

  // 🚪 LOGOFF
  logoffBtn.addEventListener('click', async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      alert("Erro ao sair!");
      console.error(error.message);
      return;
    }

    alert("Saiu com sucesso 👋");

    window.location.href = "../index.html";
  });
}

// 🔒 VERIFICA USUÁRIO
async function verificarUsuario() {

  // evita rodar na tela de login
  if (window.location.pathname.includes("index.html")) return;

  const { data } = await supabaseClient.auth.getUser();

  if (!data.user) {
    window.location.href = "../index.html";
  }
}

async function mostrarNomeUsuario() {
  let{ data } = await supabaseClient.auth.getUser();

  if (data.user) {
    let nome = data.user.user_metadata.display_name || "Usuário";

    let userNameElement = document.querySelector(".user-name");
    let userNameElement2 = document.querySelector(".user-name-sb");

    if (userNameElement) {
      userNameElement.textContent = nome;}
    else if(userNameElement2){}
      userNameElement2.textContent = nome;
    }
  }