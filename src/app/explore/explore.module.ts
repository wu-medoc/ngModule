import { FunctionModule } from './../function/function.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreListComponent } from './explore-list/explore-list.component';
import { ExploreDetailComponent } from './explore-detail/explore-detail.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';


@NgModule({
  declarations: [ExploreListComponent, ExploreDetailComponent, DeliveryInfoComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    FunctionModule
  ]
})
export class ExploreModule { }
