import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { TypeFieldComponent } from './type-field/type-field.component';
import { AccountFieldComponent } from './account-field/account-field.component';
import { AmountFieldComponent } from './amount-field/amount-field.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
  recordForm = this.formBuilder.group({
    type: ['entrata'],
    account: ['cassa'],
    amount: [10.00, [Validators.required, Validators.pattern('[0-9]*')]]
  });

  newRecord = {
    type: signal(''),
    account: signal(''),
    amount: signal('')
  };

  onSubmit() {
    if (this.recordForm.value.type) {
      this.newRecord.type.set(this.recordForm.value.type);
    }
    if (this.recordForm.value.account) {
      this.newRecord.account.set(this.recordForm.value.account);
    }
    if (this.recordForm.value.amount) {
      this.newRecord.amount.set(this.recordForm.value.amount.toString());
    }
  }
}
