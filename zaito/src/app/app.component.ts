import { Component } from '@angular/core';
import { RestService } from './rest.service';
import data from 'src/assets/info.json'

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

