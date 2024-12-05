import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-amount-field',
  imports: [ReactiveFormsModule],
  templateUrl: './amount-field.component.html',
  styleUrl: './amount-field.component.css'
})
export class AmountFieldComponent {
  amount = new FormControl(10);
}
