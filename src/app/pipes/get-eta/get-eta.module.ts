import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEtaPipe } from './get-eta.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GetEtaPipe
  ],
  exports: [
    GetEtaPipe
  ]
})
export class GetEtaModule { }
