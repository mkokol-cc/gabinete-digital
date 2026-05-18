import { Routes } from '@angular/router';
import { LandingComponent as LandingComponentArca } from './pages/arca/landing/landing.component';
import { LandingComponent as LandingComponentEcogas} from './pages/ecogas/landing/landing.component';
import { LoginComponent } from './pages/arca/login/login.component';
import { ServiciosComponent } from './pages/arca/servicios/servicios.component';
import { ComprobantesComponent } from './pages/arca/comprobantes/comprobantes.component';
import { FormulariosComponent } from './forms/formularios/formularios.component';

export const routes: Routes = [
    {path: '', component: FormulariosComponent},
    {path: 'arca', component: LandingComponentArca},
    {path: 'arca/login', component: LoginComponent},
    {path: 'arca/servicios', component: ServiciosComponent},
    {path: 'arca/servicios/comprobantes', component: ComprobantesComponent},

    {path: 'ecogas', component: LandingComponentEcogas},
];
