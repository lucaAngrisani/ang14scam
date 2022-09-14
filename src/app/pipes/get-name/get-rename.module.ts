import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetRenamePipe } from './get-rename.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GetRenamePipe
  ],
  exports: [
    GetRenamePipe
  ]
})
export class GetRenameModule { }
