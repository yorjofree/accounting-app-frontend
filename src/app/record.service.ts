import { Injectable } from '@angular/core';
import { Record } from './record.interface';
import { RECORDS } from './mock.records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }
  
  get(): Record[] {
    return RECORDS;
  }
}
