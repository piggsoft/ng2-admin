import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import './rxjs-extensions';

import {AppComponent}  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/index'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
