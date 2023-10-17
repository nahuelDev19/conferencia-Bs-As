const cantidad = document.getElementById('inputCan');
const categoria = document.getElementById('inputCate');
const pantalla = document.getElementById('pantalla');

function calTotal() {
    const cantidadValor = parseFloat(cantidad.value);
    let resultadoTotal = 0;
    let descuento = 0;

    const categoriaValor = categoria.value; // Obtén el valor de la categoría seleccionada

    switch (categoriaValor) {
        case 'Estudiante':
            descuento = 0.80; // Corrige el valor del descuento
            break;
        case 'Trainee':
            descuento = 0.50;
            break;
        case 'Junior':
            descuento = 0.15; // Corrige el valor del descuento
            break;
    }

    const total = (200 * cantidadValor) * (1 - descuento);
    pantalla.value = 'Total a pagar $: ' + total.toFixed(2);
}

cantidad.addEventListener('input', calTotal);
categoria.addEventListener('change', calTotal);
