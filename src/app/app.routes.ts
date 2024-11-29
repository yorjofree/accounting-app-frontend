import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionListComponent } from './action-list/action-list.component';
import { RecordTableComponent } from './record-table/record-table.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'actionlist', 
        component: ActionListComponent, 
        children: [
            {path: 'get', component: RecordTableComponent}
        ]
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
