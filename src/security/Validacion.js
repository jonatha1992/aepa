function validarNumeroTelefono(numeroTelefono) {
    let regex = /^\d+$/;
    return regex.test(numeroTelefono);
}