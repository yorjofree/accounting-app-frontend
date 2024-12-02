import { Component, input } from '@angular/core';
import { Record } from '../record.interface';

@Component({
  selector: 'app-record',
  imports: [],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
  record = input.required<Record>();
}
