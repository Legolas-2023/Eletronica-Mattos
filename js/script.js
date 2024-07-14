function myFunction() {
    // Declaração das variaveis
    let td, i, txtValue;
  
    const input = document.getElementById("INPUT_NOME");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("myTable");
    const tr = table.getElementsByTagName("tr");
  
    // Percorra todas as linhas da tabela, e oculta aquelas que não correspondem à consulta de pesquisa
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }