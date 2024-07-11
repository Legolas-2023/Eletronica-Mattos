import { conectaPlacas } from "./conectaAPI.js";

const listaP = document.querySelector('[data-placas]')

function constroiCardPlacas(nome, tv, modelo, quantidade, caixa){
    const tabelaPlacas = document.createElement('tr');
    tabelaPlacas.innerHTML = ` 
                    <td>${nome}</td>
					<td>${tv}</td>
					<td>${modelo}</td>
					<td>${quantidade}</td>
					<td>${caixa}</td>
                    <td><i class="bi bi-trash-fill"></i></td>`

    return tabelaPlacas
}

async function listaPlacas(){
    const listaApiPlacas = await conectaPlacas.Placas();
    listaApiPlacas.forEach(elemento => listaP.appendChild(
    constroiCardPlacas(elemento.nome, elemento.tv, elemento.modelo, elemento.quantidade, elemento.caixa)));
}

listaPlacas()