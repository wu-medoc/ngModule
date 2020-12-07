import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionRoutingModule } from './function-routing.module';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [FooterComponent, Error404Component],
  imports: [
    CommonModule,
    FunctionRoutingModule,
  ],
  exports: [FooterComponent]
})
export class FunctionModule { }
