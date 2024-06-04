export class Categoria {
    _id?: number;
    categoria: string;
    descripcion: string;

    constructor(categoria: string, descripcion: string,) {
        this.categoria = categoria;
        this.descripcion = descripcion;
    }
}
