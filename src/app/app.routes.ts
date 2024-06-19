import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { KafkatopicsComponent } from './kafkatopics/kafkatopics.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: KafkatopicsComponent
    },
    {
        path: 'groups',
        loadComponent: () => import('./groups/groups.component')
            .then(mod => mod.GroupsComponent),
    },
    {
        path: 'overview',
        loadComponent: () => import('./dashboard/dashboard.component')
            .then(mod => mod.DashboardComponent),
    },
    {
        path: 'kafkatopics',
        loadComponent: () => import('./kafkatopics/kafkatopics.component')
            .then(mod => mod.KafkatopicsComponent),
    }
];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);