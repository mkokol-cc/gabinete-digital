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
import { InscripcionEmpresaComponent } from './pages/arca/inscripcion-empresa/inscripcion-empresa.component';
import { AltaTasaInmueblesComponent } from './pages/muni/alta-tasa-inmuebles/alta-tasa-inmuebles.component';
import { AltaPatenteMunicipalComponent } from './pages/muni/alta-patente-municipal/alta-patente-municipal.component';
import { AltaComercioIndustriaComponent } from './pages/muni/alta-comercio-industria/alta-comercio-industria.component';
import { AltaServicioGasComponent } from './pages/ecogas/alta-servicio-gas/alta-servicio-gas.component';
import { AltaServiciosComponent } from './pages/cooperativa/alta-servicios/alta-servicios.component';
import { AltaServicioAguaComponent } from './pages/emav/alta-servicio-agua/alta-servicio-agua.component';
import { AltaSeguroVehiculosComponent } from './pages/seguro/alta-seguro-vehiculos/alta-seguro-vehiculos.component';
import { ContratoAlquilerComponent } from './pages/inmobiliaria/contrato-alquiler/contrato-alquiler.component';
import { InscripcionClienteComponent } from './pages/proveedor/inscripcion-cliente/inscripcion-cliente.component';
import { OrdenCompraComponent } from './pages/proveedor/orden-compra/orden-compra.component';
import { AdminAlumnoComponent } from './pages/admin/admin-alumno/admin-alumno.component';
import { PlataformasComponent } from './pages/admin/admin-alumno/plataformas/plataformas.component';
import { CorreoComponent } from './pages/admin/admin-alumno/correo/correo.component';
import { MisTramitesComponent } from './pages/admin/admin-alumno/mis-tramites/mis-tramites.component';
import { MisDatosComponent } from './pages/admin/admin-alumno/mis-datos/mis-datos.component';
import { FacturaCComponent } from './pages/arca/comprobantes/factura-c/factura-c.component';


export const routes: Routes = [
    //{path: '', component: FormulariosComponent},
    //{path: '', component: DashboardComponent},
    {path: 'arca', component: LandingComponentArca},
    {path: 'arca/login', component: LoginComponent},
    {path: 'arca/servicios', component: ServiciosComponent},
    {path: 'arca/servicios/comprobantes', component: ComprobantesComponent},
    {path: 'arca/servicios/comprobantes/factura-c', component: FacturaCComponent},
    {path: 'arca/inscripcion-empresa', component: InscripcionEmpresaComponent},

    {path: 'ecogas', component: LandingComponentEcogas},
    {path: 'ecogas/alta-servicio-gas', component: AltaServicioGasComponent},

    {path: 'banco', component: LandingComponentBanco},
    {path: 'banco/menu', component: MenuComponent},
    {path: 'banco/alta', component: InscripcionComponent},

    {path: 'muni', component: LandingComponentMuni},
    {path: 'muni/alta-tasa-inmuebles', component: AltaTasaInmueblesComponent},
    {path: 'muni/alta-patente-municipal', component: AltaPatenteMunicipalComponent},
    {path: 'muni/alta-comercio-industria', component: AltaComercioIndustriaComponent},

    {path: 'cooperativa', component: LandingComponentCooperativa},
    {path: 'cooperativa/alta-servicios', component: AltaServiciosComponent},

    {path: 'seguro', component: LandingComponentSeguro},
    {path: 'seguro/alta-seguro-vehiculos', component: AltaSeguroVehiculosComponent},

    {path: 'inmobiliaria', component: LandingComponentInmobiliaria},
    {path: 'inmobiliaria/contrato-alquiler', component: ContratoAlquilerComponent},

    {path: 'proveedor', component: LandingComponentProveedor},
    {path: 'proveedor/inscripcion-cliente', component: InscripcionClienteComponent},
    {path: 'proveedor/orden-compra', component: OrdenCompraComponent},

    {path: 'emav', component: LandingComponentEmav},
    {path: 'emav/alta-servicio-agua', component: AltaServicioAguaComponent},
    
    {path: '', component: AdminAlumnoComponent, children: [
        {path: '', redirectTo: 'plataformas', pathMatch: 'full'},
        {path: 'plataformas', component: PlataformasComponent},
        {path: 'correo', component: CorreoComponent},
        {path: 'mis-tramites', component: MisTramitesComponent},
        {path: 'mis-datos', component: MisDatosComponent},
    ]},
];
