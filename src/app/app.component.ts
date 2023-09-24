import { Component } from '@angular/core';
import {Libros} from './models/libros'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcrud';
  LibrosArray:Libros[]=[
    {id: 1, name:"El principito", autor:"no je",date:"10/10/2001",state:"Disponible" },
    {id: 2, name:"Don quijote", autor:":v",date:"10/10/2003",state:"Dañado" },
    {id: 3, name:"Diccionario Español", autor:"añskdj",date:"10/10/2021",state:"Perdido" },
    {id: 4, name:"Harry potter", autor:"xd",date:"10/10/2005",state:"Prestado" },
    
  ];
binding: any;

  selectedLibros: Libros =new Libros();

  addorEdit(){
    if(this.selectedLibros.id===0){
      this.selectedLibros.id=this.LibrosArray.length+1;
      this.LibrosArray.push(this.selectedLibros);
    }
    this.selectedLibros=new Libros();
  }

  openForEdit(Libros: Libros){
    this.selectedLibros=Libros;
  }

  delete(){
    if (confirm('Are you sure that you want to delete it?')){
      this.LibrosArray=this.LibrosArray.filter(i=>i!=this.selectedLibros);
      this.selectedLibros=new Libros;
    }
    
  }
}

