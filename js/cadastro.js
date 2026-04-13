supabaseClient

let form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  inserirPlaca();
});

async function inserirPlaca() {

  const name = document.getElementById('name');
  const modelo = document.getElementById('modelo');
  const tv = document.getElementById('tv');
  const quantidade = document.getElementById('quantidade');
  const caixa = document.getElementById('caixa');

  const dados = {
    name: name.value.toUpperCase(),
    modelo: modelo.value.toUpperCase(),
    tv: tv.value.toUpperCase(),
    quantidade: Number(quantidade.value),
    caixa: caixa.value
  };

  const { data, error } = await supabaseClient
    .from('Placas')
    .insert([dados])
    .select();

  console.log('DATA:', data)
  console.log('ERROR:', error)

  // ❌ ERRO
  if (error) {
    alert("❌ Erro ao cadastrar!\nVerifique os dados ou tente novamente.");
    console.error(error.message);
    return;
  }

  // ✅ SUCESSO
  alert("✅ Placa cadastrada com sucesso!");

  // 🧼 LIMPAR CAMPOS
  name.value = "";
  modelo.value = "";
  tv.value = "";
  quantidade.value = "";
  caixa.value = "";

  // 🔁 Focar no primeiro campo (UX melhor)
  name.focus();
}