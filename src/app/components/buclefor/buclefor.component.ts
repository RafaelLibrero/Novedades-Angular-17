import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buclefor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buclefor.component.html',
  styleUrl: './buclefor.component.css'
})
export class BucleforComponent {

  public nombres: Array<string>

  constructor() {
    this.nombres = ["Alvaro", "Cesar", "Pedro", "Alberto", "Daniel"]
  }

  rellenarNombres(){
    this.nombres = ["Alvaro", "Cesar", "Pedro", "Alberto", "Daniel"]
  }

  vaciarNombres(){
    this.nombres = []
  }
}
