import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopupModule } from 'projects/popup/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
