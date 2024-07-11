async function Placas(){
    const conexaoPlacas = await fetch('https://api.npoint.io/73c9bbfe60607761b225/Placas/0');
    const conexaoConvertidaPlacas = await conexaoPlacas.json();
    return conexaoConvertidaPlacas
}

async function adicionarPlacas(nome, tv, modelo, quantidade, caixa){
    const conexaoPlacas = await fetch('https://api.npoint.io/73c9bbfe60607761b225/Placas/0', {
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


