async function Placas(){
    const conexaoPlacas = await fetch('https://eletronica-mattos-db-json.vercel.app/db.json/Placas');
    const conexaoConvertidaPlacas = await conexaoPlacas.json();
    return conexaoConvertidaPlacas
}

async function adicionarPlacas(nome, tv, modelo, quantidade, caixa){
    const conexaoPlacas = await fetch('https://eletronica-mattos-db-json.vercel.app/db.json/Placas', {
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


