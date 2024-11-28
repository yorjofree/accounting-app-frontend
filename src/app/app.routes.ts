import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionListComponent } from './action-list/action-list.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'actionlist', component: ActionListComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
