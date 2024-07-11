async function Placas(){
    const conexaoPlacas = await fetch('https://legolas-2023.github.io/Eletronica-Mattos/db.json?q=Placas');
    const conexaoConvertidaPlacas = await conexaoPlacas.json();
    return conexaoConvertidaPlacas
}

async function adicionarPlacas(nome, tv, modelo, quantidade, caixa){
    const conexaoPlacas = await fetch('https://legolas-2023.github.io/Eletronica-Mattos/db.json?q=Placas', {
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            tv: tv,
            modelo: modelo,
            quantidade: quantidade,
            caixa: caixa
        })
    });

    const conexaoConvertidaPlacas = await conexaoPlacas.json();
    return conexaoConvertidaPlacas;
}

export const conectaPlacas = {
    Placas,
    adicionarPlacas
}


