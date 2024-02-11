export default class BECurso {
    constructor(title, description, autora, precio, duracion, inicio, imageUrl) {
        this.title = title;
        this.description = description;
        this.author = autora;
        this.price = precio;
        this.duracion = duracion;
        this.start = inicio;
        this.image = imageUrl; // Agregar una propiedad para la URL de la imagen
    }
}
