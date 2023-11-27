import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferrableviewComponent } from '../deferrableview/deferrableview.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [CommonModule, DeferrableviewComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

  public isCheckedDefer: boolean

  constructor() {
    this.isCheckedDefer = false
  }  

  updateCheckboxState(checked: boolean){
    this.isCheckedDefer = checked
  }
}
