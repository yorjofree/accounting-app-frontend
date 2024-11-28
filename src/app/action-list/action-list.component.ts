import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-action-list',
  imports: [RouterOutlet, RouterLink],
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

  action = signal('no action');

  getRecords(): void {
    console.log('Changing state of action signal to "get"');
    this.action.set('get');
  }

  postRecord(): void {
    console.log('Changing state of action signal to "post"');
    this.action.set('post');
  }

  updateRecord(): void {
    console.log('Changing state of action signal to "update"');
    this.action.set('update');
  }

  deleteRecord(): void {
    console.log('Changing state of action signal to "delete"');
    this.action.set('delete');
  }
}
