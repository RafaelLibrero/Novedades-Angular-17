import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-condicionales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './condicionales.component.html',
  styleUrl: './condicionales.component.css'
})
export class CondicionalesComponent {

  public statusDirectiva!: boolean
  public statusNueva!: boolean
  public edad!: number
  public selectedOption!: string

  cambiarStatusDirectiva(){
    if(this.statusDirectiva == true){
      this.statusDirectiva = false
    } else {
      this.statusDirectiva = true
    }
  }

  cambiarStatusNueva(){
    if(this.statusNueva == true){
      this.statusNueva = false
    } else {
      this.statusNueva = true
    }
  }
}
