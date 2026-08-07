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
import { LandingComponent as LandingComponentDgr} from './pages/dgr/landing/landing.component';
import { MenuComponent as MenuDgrComponent } from './pages/dgr/menu/menu.component';
import { MisCuentasComponent as MisCuentasDgrComponent } from './pages/dgr/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosDgrComponent } from './pages/dgr/menu/mis-datos/mis-datos.component';
import { AltaIngresosBrutosComponent } from './pages/dgr/alta-ingresos-brutos/alta-ingresos-brutos.component';
import { AltaInmobiliarioComponent } from './pages/dgr/alta-inmobiliario/alta-inmobiliario.component';
import { AltaAutomotorComponent } from './pages/dgr/alta-automotor/alta-automotor.component';
import { LoginComponent } from './pages/arca/login/login.component';
import { ServiciosComponent } from './pages/arca/servicios/servicios.component';
import { ComprobantesComponent } from './pages/arca/comprobantes/comprobantes.component';
import { FormulariosComponent } from './forms/formularios/formularios.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MenuComponent as MenuSeguroComponent } from './pages/seguro/menu/menu.component';
import { MisCuentasComponent } from './pages/seguro/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosSeguroComponent } from './pages/seguro/menu/mis-datos/mis-datos.component';
import { MenuComponent } from './pages/banco/menu/menu.component';
import { MisCuentasBancoComponent } from './pages/banco/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosBancoComponent } from './pages/banco/menu/mis-datos/mis-datos.component';
import { InscripcionComponent } from './pages/banco/inscripcion/inscripcion.component';
import { InscripcionEmpresaComponent } from './pages/arca/inscripcion-empresa/inscripcion-empresa.component';
import { MenuComponent as MenuMuniComponent } from './pages/muni/menu/menu.component';
import { AltaTasaInmueblesComponent } from './pages/muni/alta-tasa-inmuebles/alta-tasa-inmuebles.component';
import { AltaPatenteMunicipalComponent } from './pages/muni/alta-patente-municipal/alta-patente-municipal.component';
import { AltaComercioIndustriaComponent } from './pages/muni/alta-comercio-industria/alta-comercio-industria.component';
import { MisCuentasComponent as MisCuentasMuniComponent } from './pages/muni/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosMuniComponent } from './pages/muni/menu/mis-datos/mis-datos.component';
import { AltaServicioGasComponent } from './pages/ecogas/alta-servicio-gas/alta-servicio-gas.component';
import { MenuComponent as MenuEcogasComponent } from './pages/ecogas/menu/menu.component';
import { MisCuentasComponent as MisCuentasEcogasComponent } from './pages/ecogas/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosEcogasComponent } from './pages/ecogas/menu/mis-datos/mis-datos.component';
import { AltaServiciosComponent } from './pages/cooperativa/alta-servicios/alta-servicios.component';
import { MenuComponent as MenuCooperativaComponent } from './pages/cooperativa/menu/menu.component';
import { MisCuentasComponent as MisCuentasCooperativaComponent } from './pages/cooperativa/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosCooperativaComponent } from './pages/cooperativa/menu/mis-datos/mis-datos.component';
import { AltaServicioAguaComponent } from './pages/emav/alta-servicio-agua/alta-servicio-agua.component';
import { MenuComponent as MenuEmavComponent } from './pages/emav/menu/menu.component';
import { MisCuentasComponent as MisCuentasEmavComponent } from './pages/emav/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosEmavComponent } from './pages/emav/menu/mis-datos/mis-datos.component';
import { AltaSeguroVehiculosComponent } from './pages/seguro/alta-seguro-vehiculos/alta-seguro-vehiculos.component';
import { ContratoAlquilerComponent } from './pages/inmobiliaria/contrato-alquiler/contrato-alquiler.component';
import { MenuComponent as MenuInmobiliariaComponent } from './pages/inmobiliaria/menu/menu.component';
import { MisCuentasComponent as MisCuentasInmobiliariaComponent } from './pages/inmobiliaria/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosInmobiliariaComponent } from './pages/inmobiliaria/menu/mis-datos/mis-datos.component';
import { InscripcionClienteComponent } from './pages/proveedor/inscripcion-cliente/inscripcion-cliente.component';
import { OrdenCompraComponent } from './pages/proveedor/orden-compra/orden-compra.component';
import { MenuComponent as MenuProveedorComponent } from './pages/proveedor/menu/menu.component';
import { MisCuentasComponent as MisCuentasProveedorComponent } from './pages/proveedor/menu/mis-cuentas/mis-cuentas.component';
import { MisDatosComponent as MisDatosProveedorComponent } from './pages/proveedor/menu/mis-datos/mis-datos.component';
import { AdminAlumnoComponent } from './pages/admin/admin-alumno/admin-alumno.component';
import { PlataformasComponent } from './pages/admin/admin-alumno/plataformas/plataformas.component';
import { CorreoComponent } from './pages/admin/admin-alumno/correo/correo.component';
import { MisTramitesComponent } from './pages/admin/admin-alumno/mis-tramites/mis-tramites.component';
import { MisDatosComponent } from './pages/admin/admin-alumno/mis-datos/mis-datos.component';
import { FacturaCComponent } from './pages/arca/comprobantes/factura-c/factura-c.component';
import { HomeBankingComponent } from './pages/banco/home-banking/home-banking.component';


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
    {path: 'ecogas/menu', component: MenuEcogasComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasEcogasComponent},
        {path: 'mis-datos', component: MisDatosEcogasComponent},
        {path: 'alta-servicio', component: AltaServicioGasComponent},
    ]},
    //{path: 'ecogas/alta-servicio-gas', component: AltaServicioGasComponent},

    {path: 'banco', component: LandingComponentBanco},
    {path: 'banco/menu', component: MenuComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasBancoComponent},
        {path: 'mis-datos', component: MisDatosBancoComponent},
        {path: 'inscripcion', component: InscripcionComponent},
    ]},
    {path: 'banco/homebanking', component: HomeBankingComponent},

    {path: 'muni', component: LandingComponentMuni},
    {path: 'muni/menu', component: MenuMuniComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasMuniComponent},
        {path: 'mis-datos', component: MisDatosMuniComponent},
        {path: 'alta-comercio-industria', component: AltaComercioIndustriaComponent},
        {path: 'alta-tasa-inmuebles', component: AltaTasaInmueblesComponent},
        {path: 'alta-patente-municipal', component: AltaPatenteMunicipalComponent},
    ]},
    //{path: 'muni/alta-tasa-inmuebles', component: AltaTasaInmueblesComponent},
    //{path: 'muni/alta-patente-municipal', component: AltaPatenteMunicipalComponent},
    //{path: 'muni/alta-comercio-industria', component: AltaComercioIndustriaComponent},

    {path: 'cooperativa', component: LandingComponentCooperativa},
    {path: 'cooperativa/menu', component: MenuCooperativaComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasCooperativaComponent},
        {path: 'mis-datos', component: MisDatosCooperativaComponent},
        {path: 'alta-servicios', component: AltaServiciosComponent},
    ]},
    //{path: 'cooperativa/alta-servicios', component: AltaServiciosComponent},

    {path: 'seguro', component: LandingComponentSeguro},
    {path: 'seguro/menu', component: MenuSeguroComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'alta', component: AltaSeguroVehiculosComponent},
        {path: 'mis-cuentas', component: MisCuentasComponent},
        {path: 'mis-datos', component: MisDatosSeguroComponent},
    ]},
    //{path: 'seguro/alta-seguro-vehiculos', component: AltaSeguroVehiculosComponent},

    {path: 'inmobiliaria', component: LandingComponentInmobiliaria},
    {path: 'inmobiliaria/menu', component: MenuInmobiliariaComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasInmobiliariaComponent},
        {path: 'mis-datos', component: MisDatosInmobiliariaComponent},
        {path: 'contrato-alquiler', component: ContratoAlquilerComponent},
    ]},
    //{path: 'inmobiliaria/contrato-alquiler', component: ContratoAlquilerComponent},

    {path: 'proveedor', component: LandingComponentProveedor},
    {path: 'proveedor/menu', component: MenuProveedorComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasProveedorComponent},
        {path: 'mis-datos', component: MisDatosProveedorComponent},
        {path: 'alta-cliente', component: InscripcionClienteComponent},
        {path: 'orden-compra', component: OrdenCompraComponent},
    ]},
    //{path: 'proveedor/inscripcion-cliente', component: InscripcionClienteComponent},
    //{path: 'proveedor/orden-compra', component: OrdenCompraComponent},

    {path: 'emav', component: LandingComponentEmav},
    {path: 'emav/menu', component: MenuEmavComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasEmavComponent},
        {path: 'mis-datos', component: MisDatosEmavComponent},
        {path: 'alta-servicios', component: AltaServicioAguaComponent},
    ]},
    //{path: 'emav/alta-servicio-agua', component: AltaServicioAguaComponent},

    {path: 'dgr', component: LandingComponentDgr},
    {path: 'dgr/menu', component: MenuDgrComponent, children: [
        {path: '', redirectTo: 'mis-cuentas', pathMatch: 'full'},
        {path: 'mis-cuentas', component: MisCuentasDgrComponent},
        {path: 'mis-datos', component: MisDatosDgrComponent},
        {path: 'alta-ingresos-brutos', component: AltaIngresosBrutosComponent},
        {path: 'alta-inmobiliario', component: AltaInmobiliarioComponent},
        {path: 'alta-automotor', component: AltaAutomotorComponent},
    ]},

    {path: '', component: AdminAlumnoComponent, children: [
        {path: '', redirectTo: 'plataformas', pathMatch: 'full'},
        {path: 'plataformas', component: PlataformasComponent},
        {path: 'correo', component: CorreoComponent},
        {path: 'mis-tramites', component: MisTramitesComponent},
        {path: 'mis-datos', component: MisDatosComponent},
    ]},
];
