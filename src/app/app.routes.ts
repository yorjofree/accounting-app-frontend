import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionListComponent } from './action-list/action-list.component';
import { RecordListComponent } from './record-list/record-list.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'actionlist', 
        component: ActionListComponent, 
        children: [
            {path: 'get', component: RecordListComponent}
        ]
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
