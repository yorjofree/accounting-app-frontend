import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-type-field',
  imports: [],
  templateUrl: './type-field.component.html',
  styleUrl: './type-field.component.css'
})
export class TypeFieldComponent {
  type = new FormControl('entrata');
}
