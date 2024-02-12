export default class BECurso {
    uid = 0;
    constructor({ title, description, price, duration, author, start, imageUrl, clases, Workload }) {
        this.title = title;
        this.description = description || "Descripción predeterminada";
        this.duration = duration;
        this.author = author;
        this.price = price;
        this.classes = clases;
        this.start = start;
        this.imageUrl = imageUrl;
        this.Workload = Workload || "Carga horaria";
    }
}
