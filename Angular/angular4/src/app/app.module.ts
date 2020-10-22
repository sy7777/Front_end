import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUppercasePipe } from './pipes/new-uppercase.pipe';
import { ChildComponent } from './view/child/child.component';
import { MystyleDirective } from './directives/mystyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewUppercasePipe,
    ChildComponent,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
