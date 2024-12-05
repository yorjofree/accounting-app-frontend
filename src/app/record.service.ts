import { Injectable } from '@angular/core';
import { RECORDS } from './mock.records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }
  
  get() {
    return RECORDS;
  }
}
