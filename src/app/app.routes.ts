import { Routes } from '@angular/router';
import { LandingComponent } from './pages/arca/landing/landing.component';
import { LoginComponent } from './pages/arca/login/login.component';
import { ServiciosComponent } from './pages/arca/servicios/servicios.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'arca', component: LandingComponent},
    {path: 'arca/login', component: LoginComponent},
    {path: 'arca/servicios', component: ServiciosComponent},
];
