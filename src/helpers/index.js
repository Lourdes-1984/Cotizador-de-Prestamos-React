const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:'USD'
    })
    return formatter.format(valor)
}

const totalDinero = (cantidad, plazo) => {
    let total 

    //mientras mayor es la cantidad , menos es el interes
    if (cantidad < 50000) {
        total = cantidad * 1.5
    }else if(cantidad >= 50000 && cantidad < 70000){
        total = cantidad * 1.3
    }
    else if(cantidad >= 70000 && cantidad < 100000){
        total = cantidad * 1.4
    }
    else {
        total = cantidad * 1.2
    }
       //palzo - mas plazo, mayor interes
    if (plazo === 6) {
        total *= 1.1
    }else if(plazo === 12){
        total *= 1.2
    }else{
        total *= 1.3
    }
    return total;
}
export{
    formatearDinero,
    totalDinero
}