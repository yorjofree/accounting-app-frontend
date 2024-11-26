import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-action-list',
  imports: [],
  templateUrl: './action-list.component.html',
  styleUrl: './action-list.component.css'
})
export class ActionListComponent {
  record = {
    get: signal('See all records'),
    post: signal('Add a new record'),
    update: signal('Update a record'),
    delete: signal('Delete a record')
  };
}
