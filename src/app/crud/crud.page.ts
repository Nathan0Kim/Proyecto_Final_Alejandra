import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
  standalone: false,
})
export class CrudPage implements OnInit {

api = 'http://localhost/api/';

  productos:any = [];

  nombre = '';
  precio = '';
  descripcion = '';

  id = 0;

  editando = false;

  constructor(private http: HttpClient) {
    this.listar();
  }

  // LISTAR

  listar() {

    this.http.get(this.api + 'listar.php')
    .subscribe((respuesta:any) => {

      this.productos = respuesta;

    });

  }

  // INSERTAR Y EDITAR

  guardar() {

    let datos = {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      descripcion: this.descripcion
    };

    if(this.editando){

      this.http.post(this.api + 'editar.php', datos)
      .subscribe(() => {

        this.limpiar();
        this.listar();

      });

    } else {

      this.http.post(this.api + 'insertar.php', datos)
      .subscribe(() => {

        this.limpiar();
        this.listar();

      });

    }

  }

  // CARGAR DATOS A FORMULARIO

  editar(producto:any){

    this.id = producto.id;
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.descripcion = producto.descripcion;

    this.editando = true;

  }

  // ELIMINAR

  eliminar(id:any){

    this.http.post(this.api + 'eliminar.php', {id:id})
    .subscribe(() => {

      this.listar();

    });

  }

  // LIMPIAR

  limpiar(){

    this.nombre = '';
    this.precio = '';
    this.descripcion = '';

    this.editando = false;

  }

  ngOnInit() {
  }

}
