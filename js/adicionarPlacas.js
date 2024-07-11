import { conectaPlacas} from "./conectaAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function adicionarPlacas(evento){
    
    evento.preventDefault()
    const nome = document.querySelector('[data-nome').value;
    const tv = document.querySelector('[data-tv').value;
    const modelo = document.querySelector('[data-modelo').value;
    const quantidade = document.querySelector('[data-quantidade').value;
    const caixa = document.querySelector('[data-caixa]').value;

    await conectaPlacas.adicionarPlacas(nome, tv, modelo, quantidade, caixa);

    window.alert("Envio Concluído");
    
}

formulario.addEventListener("submit", evento => adicionarPlacas(evento));