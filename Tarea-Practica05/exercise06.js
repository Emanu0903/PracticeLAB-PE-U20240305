function calcularDescuento(categoriaCliente, totalCompra) {
    let descuento = 0;

    if (categoriaCliente === 'regular') {
        if (totalCompra >= 100) {
            descuento = 0.1; 
        }
    } else if (categoriaCliente === 'premium') {
        if (totalCompra >= 100) {
            descuento = 0.15; 
        } else {
            descuento = 0.1; 
        }
    } else if (categoriaCliente === 'vip') {
        if (totalCompra >= 100) {
            descuento = 0.2; 
        } else {
            descuento = 0.15; 
        }
    }

    const totalConDescuento = totalCompra * (1 - descuento);
    return {
        descuento,
        totalConDescuento
    };
}

const categoria = 'premium';
const total = 120;
const resultado = calcularDescuento(categoria, total);

console.log(`Descuento: ${(resultado.descuento * 100).toFixed(2)}%`);
console.log(`Total con descuento: $${resultado.totalConDescuento.toFixed(2)}`);
