import { Component, computed, inject, viewChild } from '@angular/core';
import { TypeFieldComponent } from './type-field/type-field.component';
import { AccountFieldComponent } from './account-field/account-field.component';
import { AmountFieldComponent } from './amount-field/amount-field.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [TypeFieldComponent, AccountFieldComponent, AmountFieldComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  typeField = viewChild(TypeFieldComponent);
  typeValue = computed(() => this.typeField()?.typeValue());
  typeTest = 10;

  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    type: ['entrata'],
    account: ['cassa'],
    amount: [10.00]
  });
}
