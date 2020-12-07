import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./entrance/entrance.module').then(m => m.EntranceModule) },
  { path: 'ExploreMap', loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule) },
  { path: 'Function', loadChildren: () => import('./function/function.module').then(m => m.FunctionModule) },
  { path: 'Travel', loadChildren: () => import('./travel/travel.module').then(m => m.TravelModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
