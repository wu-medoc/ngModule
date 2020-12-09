import { TemplateModule } from './template/template.module';
import { FunctionModule } from './function/function.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntranceComponent } from './entrance/entrance.component';
import { ExploreMapComponent } from './explore/explore-map/explore-map.component';

@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    ExploreMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FunctionModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
