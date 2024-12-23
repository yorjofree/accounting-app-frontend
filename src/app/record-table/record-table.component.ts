import { Component, inject, signal } from '@angular/core';
import { RecordComponent } from '../record/record.component';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-table',
  imports: [RecordComponent],
  templateUrl: './record-table.component.html',
  styleUrl: './record-table.component.css'
})
export class RecordTableComponent {
  private recordService = inject(RecordService);
  records = this.recordService.get();
}
