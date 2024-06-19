import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: AppComponent
    }
];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);