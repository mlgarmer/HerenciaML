

class Empleado { 
    constructor(nombre, funcion){
        this.nombre = nombre;
        this.funcion= funcion;   
    }

    trabajoRealizado(){
        return "Yo " + this.nombre + " hago :" + this.funcion;
    }
}


var nuevoEmp = new Empleado("Cristian", "el tinto" );

console.log(nuevoEmp.trabajoRealizado());

class Jefe extends Empleado{
    constructor(nombre, funcion, colaboradores){
        super(nombre,funcion);
        this.colaboradores = colaboradores;
    }
    trabajoRealizadoJefe(){
        return "Yo " + this.nombre + " hago :" + this.funcion + " y tengo " + this.colaboradores + " colaboradores.";
    }

}

var nuevoJefe = new Jefe("Ricardo", "Dirige",8 );

console.log(nuevoJefe.trabajoRealizadoJefe());


