import { Component } from '@angular/core';
import { RecordComponent } from '../record/record.component';

@Component({
  selector: 'app-record-list',
  imports: [RecordComponent],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.css'
})
export class RecordListComponent {
  records = [
    {
      type: 'entrata',
      account: 'cassa',
      amount: 10.00
    },
    {
      type: 'uscita',
      account: 'conto corrente',
      amount: -5.00
    }
  ]
}
