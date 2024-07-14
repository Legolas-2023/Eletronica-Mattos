async function Placas(){
    const conexaoPlacas = await fetch('https://api.npoint.io/73c9bbfe60607761b225/Placas');
    const conexaoConvertidaPlacas = await conexaoPlacas.json();
    return conexaoConvertidaPlacas
}

export const conectaPlacas = {
    Placas,
}


