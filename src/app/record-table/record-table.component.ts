import { Component } from '@angular/core';
import { RecordComponent } from '../record/record.component';

@Component({
  selector: 'app-record-table',
  imports: [RecordComponent],
  templateUrl: './record-table.component.html',
  styleUrl: './record-table.component.css'
})
export class RecordTableComponent {
  records = [
    {
      id: 1,
      type: 'entrata',
      account: 'cassa',
      amount: 10.00
    },
    {
      id: 2,
      type: 'uscita',
      account: 'conto corrente',
      amount: -5.00
    },
    {
      id: 3,
      type: 'entrata',
      account: 'cassa',
      amount: 7.50
    }
  ]
}
