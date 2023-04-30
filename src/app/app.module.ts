import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GifsModule } from './gifs/gifs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
