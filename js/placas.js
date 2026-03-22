supabaseClient

const input = document.getElementById("INPUT_NOME");
const tabela = document.getElementById("table_body");

let timeout;

// 🔍 EVENTO COM DEBOUNCE
input.addEventListener("keyup", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    carregarDados(input.value);
  }, 300);
});

// 🚀 FUNÇÃO PRINCIPAL
async function carregarDados(filtro = "") {
  console.log("Buscando:", filtro);

  let query = supabaseClient
    .from('Placas')
    .select('*')
    .order('name', { ascending: true });

  // 🔎 FILTRO NO BANCO
  if (filtro) {
    query = query.ilike('name', `%${filtro}%`);
  }

  const { data, error } = await query;

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    console.error("Erro ao buscar dados:", error.message);
    return;
  }

  // 🧼 LIMPA TABELA
  tabela.innerHTML = "";

  // 📊 PREENCHE TABELA
  data.forEach(item => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.tv}</td>
      <td>${item.modelo}</td>
      <td>${item.quantidade}</td>
      <td>${item.caixa}</td>
    `;

    tabela.appendChild(tr);
  });

  // 📭 SE NÃO TIVER RESULTADO
  if (data.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding:20px;">
          Nenhum resultado encontrado 😕
        </td>
      </tr>
    `;
  }
}

// 🔄 CARREGA TUDO AO ABRIR
carregarDados();