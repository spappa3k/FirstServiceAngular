import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewListaComponent } from './preview-lista/preview-lista.component';
import { PreviewPostComponent } from './preview-post/preview-post.component';
import { PreferitiComponent } from './preferiti/preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewListaComponent,
    PreviewPostComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
