import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { ExploreDetailComponent } from './explore-detail/explore-detail.component';
import { ExploreListComponent } from './explore-list/explore-list.component';
import { ExploreMapComponent } from './explore-map/explore-map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ExploreMapComponent },
  { path: 'ExploreMap', component: ExploreMapComponent },
  { path: 'ExploreList', component: ExploreListComponent },
  { path: 'ExploreDetail', component: ExploreDetailComponent },
  { path: 'DeliveryInfo', component: DeliveryInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
