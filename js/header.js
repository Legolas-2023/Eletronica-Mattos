supabaseClient

async function carregarHeader() {
  iniciarHeader();
}
carregarHeader();

function iniciarHeader() {
  verificarUsuario(); // 🔒 protege página
  mostrarNomeUsuario();

  const btn = document.querySelector("#user");
  const cd = document.querySelector(".nav-lk");
  const cl = document.querySelector("#close");
  const logoffBtn = document.querySelector("#logoff");

  if (!btn || !cd) return; // evita erro se elementos não existirem

  // 👤 abrir/fechar menu com animação
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (cd.classList.contains("opacity-0")) {
      cd.classList.remove("opacity-0", "pointer-events-none");
      cd.classList.add("animate-fadeIn");
    } else {
      cd.classList.add("opacity-0", "pointer-events-none");
      cd.classList.remove("animate-fadeIn");
    }
  });
  
  // ❌ fechar no botão X
  cl?.addEventListener("click", () => {
    cd.classList.add("opacity-0", "pointer-events-none");
    cd.classList.remove("animate-fadeIn");
  });

  // 👆 fechar clicando fora
  document.addEventListener("click", (event) => {
    const clicouDentroMenu = cd.contains(event.target);
    const clicouNoBotao = btn.contains(event.target);

    if (!clicouDentroMenu && !clicouNoBotao) {
      cd.classList.add("opacity-0", "pointer-events-none");
      cd.classList.remove("animate-fadeIn");
    }
  });

  // 🚪 LOGOFF
  logoffBtn?.addEventListener("click", async () => {
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
  if (window.location.pathname.includes("index.html")) return;

  const { data } = await supabaseClient.auth.getUser();

  if (!data.user) {
    window.location.href = "../index.html";
  }
}

// 👤 MOSTRAR NOME DO USUÁRIO
async function mostrarNomeUsuario() {
  const { data } = await supabaseClient.auth.getUser();

  if (data.user) {
    const nome = data.user.user_metadata.display_name || "Usuário";

    const userNameElement = document.querySelector(".user-name");
    const userNameElement2 = document.querySelector(".user-name-sb");

    if (userNameElement) {
      userNameElement.textContent = nome;
    } 
    
    if (userNameElement2) {
      userNameElement2.textContent = nome;
    }
  }
}