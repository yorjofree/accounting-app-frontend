import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { TypeFieldComponent } from './type-field/type-field.component';
import { AccountFieldComponent } from './account-field/account-field.component';
import { AmountFieldComponent } from './amount-field/amount-field.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  formBuilder = inject(FormBuilder);
  recordService = inject(RecordService);
  recordForm = this.formBuilder.group({
    type: ['entrata', [Validators.required]],
    account: ['cassa', [Validators.required]],
    amount: ['10.00', [Validators.required, Validators.pattern('[0-9]+\\.?[0-9]*')]]
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
      this.newRecord.amount.set(this.recordForm.value.amount);
    }

    if (typeof this.recordForm.value.type === 'string' && typeof this.recordForm.value.account === 'string' && typeof this.recordForm.value.amount === 'string') {
      this.recordService.post({
        id: 0,
        type: this.recordForm.value.type,
        account: this.recordForm.value.account,
        amount: parseFloat(this.recordForm.value.amount),
      });
    }
    else {
      console.error('typeof error');
    }
  }
}
