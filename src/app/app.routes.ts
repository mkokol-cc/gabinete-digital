import { Routes } from '@angular/router';
import { LandingComponent as LandingComponentArca } from './pages/arca/landing/landing.component';
import { LandingComponent as LandingComponentEcogas} from './pages/ecogas/landing/landing.component';
import { LandingComponent as LandingComponentMuni} from './pages/muni/landing/landing.component';
import { LandingComponent as LandingComponentEmav} from './pages/emav/landing/landing.component';
import { LandingComponent as LandingComponentCooperativa} from './pages/cooperativa/landing/landing.component';
import { LandingComponent as LandingComponentSeguro} from './pages/seguro/landing/landing.component';
import { LandingComponent as LandingComponentInmobiliaria} from './pages/inmobiliaria/landing/landing.component';
import { LandingComponent as LandingComponentBanco} from './pages/banco/landing/landing.component';
import { LandingComponent as LandingComponentProveedor} from './pages/proveedor/landing/landing.component';
import { LoginComponent } from './pages/arca/login/login.component';
import { ServiciosComponent } from './pages/arca/servicios/servicios.component';
import { ComprobantesComponent } from './pages/arca/comprobantes/comprobantes.component';
import { FormulariosComponent } from './forms/formularios/formularios.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MenuComponent } from './pages/banco/menu/menu.component';
import { InscripcionComponent } from './pages/banco/inscripcion/inscripcion.component';
import { AdminAlumnoComponent } from './pages/admin/admin-alumno/admin-alumno.component';
import { PlataformasComponent } from './pages/admin/admin-alumno/plataformas/plataformas.component';
import { CorreoComponent } from './pages/admin/admin-alumno/correo/correo.component';
import { MisTramitesComponent } from './pages/admin/admin-alumno/mis-tramites/mis-tramites.component';
import { MisDatosComponent } from './pages/admin/admin-alumno/mis-datos/mis-datos.component';


export const routes: Routes = [
    //{path: '', component: FormulariosComponent},
    {path: '', component: DashboardComponent},
    {path: 'arca', component: LandingComponentArca},
    {path: 'arca/login', component: LoginComponent},
    {path: 'arca/servicios', component: ServiciosComponent},
    {path: 'arca/servicios/comprobantes', component: ComprobantesComponent},

    {path: 'ecogas', component: LandingComponentEcogas},

    {path: 'banco', component: LandingComponentBanco},
    {path: 'banco/menu', component: MenuComponent},
    {path: 'banco/alta', component: InscripcionComponent},

    {path: 'muni', component: LandingComponentMuni},
    {path: 'cooperativa', component: LandingComponentCooperativa},
    {path: 'seguro', component: LandingComponentSeguro},
    {path: 'inmobiliaria', component: LandingComponentInmobiliaria},
    {path: 'proveedor', component: LandingComponentProveedor},
    {path: 'emav', component: LandingComponentEmav},
    {path: 'admin-alumno', component: AdminAlumnoComponent, children: [
        {path: '', redirectTo: 'plataformas', pathMatch: 'full'},
        {path: 'plataformas', component: PlataformasComponent},
        {path: 'correo', component: CorreoComponent},
        {path: 'mis-tramites', component: MisTramitesComponent},
        {path: 'mis-datos', component: MisDatosComponent},
    ]},
];
