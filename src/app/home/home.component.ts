import { Component } from '@angular/core';
import {ActionListComponent} from '../action-list/action-list.component';

@Component({
  selector: 'app-home',
  imports: [ActionListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
