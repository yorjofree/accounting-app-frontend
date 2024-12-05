import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-field',
  imports: [ReactiveFormsModule],
  templateUrl: './account-field.component.html',
  styleUrl: './account-field.component.css'
})
export class AccountFieldComponent {
  account = new FormControl('cassa');
}
