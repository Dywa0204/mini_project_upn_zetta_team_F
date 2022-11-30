import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule 
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SharedModule { }
