import { Component } from '@angular/core';
import { TypeFieldComponent } from './type-field/type-field.component';
import { AccountFieldComponent } from './account-field/account-field.component';
import { AmountFieldComponent } from './amount-field/amount-field.component';

@Component({
  selector: 'app-form',
  imports: [TypeFieldComponent, AccountFieldComponent, AmountFieldComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
