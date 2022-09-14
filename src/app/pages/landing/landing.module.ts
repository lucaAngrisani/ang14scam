import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { GetEtaModule } from 'src/app/pipes/get-eta/get-eta.module';
import { LandingService } from './services/landing.service';
import { PopUpModule } from 'src/app/components/dialogs/pop-up/pop-up.module';

const routes: Routes = [
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PopUpModule,
    GetEtaModule,
  ],
  declarations: [
    LandingComponent
  ],
  providers: [
    LandingService
  ]
})
export class LandingModule { }
