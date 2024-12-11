import { Injectable } from '@angular/core';
import { RECORDS } from './mock.records';
import { Record } from './record.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  
  records: Record[];

  constructor() { 
    this.records = RECORDS;
  }

  get() {
    return this.records;
  }

  post(newRecord: Record) {
    this.records.push(newRecord);
  }
}
