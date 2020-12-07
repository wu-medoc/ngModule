import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Footer', component: FooterComponent },
  { path: 'Error404', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionRoutingModule { }
