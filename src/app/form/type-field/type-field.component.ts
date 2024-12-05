import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-type-field',
  imports: [ReactiveFormsModule],
  templateUrl: './type-field.component.html',
  styleUrl: './type-field.component.css'
})
export class TypeFieldComponent {
  type = new FormControl('entrata');
}
