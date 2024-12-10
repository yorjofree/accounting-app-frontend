import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-type-field',
  imports: [ReactiveFormsModule],
  templateUrl: './type-field.component.html',
  styleUrl: './type-field.component.css'
})
export class TypeFieldComponent {
  type = new FormControl('entrata');
  typeValue = signal(this.type.value);

  updateType() {
    this.typeValue.set(this.type.value);
    this.type.setValue('new value');
  }
}
