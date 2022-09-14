import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    path: 'landing', component: LandingComponent, children: [
      { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) }
    ]
  },
  {
    path: 'notfound', component: NotFoundComponent, children: [
      { path: '', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }
    ]
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
