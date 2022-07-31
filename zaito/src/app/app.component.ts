import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'zaito';


public listadatos:any = []
constructor(private RestService:RestService){

}
filterPost='';


ngOnInit(): void{
  this.cargarData();
}
public cargarData(){
  this.RestService.get('./assets/info.json')
  .subscribe(respuesta=>{
  console.log(respuesta);
    this.listadatos= respuesta;
  })
}
}

