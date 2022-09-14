import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundService } from './services/not-found.service';

const routes: Routes = [
  { path: '', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NotFoundComponent
  ],
  providers: [
    NotFoundService
  ]
})
export class NotFoundModule { }
