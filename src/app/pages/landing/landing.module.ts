import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { PopUpModule } from 'src/app/dialogs/pop-up/pop-up.module';
import { RouterModule, Routes } from '@angular/router';
import { GetEtaModule } from 'src/app/pipes/get-eta/get-eta.module';

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
  declarations: [LandingComponent]
})
export class LandingModule { }
