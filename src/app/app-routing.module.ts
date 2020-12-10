import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './function/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', loadChildren: () => import('./entrance/entrance.module').then(m => m.EntranceModule) },
  { path: 'Explore', loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule) },
  { path: 'Function', loadChildren: () => import('./function/function.module').then(m => m.FunctionModule) },
  { path: 'Travel', loadChildren: () => import('./travel/travel.module').then(m => m.TravelModule) },
  { path: 'Template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
