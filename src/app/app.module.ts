import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevocomponenteComponent } from './components/nuevocomponente/nuevocomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevocomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
