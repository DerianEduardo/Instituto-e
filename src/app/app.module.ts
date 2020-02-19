import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PanelGeneralComponent } from './panel-general/panel-general.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { ReinscripcionesComponent } from './reinscripciones/reinscripciones.component';
import { ColegiaturasComponent } from './colegiaturas/colegiaturas.component';
import { BajasTemporalesComponent } from './bajas-temporales/bajas-temporales.component';
import { BajasPermanentesComponent } from './bajas-permanentes/bajas-permanentes.component';
import { PagosExtraComponent } from './pagos-extra/pagos-extra.component';
import { ConstanciasComponent } from './constancias/constancias.component';
import { CredencialesComponent } from './credenciales/credenciales.component';
import { TitulosComponent } from './titulos/titulos.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LogActividadesComponent } from './log-actividades/log-actividades.component';
import { PromocionesComponent } from './promociones/promociones.component';

const rutas: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'general', component: PanelGeneralComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'inscripciones', component: InscripcionesComponent},
  {path: 'reinscripciones', component: ReinscripcionesComponent},
  {path: 'colegiaturas', component: ColegiaturasComponent},
  {path: 'bajas-temporales', component: BajasTemporalesComponent},
  {path: 'bajas-permanentes', component: BajasPermanentesComponent},
  {path: 'pagos', component: PagosExtraComponent},
  {path: 'constancias', component: ConstanciasComponent},
  {path: 'credenciales', component: CredencialesComponent},
  {path: 'titulos', component: TitulosComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'promociones', component: PromocionesComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'log-actividades', component: LogActividadesComponent},
  {path: '', component: PanelGeneralComponent},
  {path: 'error404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelGeneralComponent,
    NotFoundComponent,
    AlumnosComponent,
    ProfesoresComponent,
    InscripcionesComponent,
    ReinscripcionesComponent,
    ColegiaturasComponent,
    BajasTemporalesComponent,
    BajasPermanentesComponent,
    PagosExtraComponent,
    ConstanciasComponent,
    CredencialesComponent,
    TitulosComponent,
    PerfilUsuarioComponent,
    EmpleadosComponent,
    LogActividadesComponent,
    AcercaDeComponent,
    PromocionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
