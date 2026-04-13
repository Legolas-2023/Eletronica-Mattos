supabaseClient

let form = document.getElementById('login-form').addEventListener('submit', (event)=>{
  event.preventDefault()

  async function login() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {

      // 👇 pega usuário logado
      const { data } = await supabaseClient.auth.getUser();

      const nome = data.user.user_metadata.display_name || email;

      alert(`Usuário ${nome} logado com sucesso 👌`)

      window.location.href = "../html/menu.html"
    }
  }

  login()
})