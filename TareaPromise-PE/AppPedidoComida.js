function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando el pedido: ${pedido}`);

        // Simulamos el tiempo de procesamiento del pedido
        setTimeout(() => {
            // Simulamos un escenario en el que el pedido puede fallar o realizarse correctamente
            const exito = Math.random() > 0.2; // 80% de probabilidad de éxito

            if (exito) {
                resolve(`El pedido de ${pedido} ha sido realizado con éxito.`);
            } else {
                reject(`Hubo un error al procesar el pedido de ${pedido}.`);
            }
        }, 2000); // Simulamos un retraso de 2 segundos
    });
}

// Ejemplo de uso
procesarPedido("pizza")
    .then((mensajeExito) => {
        console.log(mensajeExito);
    })
    .catch((mensajeError) => {
        console.error(mensajeError);
    });
