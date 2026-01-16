import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { TecnologiesComponent } from './features/tecnologies/tecnologies.component';
import { CertificacionesComponent } from './features/certificaciones/certificaciones.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'tecnologies', component: TecnologiesComponent },
  { path: 'certificaciones', component: CertificacionesComponent },
];
