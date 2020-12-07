import { FunctionModule } from './../function/function.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceRoutingModule } from './entrance-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntranceRoutingModule,
    FunctionModule
  ]
})
export class EntranceModule { }
