import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html'
})
export class AgregarProductoComponent implements OnInit {
    producto: Producto = new Producto();

  constructor(private productoServicio: ProductoService,
    private enrutador: Router) { }

    onSubmit(){
      this.guardarProducto();
    }
    guardarProducto(){
      this.productoServicio.agregarProducto(this.producto).subscribe(
        {
          next:(datos) =>{
            this.irListaProducto();
          },
          error:(error:any) =>{console.log(error)}
        }
      );
    }
    irListaProducto(){
      this.enrutador.navigate(['/productos']);
    }
  ngOnInit(): void {
  }

}
