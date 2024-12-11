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
    console.log(this.records);
    return this.records;
  }

  post(newRecord: Record) {
    const ids = this.records.map((record) => record.id);
    if (ids.includes(newRecord.id)) {
      newRecord.id = ids[ids.length-1] + 1;
    }
    this.records.push(newRecord);
  }
}
