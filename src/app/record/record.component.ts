import { Component, input } from '@angular/core';

@Component({
  selector: 'app-record',
  imports: [],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
  record = input.required<{type: string, account: string, amount: number}>();
}
